import * as React from 'react'
import { useState } from 'react'
import MapGL from 'react-map-gl'

const MAPBOX_TOKEN = 'pk.eyJ1IjoidGFob3JhIiwiYSI6ImNrbGhlZHBndDAwOHUydXBmOTVwdXFxeWIifQ.jmX3r9Cg1Krhlz_410h_nA'

export default function NapierHastings () {
  const [viewport, setViewport] = useState({
    latitude: -39.5616611,
    longitude: 176.7964203,
    zoom: 9
  })

  return (
    <div>
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/tahora/cklhrepgh0uis17kv7uvicc11"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
    </div>
  )
}
