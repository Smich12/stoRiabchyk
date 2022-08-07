import React, { Component } from "react";
import "./About_us.scss";

export class Tariff_comp extends Component {
  render() {
    return (

      <div className="tariff">
        
            <div>
                <h3>{this.props.service}</h3>
                
            </div>

            <div>
                <h3>{this.props.cost}</h3>
            </div>
        
        
      </div>

      



    );
  }
}
