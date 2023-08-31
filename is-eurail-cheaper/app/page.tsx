'use client'
import Image from 'next/image'
import {Wrapper} from '@googlemaps/react-wrapper';

import MapView from './mapview'

export default function Home() {
  return (
      <Wrapper apiKey="AIzaSyCfa86sCHMFXR6ZHO-GqpUvFpffWCUroOc">
        <MapView latitude={0} longitude={0} />
      </Wrapper>
  )
}
