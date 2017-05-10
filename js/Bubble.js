var Bubble = function() {
    //Set default values
    var height = 700;
    var width = 700;
    var radius = 1;
    var colors;
    var circleData;
    var text;
    var margin = {
        left: 70,
        bottom: 50,
        top: 30,
        right: 10
    };
    var hovers;

    //Chart function to return
    var chart = function(selection) {
        var chartHeight = height - margin.bottom - margin.top;
        var chartWdith = width - margin.left - margin.right;
    
    var pack = d3.pack()
        .size([width, height])
        .padding(1.5);

        selection.each(function(data) {
            var nestedData = data;

            var root = d3.hierarchy({
                values: nestedData
            }, function(d) {
                return d.values;
            });

            root.sum(function(d) {
                return +d[circleData];
            });

            //d['calories']
            //d[sizeVar]
            //sizeVar = "value"

            var categories = nestedData.map(function(d) {
                return d.key;
            });

            var colorScale = d3.scaleOrdinal().domain(categories).range(d3.schemeCategory10);

            //SVG element to draw things in
            var svg = d3.select(this).selectAll('.chart')
                .data([nestedData]);

            //Setting attrs for the svg element to display viz in
            var svgEnter = svg.enter()
                .append('svg')
                .attr('width', width)
                .attr('height', height);

            //Circle nodes, g's, to append circles to.
            var node = svgEnter.selectAll('.node').data(pack(root).leaves())
                .enter().append('g')
                .attr('class', 'node')
                .attr('transform', function(d) { 
                    console.log(d);
                    return 'translate(' + d.x + ',' + d.y + ')';
                })

            node.append('circle')
                .attr('r', function(d) {
                    return d.r;
                })
                //Need to change the fill color
                .attr('fill', function(d) {
                    return colorScale(d.data.Category);
                });

            node.exit().remove();
        });
    };

    chart.height = function(value) {
        if (!arguments.length) return height;
        height = value;
        return chart;
    };

    chart.width = function(value) {
        if (!arguments.length) return width;
        width = value;
        return chart;
    };

    chart.radius = function(value) {
        if (!arguments.length) return radius;
        radius = value;
        return chart;
    };

    chart.colors = function(value) {
        if (!arguments.length) return colors;
        //Logic for determining colors for the color scale
        return chart;
    };

    chart.circleData = function(value) {
        if (!arguments.length) return circleData;
        //Logic for determining which piece of data to use root.sum on
        return chart;
    };

    chart.text = function(value) {
        if (!arguments.length) return text;
        //Logic for deciding what kinds of text goes in the bubbles of the bubble chart
        return chart;
    };

    chart.hovers = function(value) {
        if (!arguments.length) return hovers;
        //logic for determing what goes into hovers and/or hovers exist.
        return chart;
    }

    return chart;
};