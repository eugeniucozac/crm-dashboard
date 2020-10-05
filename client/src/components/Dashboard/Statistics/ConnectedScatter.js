import React, { Component } from "react"
import * as d3 from "d3"

class ConnectedScatter extends Component {
  state = {
    data: [
      {
        time: 1,
        "A. Tolkien": 2,
        "D. Green": 5,
        "K. Mrozek": 13,
      },
      {
        time: 2,
        "A. Tolkien": 3,
        "D. Green": 4,
        "K. Mrozek": 14,
      },
      {
        time: 3,
        "A. Tolkien": 1,
        "D. Green": 4,
        "K. Mrozek": 16,
      },
      {
        time: 4,
        "A. Tolkien": 7,
        "D. Green": 4,
        "K. Mrozek": 12,
      },
      {
        time: 5,
        "A. Tolkien": 8,
        "D. Green": 8,
        "K. Mrozek": 7,
      },
      {
        time: 6,
        "A. Tolkien": 8,
        "D. Green": 13,
        "K. Mrozek": 9,
      },
      {
        time: 7,
        "A. Tolkien": 5,
        "D. Green": 15,
        "K. Mrozek": 3,
      },
      {
        time: 8,
        "A. Tolkien": 4,
        "D. Green": 17,
        "K. Mrozek": 2,
      },
      {
        time: 9,
        "A. Tolkien": 9,
        "D. Green": 18,
        "K. Mrozek": 1,
      },
      {
        time: 10,
        "A. Tolkien": 11,
        "D. Green": 13,
        "K. Mrozek": 1,
      },
    ],
    margin: {
      top: 20,
      right: 30,
      bottom: 40,
      left: 90,
    },
    width: 615,
    height: 673,
  }

  componentDidMount() {
    const { width, height, margin, data } = this.state

    const connectedscatter = d3
      .select(this.viz)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + 20 + "," + margin.top + ")")

    const allGroup = ["A. Tolkien", "D. Green", "K. Mrozek"]

    const dataReady = allGroup.map(function (grpName) {
      return {
        name: grpName,
        values: data.map(function (d) {
          return { time: d.time, value: +d[grpName] }
        }),
      }
    })

    const myColor = d3
      .scaleOrdinal()
      .domain(allGroup)
      .range([d3.rgb("#F7B11B"), d3.rgb("#431BA9"), d3.rgb("#00B365")]) //d3.schemeDark2

    const x = d3.scaleLinear().domain([0, 10]).range([0, width])

    connectedscatter
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))

    const y = d3.scaleLinear().domain([0, 20]).range([height, 0])

    connectedscatter.append("g").call(d3.axisLeft(y))

    const line = d3
      .line()
      .x(function (d) {
        return x(+d.time)
      })
      .y(function (d) {
        return y(+d.value)
      })

    connectedscatter
      .selectAll("myLines")
      .data(dataReady)
      .enter()
      .append("path")
      .attr("class", function (d) {
        return d.name
      })
      .attr("d", function (d) {
        return line(d.values)
      })
      .attr("stroke", function (d) {
        return myColor(d.name)
      })
      .style("stroke-width", 4)
      .style("fill", "none")

    connectedscatter
      .selectAll("myDots")
      .data(dataReady)
      .enter()
      .append("g")
      .style("fill", function (d) {
        return myColor(d.name)
      })
      .attr("class", function (d) {
        return d.name
      })
      .selectAll("myPoints")
      .data(function (d) {
        return d.values
      })
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return x(d.time)
      })
      .attr("cy", function (d) {
        return y(d.value)
      })
      .attr("r", 5)
      .attr("stroke", "white")

    connectedscatter
      .selectAll("myLabels")
      .data(dataReady)
      .enter()
      .append("g")
      .append("text")
      .attr("class", function (d) {
        return d.name
      })
      .datum(function (d) {
        return { name: d.name, value: d.values[d.values.length - 1] }
      })
      .attr("transform", function (d) {
        return "translate(" + x(d.value.time) + "," + y(d.value.value) + ")"
      })
      .attr("x", 12)
      .text(function (d) {
        return d.name
      })
      .style("fill", function (d) {
        return myColor(d.name)
      })
      .style("font-size", 15)

    connectedscatter
      .selectAll("myLegend")
      .data(dataReady)
      .enter()
      .append("g")
      .append("text")
      .attr("x", function (d, i) {
        return 30 + i * 60
      })
      .attr("y", 10)
      .text(function (d) {
        return d.name
      })
      .style("fill", function (d) {
        return myColor(d.name)
      })
      .style("font-size", 13)
      .on("click", function (d) {
        const currentOpacity = d3.selectAll("." + d.name).style("opacity")
        d3.selectAll("." + d.name)
          .transition()
          .style("opacity", currentOpacity === 1 ? 0 : 1)
      })
  }

  render() {
    return (
      <div className="ms-panel">
        <div className="ms-panel-header">
          <h6>Tasks for this month</h6>
        </div>
        <div className="ms-panel-body">
          <svg ref={viz => (this.viz = viz)}></svg>
        </div>
      </div>
    )
  }
}

export default ConnectedScatter
