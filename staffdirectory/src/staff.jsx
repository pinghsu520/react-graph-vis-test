import React from 'react';
import Graph from "./Graph.js";


class Staff extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      avatarColor: "",
    }
  }
    render(){
      const graph = {
          nodes: [
            { id: 1, label: "Hagan Franks", color: "#e0df41" },
            { id: 2, label: "Maliaca Oxnam", color: "#41e0c9" },

            { id: 3, label: "Jim Davis", color: "#e04141"},
            { id: 4, label: "Nick Eddy", color: "#e09c41" },
            { id: 5, label: "Chris Klimowski", color: "#7be041" },
            { id: 6, label: "Todd Wickizer", color: "#41e0c9" },


          ],
          edges: [{ from: 1, to: 2 },  { from: 4, to: 1 }, { from: 5, to: 1 }, { from: 6, to: 1}, { from: 3, to:2 },]
        };

        const options = {
          layout: {
            hierarchical: true,
          },
          edges: {
            color: "#000000"
          }
        };

        const events = {
          select: function(event) {
            var { nodes, edges } = event;
            console.log("Selected nodes:");
            console.log(nodes);
            console.log("Selected edges:");
            console.log(edges);
          }
      };
      return(
        <div>
        <h1>Technical Staff U of Arizona Data Science Institude</h1>

        <p>The Data Science Institute (formerly Data7) aims to foster the next generation of data-driven research by encouraging university-wide interdisciplinary collaboration, gaining external visibility, developing industry alliances, and increasing funding for UA research. By connecting UA researchers and aligning institutional expertise, computational resources, and infrastructure, the Data Science Institute enables investigators to ask more complex questions and achieve outcomes not easily attainable as individual investigators or within purely disciplinary teams. </p>
        <p>
          Make sure to visit the <a href="https://datascience.arizona.edu/"> Data Science site</a> for more info.
        </p>

        <Graph graph={graph} options={options} events={events} style={{ height: "640px" }} />
         </div>
      )

    }
  }
  export default Staff;
