import React, { Component } from 'react';
import { Viewer , ImageryLayer } from 'resium';
import {Cesium ,ArcGisMapServerImageryProvider, WebMapServiceImageryProvider , DefaultProxy } from "cesium";


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
       
    }
    render() { 
        return ( <Viewer full>
            <ImageryLayer
              imageryProvider={
                new WebMapServiceImageryProvider({
                  url: "//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
                  layers: "0"
                })
              }
            />
            
          </Viewer> );
    }
}
 
export default HomePage;