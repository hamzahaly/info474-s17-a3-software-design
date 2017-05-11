var Bubble = function() {
    //Set default values
    var height = 700;
    var width = 700;
    var radius = 1;
    var colorScale = d3.scaleOrdinal().range(d3.schemeCategory10);
    var colorInput;
    var circleData;
    var margin = {
        left: 70,
        bottom: 50,
        top: 30,
        right: 10
    };
    var format = d3.format(",d");
    var hovers = false;
    var hoverLabel;
    var hoverUnit;

    //Chart function to return
    var chart = function(selection) {
        var chartHeight = height - margin.bottom - margin.top;
        var chartWdith = width - margin.left - margin.right;
    
    var pack = d3.pack()
        .size([width, height])
        .padding(1.5);

        selection.each(function(data) {
            var nestedData = data;

            //Calculuate a root from the hierarchy data
            var root = d3.hierarchy({
                values: nestedData
            }, function(d) {
                return d.values;
            });

            //Choose what property of the data to graph the data on
            root.sum(function(d) {
                return +d[circleData];
            });

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
                    return 'translate(' + d.x + ',' + d.y + ')';
                });

            //Tooltip logic
            var tooltip = d3.select("body")
                .append("div")
                .style("position", "absolute")
                .style("z-index", "10")
                .style("visibility", "hidden")
                .style("color", "white")
                .style("padding", "8px")
                .style("background-color", "rgba(0, 0, 0, 0.75)")
                .style("border-radius", "6px")
                .style("font", "12px sans-serif")
                .text("tooltip");
            
            //Append circles to the g's and give them color
            node.append('circle')
                .attr('r', function(d) {
                    console.log(radius);
                    console.log(d.r);
                    return (d.r * radius);
                })
                //Need to change the fill color
                .attr('fill', function(d) {
                    return colorScale(d.data[colorInput]);
                });

            //Add hovers if true
            if (hovers) {
                node.selectAll('circle')
                    .on("mouseover", function(d) {
                        console.log(d);
                        tooltip.text(d.data[hoverLabel] + ": " + format(d.value) + " " + hoverUnit);
                        tooltip.style("visibility", "visible");
                    })
                    .on("mousemove", function() {
                        return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
                    })
                    .on("mouseout", function() { 
                        return tooltip.style("visibility", "hidden");
                    });
            };    
            
            node.exit().remove();
        });
    };

    //Pass in an integer value to set the chart's Height
    chart.height = function(value) {
        if (!arguments.length) return height;
        height = value;
        return chart;
    };

    //Pass in an integer value to set the chart's Width
    chart.width = function(value) {
        if (!arguments.length) return width;
        width = value;
        return chart;
    };

    //Pass in an integer value to mulitply the radius by that integer amount
    chart.radius = function(value) {
        if (!arguments.length) return radius;
        radius = value;
        return chart;
    };

    //Pass in an arrary of values to set a color scale that uses the d3.schemeCategory10 function
    chart.colors = function(array) {
        if (!arguments.length) return colors;
        colors = array;
        colorScale = d3.scaleOrdinal().domain(colors).range(d3.schemeCategory10);
        return chart;
    };

    //Pass in a property of the data in string format to associate colors based on the property chosen 
    chart.colorInput = function(string) {
        if (!arguments.length) return colorScale;
        colorInput = string;
        return chart;
    };

    //Pass in a property of the data in string format to 
    chart.circleData = function(string) {
        if (!arguments.length) return circleData;
        circleData = string;
        return chart;
    };

    //Pass true or false to enable hovers on the chart
    chart.hovers = function(bool, label, unit) {
        if (!arguments.length) return hovers;
        hovers = bool;
        hoverLabel = label;
        hoverUnit = unit
        return chart;
    };

    return chart;
};