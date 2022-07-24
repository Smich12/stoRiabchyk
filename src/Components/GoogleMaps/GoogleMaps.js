

import {GoogleApiWrapper} from 'google-maps-react';

import React, { Component } from 'react'

export class GoogleMaps extends Component {
  render() {
    return (
        GoogleApiWrapper({
            apiKey: ("AIzaSyAsJgnmjggefpBMfI-zE2qeryy_npqqjEs")
          })(MapContainer)
    )
  }
}
