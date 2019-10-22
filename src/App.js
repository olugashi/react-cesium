import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Viewer , ImageryLayer } from 'resium';
import { WebMapServiceImageryProvider } from "cesium";



function App() {
  return (
    <Viewer full>
    <ImageryLayer
      imageryProvider={
        new WebMapServiceImageryProvider({
          url: "//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
          layers: '1',
         
        })
      }
    />
    
  </Viewer>
  );
}

export default hot(App);