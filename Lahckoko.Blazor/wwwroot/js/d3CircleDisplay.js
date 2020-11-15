window.d3DrawFunctionsJS = {

    svg: {},
    width: {},
    height: {},

    setSvg: function (svgId) {
        svg = d3.select(svgId);
        width = parseInt(svg.attr("width"));
        height = parseInt(svg.attr("height"));

        svg = svg.append("g");
    },

    drawPolygon: function (pointsArray) {

        var xScale = d3.scaleLinear().domain([-1,1]).range([0,width]);
        var yScale = d3.scaleLinear().domain([-1,1]).range([height,0]);

        svg.selectAll("polygon")
            .data([pointsArray])
            .enter()
            .append("polygon")
            .attr("points", function (d) {
                return d.map(function (p) {
                    return [xScale(p.x), yScale(p.y)].join(",");
                }
                ).join(" ");
            })
    },

    d3Draw: function (poly) {
        var margin = { top: 20, right: 20, bottom: 30, left: 50 };
        var width = 600 - margin.left - margin.right;
        var height = 500 - margin.top - margin.bottom;

        var svg = d3.select("body").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        var x = d3.scaleLinear().range([0, 500]);
        var y = d3.scaleLinear().range([500, 0]);

        x.domain([0, 1]);
        y.domain([-1, 1]);

        svg.selectAll("polygon")
            .data([poly])
            .enter()
            .append("polygon")
            .attr("points", function (d) {
                return d.map(function (p) {
                    return [Math.cos(p.x * Math.PI * 2) * y(p.y), Math.sin(p.x * Math.PI * 2) * y(p.y)].join(",");
                }
                ).join(" ");
            })
    }
};

    //d3DrawLinear: function (poly) {
    //    var margin = { top: 20, right: 20, bottom: 30, left: 50 };
    //    var width = 600 - margin.left - margin.right;
    //    var height = 500 - margin.top - margin.bottom;

    //    var svg = d3.select("body").append("svg")
    //        .attr("width", width + margin.left + margin.right)
    //        .attr("height", height + margin.top + margin.bottom)
    //        .append("g")
    //        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //    var x = d3.scaleLinear().range([0, 500]);
    //    var y = d3.scaleLinear().range([500, 0]);

    //    x.domain([-1, 1]);
    //    y.domain([-1, 1]);

    //    //var point = { "x": 24, "y": 31 }

    //    //var poly = [{ "x": 10, "y": 50 },
    //    //{ "x": 20, "y": 20 },
    //    //{ "x": 50, "y": 10 },
    //    //{ "x": 30, "y": 30 }];


    //    svg.selectAll("polygon")
    //        .data([poly])
    //        .enter()
    //        .append("polygon")
    //        .attr("points", function (d) {
    //            return d.map(function (p) { return [x(p.x), y(p.y)].join(","); }
    //            ).join(" ");
    //        });

    //    //svg.append("circle")
    //    //    .attr("r", 4)
    //    //    .attr("cx", x(point.x))
    //    //    .attr("cy", y(point.y))

    //    //// add the X Axis
    //    //svg.append("g")
    //    //    .attr("transform", "translate(0," + height + ")")
    //    //    .call(d3.axisBottom(x));

    //    //// add the Y Axis
    //    //svg.append("g")
    //    //    .call(d3.axisLeft(y));
    //}
