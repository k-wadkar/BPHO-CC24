<script setup>
//Vue3 wrapper for plotly.js
import { VuePlotly } from '@clalarco/vue3-plotly'
//Vue modules which allow reactive referencing, and dynamic computing of variables
import { ref, computed } from 'vue'

import { fixedTimestepTrajectoryCoords, deg, square, sqrt } from './utils'

let angle = ref(45)
let g = ref(9.81)
let u = ref(10)
let initialYDisp = ref(0)
let interval = ref(0.01)
let cOfRestitution = ref(0.7)
let numBounces = ref(10)

const data = computed(() => {
  let trajectoryCoords = fixedTimestepTrajectoryCoords(
    u.value,
    g.value,
    initialYDisp.value,
    0,
    angle.value,
    interval.value
  )

  let newVertU = cOfRestitution.value * -trajectoryCoords[3] //Not the issue
  let newXintercept = trajectoryCoords[0][trajectoryCoords[0].length - 1]
  let newAngleInDeg = deg(Math.atan(newVertU / trajectoryCoords[2])) //Not the issue
  let newU = sqrt(square(newVertU) + square(trajectoryCoords[2]))

  for (let i = 0; i < numBounces.value; i++) {
    let additionalCoord = fixedTimestepTrajectoryCoords(
      newU, //this is the issue
      g.value,
      0,
      newXintercept,
      newAngleInDeg,
      interval.value
    )

    trajectoryCoords[0] = trajectoryCoords[0].concat(additionalCoord[0])
    trajectoryCoords[1] = trajectoryCoords[1].concat(additionalCoord[1])
    trajectoryCoords[2] = additionalCoord[2]
    trajectoryCoords[3] = additionalCoord[3]

    newVertU = cOfRestitution.value * -trajectoryCoords[3]
    newXintercept = trajectoryCoords[0][trajectoryCoords[0].length - 1]
    newAngleInDeg = deg(Math.atan(newVertU / trajectoryCoords[2]))
    newU = sqrt(square(newVertU) + square(trajectoryCoords[2]))
  }

  return [
    { x: trajectoryCoords[0], y: trajectoryCoords[1], mode: 'lines', line: { color: 'dodgerblue' } }
  ]
})

const layout = {
  paper_bgcolor: 'rgba(0, 0, 0, 0)',
  plot_bgcolor: 'rgba(0, 0, 0, 0)',
  xaxis: { title: 'Horizontal displacement/m', showgrid: false },
  yaxis: { title: 'Vertical displacement/m', showgrid: false }
}

//Other configuration settings for the chart
const config = {
  //displayModeBar: false,
  scrollZoom: true,
  responsive: true
}
</script>

<template>
  <main style="padding: 0px">
    <VuePlotly :data="data" :layout="layout" :config="config"></VuePlotly>

    <table id="graphConfig">
      <tr>
        <td><label>Angle/°</label></td>
        <td>
          <input type="number" max="85" min="1" step="0.1" v-model.number="angle" />
        </td>
        <td><input type="range" max="85" min="1" step="0.1" v-model.number="angle" /></td>
      </tr>

      <tr>
        <td><label>Gravity/ms⁻²</label></td>
        <td>
          <input type="number" max="100" min="0.01" step="0.01" v-model.number="g" />
        </td>
        <td>
          <input type="range" max="100" min="0.01" step="0.01" v-model.number="g" />
        </td>
      </tr>

      <tr>
        <td><label>Initial speed/ms⁻¹</label></td>
        <td>
          <input type="number" max="100" min="0.25" step="0.01" v-model.number="u" />
        </td>
        <td>
          <input type="range" max="100" min="0.25" step="0.01" v-model.number="u" />
        </td>
      </tr>

      <tr>
        <td><label>Initial height/m</label></td>
        <td>
          <input type="number" max="100" min="0" step="0.01" v-model.number="initialYDisp" />
        </td>
        <td>
          <input type="range" max="100" min="0" step="0.01" v-model.number="initialYDisp" />
        </td>
      </tr>

      <tr>
        <td><label>Time interval/s</label></td>
        <td>
          <input type="number" min="0.001" max="0.1" step="0.001" v-model.number="interval" />
        </td>
        <td>
          <input type="range" min="0.001" max="0.1" step="0.001" v-model.number="interval" />
        </td>
      </tr>

      <tr>
        <td><label>Coefficient of Restitution</label></td>
        <td>
          <input type="number" min="0.001" max="1" step="0.001" v-model.number="cOfRestitution" />
        </td>
        <td>
          <input type="range" min="0.001" max="1" step="0.001" v-model.number="cOfRestitution" />
        </td>
      </tr>

      <tr>
        <td><label>Number of bounces</label></td>
        <td>
          <input type="number" min="0" max="25" step="1" v-model.number="numBounces" />
        </td>
        <td>
          <input type="range" min="0" max="25" step="1" v-model.number="numBounces" />
        </td>
      </tr>
    </table>
  </main>
</template>

<style scoped>
#graphConfig {
  border-spacing: 10px;
  margin: auto;
}
input[type='number'] {
  width: 5rem;
}
input[type='range'] {
  width: 20rem;
}
</style>
