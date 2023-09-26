'use client'
import Image from 'next/image'
import {Wrapper} from '@googlemaps/react-wrapper';

import MapView from './mapview'
import TripView from './tripview'

export default function Home() {
  return (
      <main>
          <nav className="navbar" role="navigation" aria-label="main navigation">
              <div className="navbar-menu">
                  <div className="navbar-start">
                      <a className="navbar-item">
                          Home
                      </a>
                  </div>

                  <div className="navbar-end">
                      <a className="navbar-item">
                          Home
                      </a>
                  </div>
              </div>
          </nav>
          <div id="container">
              <div id="map">
                  {/*<Wrapper apiKey="AIzaSyCfa86sCHMFXR6ZHO-GqpUvFpffWCUroOc">*/}
                  <Wrapper apiKey="dead">
                      <MapView latitude={50} longitude={10}/>
                  </Wrapper>
              </div>
              <div id="trip">
                  <TripView/>
              </div>
          </div>
      </main>
  )
}
