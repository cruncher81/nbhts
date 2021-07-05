import Image from 'next/image';
import { useState } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';

function Map() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '600px',
    latitude: 42.949782,
    longitude: -76.554639,
    zoom: 16,
  });

  return (
    <ReactMapGl
      {...viewport}
      mapStyle='mapbox://styles/mapbox/streets-v9'
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      <Marker
        latitude={42.949782}
        longitude={-76.554639}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <Image src='/images/pin.svg' width={30} height={30} alt='locator pin' />
      </Marker>
    </ReactMapGl>
  );
}

export default Map;
