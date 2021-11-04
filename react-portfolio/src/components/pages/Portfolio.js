import React from 'react';
import '../../styles/Portfolio.css'

export default function Portfolio() {
  return (
    <div class="container">
      <div class="row">
        <div class="text-center col-md-6 col-sm-12 project">
          <a href="https://github.com/MichaelHermes/City-Scan"><img src="https://via.placeholder.com/350x250" alt=''/></a>
        </div>
        <div class="text-center col-md-6 col-sm-12 project">
          <a href="https://github.com/ZakkFast/EchoChamber"><img src="https://via.placeholder.com/350x250" alt=''/></a>
        </div>
      </div>
      <div class="row">
        <div class="text-center col-md-6 col-sm-12 project">
          <a href="https://github.com/evanarbour/fitness-tracker"><img src="https://via.placeholder.com/350x250" alt=''/></a>
        </div>
        <div class="text-center col-md-6 col-sm-12 project">
          <a href="https://github.com/evanarbour/weather-forecast"><img src="https://via.placeholder.com/350x250" alt=''/></a>
        </div>
      </div>
      <div class="row">
        <div class="text-center col-md-6 col-sm-12 project">
          <a href="https://github.com/evanarbour/note-taker"><img src="https://via.placeholder.com/350x250" alt=''/></a>
        </div>
        <div class="text-center col-md-6 col-sm-12 project">
          <a href="https://github.com/evanarbour/password-generator"><img src="https://via.placeholder.com/350x250" alt=''/></a>
        </div>
      </div>
    </div>
  );
}