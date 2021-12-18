import React, { Component } from 'react'

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";

  const data = [
    {
      name: "Block A",
      l1: 0,
      amt: 2400,
    },
    {
      name: "Block B",
      l1: 750,
      amt: 2210,
    },
    {
      name: "Block C",
      l1: 2000,
      amt: 2290,
    },
    {
      name: "Block D",
      l1: 2780,
      amt: 2000,
    },
    {
        name: "Block e",
        l1: 3100,
        amt: 2000,
      },
  ];

export default class FlyToBoon extends Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            cur:0,
            data:[
                {
                    name: "Block A",
                    l1: 0,
                    amt: 2400,
                  },
                  {
                    name: "Block B",
                    l1: 750,
                    amt: 2210,
                  },
            ]
        }
    }
    render() {
        
        return (
            <div style={{ width: "800px", 
                          height: "600px",
                          backgroundColor: "black" }}>
              <ResponsiveContainer width="100%" 
                                   height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={this.state.data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" 
                        dataKey="l1" 
                        stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
              <div className = "flex h2 w2 bg-red-100 cursor-pointer" onClick = {() => alert("click")}>Click to start</div>
            </div>
          );
    }
}
