import React, { Component } from "react"
import * as d3 from "d3"

class Piechart extends Component {
  state = {
    markers: [
      { long: -2.242631, lat: 53.480759, name: "Manchester" },
      { long: -2.991573, lat: 53.408371, name: "Liverpool" },
      { long: -2.36197, lat: 51.38488, name: "Bath" },
      { long: -0.137163, lat: 50.822529, name: "Brighton" },
      { long: -0.127758, lat: 51.507351, name: "London" },
    ],
    width: 730,
    height: 733,
  }

  componentDidMount() {
    const { width, height, markers } = this.state
    fetch("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
      .then(response => response.json())
      .then(data => {
        const bubblemapone = d3.select(this.viz).attr("width", width).attr("height", height)

        const projection = d3
          .geoMercator()
          .center([0.5, 54.5])
          .scale(2420)
          .translate([width / 2, height / 2])

        data.features = data.features.filter(function (d) {
          return d.properties.name === "England"
        })

        bubblemapone
          .append("g")
          .selectAll("path")
          .data(data.features)
          .enter()
          .append("path")
          .attr("fill", "#FF4D3D")
          .attr("d", d3.geoPath().projection(projection))
          .style("stroke", "red")
          .style("opacity", 0.5)

        const Tooltip = d3
          .select(this.viz)
          .append("div")
          .attr("class", "tooltip")
          .style("opacity", 1)
          .style("background-color", "white")
          .style("border", "solid")
          .style("border-width", "2px")
          .style("border-radius", "5px")
          .style("padding", "5px")

        const mouseover = function (d) {
          Tooltip.style("opacity", 1)
        }

        const mousemove = function (d) {
          Tooltip.html(d.name + "<br>" + "long: " + d.long + "<br>" + "lat: " + d.lat)
            .style("left", d3.mouse(this)[0] + 10 + "px")
            .style("top", d3.mouse(this)[1] + "px")
        }

        const mouseleave = function (d) {
          Tooltip.style("opacity", 0)
        }

        bubblemapone
          .selectAll("myCircles")
          .data(markers)
          .enter()
          .append("circle")
          .attr("cx", function (d) {
            return projection([d.long, d.lat])[0]
          })
          .attr("cy", function (d) {
            return projection([d.long, d.lat])[1]
          })
          .attr("r", 15)
          .attr("class", "circle")
          .style("fill", "6529FF")
          .attr("stroke", "#6529FF")
          .attr("stroke-width", 3)
          .attr("fill-opacity", 0.4)
          .on("mouseover", mouseover)
          .on("mousemove", mousemove)
          .on("mouseleave", mouseleave)
      })
  }

  render() {
    return (
      <div className="ms-panel">
        <div className="ms-panel-header">
          <h6>Jobs where we completed</h6>
        </div>
        <div className="ms-panel-body">
          <svg ref={viz => (this.viz = viz)}></svg>
        </div>
      </div>
    )
  }
}

export default Piechart
