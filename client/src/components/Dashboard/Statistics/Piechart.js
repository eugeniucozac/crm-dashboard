import React, { Component } from "react"
import * as d3 from "d3"

class Piechart extends Component {
  state = {
    data: [
      { name: "Vanessa Halipi", value: 20501982 },
      { name: "Dan Green", value: 20679786 },
      { name: "Kris Mrozek", value: 22604232 },
      { name: "John Cane", value: 22604232 },
      { name: "Aidan Tolkien", value: 22604232 },
    ],
    columns: ["name", "value"],
    width: 500,
    height: 500,
  }

  componentDidMount() {
    const pie = d3
      .pie()
      .sort(null)
      .value(d => d.value)

    const arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(Math.min(this.state.width, this.state.height) / 2 - 1)

    const arcLabel = d3
      .arc()
      .innerRadius((Math.min(this.state.width, this.state.height) / 2) * 0.8)
      .outerRadius((Math.min(this.state.width, this.state.height) / 2) * 0.8)

    const arcs = pie(this.state.data)

    const piechart = d3
      .select(this.viz)
      .attr("viewBox", [-this.state.width / 2, -this.state.height / 2, this.state.width, this.state.height])

    const color = d3
      .scaleOrdinal()
      .domain(this.state.data.map(d => d.name))
      .range([d3.rgb("#357FFA"), d3.rgb("#08BF6F"), d3.rgb("#6529FF"), d3.rgb(" #F7B11B"), d3.rgb("#FF4D3D")])
    //.range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), this.state.data.length).reverse())

    piechart
      .append("g")
      .attr("stroke", "white")
      .selectAll("path")
      .data(arcs)
      .join("path")
      .attr("fill", d => color(d.data.name))
      .attr("d", arc)
      .append("title")
      .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`)

    piechart
      .append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 12)
      .attr("text-anchor", "middle")
      .selectAll("text")
      .data(arcs)
      .join("text")
      .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
      .call(text =>
        text
          .append("tspan")
          .attr("y", "-0.4em")
          .attr("font-weight", "bold")
          .text(d => d.data.name)
      )
      .call(text =>
        text
          .filter(d => d.endAngle - d.startAngle > 0.25)
          .append("tspan")
          .attr("x", 0)
          .attr("y", "0.7em")
          .attr("fill-opacity", 0.7)
          .text(d => d.data.value.toLocaleString())
      )
  }

  render() {
    return (
      <div className="ms-panel">
        <div className="ms-panel-header">
          <h6>Claibration for this month</h6>
        </div>
        <div className="ms-panel-body">
          <svg ref={viz => (this.viz = viz)}></svg>
        </div>
      </div>
    )
  }
}

export default Piechart
