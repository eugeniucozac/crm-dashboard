import React, { Component } from "react"
import * as d3 from "d3"

class BarChart extends Component {
  state = {
    data: [
      { name: "KP", value: 0.09056 },
      { name: "VH", value: 0.08167 },
      { name: "DG", value: 0.07507 },
      { name: "KV", value: 0.06966 },
      { name: "EC", value: 0.06749 },
      { name: "KM", value: 0.06327 },
      { name: "JC", value: 0.06094 },
      { name: "AT", value: 0.05987 },
    ],
  }

  componentDidMount() {
    const bars = d3.select(this.viz).attr("viewBox", [0, 0, 500, 500])

    const margin = {
      top: 20,
      right: 0,
      bottom: 30,
      left: 40,
    }

    const x = d3
      .scaleBand()
      .domain(d3.range(this.state.data.length))
      .range([margin.left, 500 - margin.right])
      .padding(0.1)

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(this.state.data, d => d.value)])
      .nice()
      .range([500 - margin.bottom, margin.top])

    const xAxis = g =>
      g.attr("transform", `translate(0,${500 - margin.bottom})`).call(
        d3
          .axisBottom(x)
          .tickFormat(i => this.state.data[i].name)
          .tickSizeOuter(0)
      )

    const yAxis = g =>
      g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y))
        .call(g => g.select(".domain").remove())

    bars
      .append("g")
      .attr("fill", "#ff4d3d")
      .selectAll("rect")
      .data(this.state.data)
      .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", d => y(d.value))
      .attr("height", d => y(0) - y(d.value))
      .attr("width", x.bandwidth())

    bars.append("g").call(xAxis)

    bars.append("g").call(yAxis)
  }

  render() {
    return (
      <div className="ms-panel">
        <div className="ms-panel-header">
          <h6>Sales on this month</h6>
        </div>
        <div className="ms-panel-body">
          <svg ref={viz => (this.viz = viz)}></svg>
        </div>
      </div>
    )
  }
}

export default BarChart
