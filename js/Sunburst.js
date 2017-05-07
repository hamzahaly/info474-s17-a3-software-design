var Sunburst = function() {

    //Set default values
    var height = 700;
    var width = 700;
    var margin = {
        left: 70,
        bottom: 50,
        top: 30,
        right: 10
    };

    var chart = function(selection) {
        console.log('Test');
        var chartHeight = height - margin.bottom - margin.top;
        var chartWdith = width - margin.left - margin.right;


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

    return chart;
};