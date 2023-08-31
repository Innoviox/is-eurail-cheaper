'use client'
import Image from 'next/image'
import {Wrapper} from '@googlemaps/react-wrapper';

import MapView from './mapview'
import TripView from './tripview'

export default function Home() {
  return (
      <div id="container">
          <div id="map">
              <Wrapper apiKey="AIzaSyCfa86sCHMFXR6ZHO-GqpUvFpffWCUroOc">
                <MapView latitude={40} longitude={10} />
              </Wrapper>
          </div>
          <div id="trip">
              <TripView />
          </div>
      </div>
  )
}
