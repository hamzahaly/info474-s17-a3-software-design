$(function() {
    d3.csv('data/menu.csv', function(error, data) {
    var bubble = Bubble().width(560).height(900);

    var nestedData = d3.nest()
        .key(function(d) {
            return d.Category;
        })
        .entries(data);

    console.log(nestedData);

    var charts = d3.select('#viz').selectAll('.chart')
        .data(nestedData);

    charts.enter().append('div')
        .attr('class', 'chart')
        .merge(charts)
        .call(bubble);

    charts.exit().remove();


    //Necessary to prep data?

    //Nest data into heirarchical structure
    // var svg = d3.select('#viz')
    // .append('svg')
    // .attr('width', width)
    // .attr('height', height);



    // var root = d3.hierarchy({
    //     values: nestedData
    // }, function(d) {
    //     return d.values;
    // });

    // root.sum(function(d) {
    //     return +d.Calories;
    // })

    // var categories = nestedData.map(function(d) {
    //     return d.key;
    // });

    // var colorScale = d3.scaleOrdinal().domain(categories).range(d3.schemeCategory10);

    // var pack = d3.pack()
    //     .size([width, height])
    //     .padding(1.5);

    // var node = svg.selectAll('.node').data(pack(root).leaves())
    //     .enter().append('g')
    //     .attr('class', 'node')
    //     .attr('transform', function(d) { 
    //         console.log(d);
    //         return 'translate(' + d.x + ',' + d.y + ')';
    //     })

    // node.append('circle')
    //     .text(function(d) {
    //         return d.data.Item;
    //     })
    //     .attr('r', function(d) {
    //         return d.r;
    //     })
    //     .attr('fill', function(d) {
    //         return
    // });

    //Call draw function
});
});

