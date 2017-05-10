var Bubble = function() {
    //Set default values
    var height = 700;
    var width = 700;
    var radius = 1;
    var margin = {
        left: 70,
        bottom: 50,
        top: 30,
        right: 10
    };

    //Chart function to return
    var chart = function(selection) {
        var chartHeight = height - margin.bottom - margin.top;
        var chartWdith = width - margin.left - margin.right;
    
    var pack = d3.pack()
        .size([width, height])
        .padding(1.5);

        selection.each(function(data) {
            var nestedData = data.values;

            console.log(nestedData);

            var root = d3.hierarchy({
                values: nestedData
            }, function(d) {
                return d.values;
            });

            console.log(root);

            root.sum(function(d) {
                return +d.Calories;
            });

            // var categories = nestedData.map(function(d) {
            //     return d.key;
            // });

            //var colorScale = d3.scaleOrdinal().range(d3.schemeCategory10);

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
                .attr('fill', 'blue');

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

    return chart;
};