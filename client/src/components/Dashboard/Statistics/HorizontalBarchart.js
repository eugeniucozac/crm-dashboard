import React, { Component } from "react"
import * as d3 from "d3"

class HorizontalBarchart extends Component {
  state = {
    data: [
      { Country: "KP", Value: 12394 },
      { Country: "VH", Value: 6148 },
      { Country: "DG", Value: 1653 },
      { Country: "KV", Value: 2162 },
      { Country: "KM", Value: 1214 },
      { Country: "JC", Value: 1131 },
      { Country: "AT", Value: 814 },
    ],
    margin: {
      top: 20,
      right: 30,
      bottom: 40,
      left: 30,
    },
    width: 740,
    height: 780,
  }

  componentDidMount() {
    const horizontalbar = d3
      .select(this.viz)
      .attr("width", 730)
      .attr("height", 860)
      .append("g")
      .attr("transform", "translate(" + this.state.margin.left + "," + this.state.margin.top + ")")

    const x = d3.scaleLinear().domain([0, 13000]).range([0, this.state.width])

    const y = d3
      .scaleBand()
      .range([0, this.state.height])
      .domain(
        this.state.data.map(function (d) {
          return d.Country
        })
      )
      .padding(0.1)

    horizontalbar.append("g").call(d3.axisLeft(y)).style("font-size", "13px")

    horizontalbar
      .selectAll("myRect")
      .data(this.state.data)
      .enter()
      .append("rect")
      .attr("x", x(0))
      .attr("y", function (d) {
        return y(d.Country)
      })
      .attr("width", function (d) {
        return x(d.Value)
      })
      .attr("height", y.bandwidth())
      .attr("fill", "#08BF6F")

    horizontalbar
      .append("g")
      .attr("transform", "translate(0," + this.state.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .style("font-size", "13px")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end")
  }

  render() {
    return (
      <div className="ms-panel">
        <div className="ms-panel-header">
          <h6>Other Stuff</h6>
        </div>
        <div className="ms-panel-body">
          <svg ref={viz => (this.viz = viz)}></svg>
        </div>
      </div>
    )
  }
}

export default HorizontalBarchart
