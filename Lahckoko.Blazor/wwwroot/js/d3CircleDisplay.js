﻿function d3Draw(poly) {

    var margin = { top: 20, right: 20, bottom: 30, left: 50 },
        width = 600 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");


    var x = d3.scaleLinear().range([0, 500]);
    var y = d3.scaleLinear().range([500, 0]);

    x.domain([-1500, 1500]);
    y.domain([-1500, 1500]);

    //var point = { "x": 24, "y": 31 }

    //var poly = [{ "x": 10, "y": 50 },
    //{ "x": 20, "y": 20 },
    //{ "x": 50, "y": 10 },
    //{ "x": 30, "y": 30 }];


    svg.selectAll("polygon")
        .data([poly])
        .enter().append("polygon")
        .attr("points", function (d) {
            return d.map(function (d) {
                return [x(d.x), y(d.y)].join(",");
            }).join(" ");
        });

    //svg.append("circle")
    //    .attr("r", 4)
    //    .attr("cx", x(point.x))
    //    .attr("cy", y(point.y))

    //// add the X Axis
    //svg.append("g")
    //    .attr("transform", "translate(0," + height + ")")
    //    .call(d3.axisBottom(x));

    //// add the Y Axis
    //svg.append("g")
    //    .call(d3.axisLeft(y));
}