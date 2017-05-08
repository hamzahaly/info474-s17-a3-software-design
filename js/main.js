$(function() {
    //Variables to show
    var nestedData;

    d3.csv('data/country-data.csv', function(error, data) {
        //Necessary to prep data?

        //Nest data into heirarchical structure
        nestedData = d3.nest()
            .key(function(d) {
                return d.region;
            })
            .entries(data);
    });

    var sunburst = Sunburst().width(700).height(700);

    var draw = function() {

        var charts = d3.select('#viz').selectAll('.chart')
            .data(nestedData);
        
        //enter

        //exit
    };

    //Call draw function
});