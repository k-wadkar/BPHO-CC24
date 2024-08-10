<script setup>
//Vue3 wrapper for plotly.js
import { VuePlotly } from '@clalarco/vue3-plotly'
//Vue modules which allow reactive referencing, and dynamic computing of variables
import { ref, computed } from 'vue'

import {
  analyticalTrajectoryCoords,
  calculateHorizontalProjectileRange,
  deg,
  calculateBoundingCoords
} from './utils.js'

//let angle = ref(65)
let g = ref(9.81)
let u = ref(30)
let h = ref(20)
let targetX = ref(10)
let targetY = ref(40)
let interval = ref(50)

let maxAngleInRads = 0
let maxHorizontalProjectileRange = 0
let minU = 0

const data = computed(() => {
  //Values used for calculating highball and lowball characteristics
  const a = (g.value / 2 / Math.pow(u.value, 2)) * Math.pow(targetX.value, 2)
  const b = -targetX.value
  const c =
    targetY.value - h.value + (g.value * Math.pow(targetX.value, 2)) / 2 / Math.pow(u.value, 2)

  //Lowball
  const lowAngleInDeg = deg(Math.atan((-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 / a))

  const lowCoords = analyticalTrajectoryCoords(
    u.value,
    g.value,
    h.value,
    lowAngleInDeg,
    interval.value
  )

  //Highball
  const highAngleInDeg = deg(Math.atan((-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 / a))

  const highCoords = analyticalTrajectoryCoords(
    u.value,
    g.value,
    h.value,
    highAngleInDeg,
    interval.value
  )

  // Minimum u
  minU =
    Math.sqrt(g.value) *
    Math.sqrt(
      targetY.value -
        h.value +
        Math.sqrt(Math.pow(targetX.value, 2) + Math.pow(targetY.value - h.value, 2))
    )

  const minUAngleInRads = Math.atan(
    (targetY.value -
      h.value +
      Math.sqrt(Math.pow(targetX.value, 2) + Math.pow(targetY.value - h.value, 2))) /
      targetX.value
  )

  const minUCoords = analyticalTrajectoryCoords(
    minU,
    g.value,
    h.value,
    deg(minUAngleInRads),
    interval.value
  )

  //Max Range
  maxAngleInRads = Math.asin(1 / Math.sqrt(2 + (2 * g.value * h.value) / Math.pow(u.value, 2)))

  maxHorizontalProjectileRange = calculateHorizontalProjectileRange(
    u.value,
    g.value,
    h.value,
    deg(maxAngleInRads),
    interval.value
  )

  console.log(maxHorizontalProjectileRange)

  let maxTrajCoords = analyticalTrajectoryCoords(
    u.value,
    g.value,
    h.value,
    deg(maxAngleInRads),
    interval.value
  )

  //Bounding
  let boundingCoords = calculateBoundingCoords(u.value, g.value, h.value, interval.value)

  return [
    {
      x: lowCoords[0],
      y: lowCoords[1],
      mode: 'lines',
      line: { color: 'darkorange' },
      name: 'Lowball'
    },
    {
      x: highCoords[0],
      y: highCoords[1],
      mode: 'lines',
      line: { color: 'slateblue' },
      name: 'Highball'
    },
    {
      x: minUCoords[0],
      y: minUCoords[1],
      mode: 'lines',
      line: { color: 'grey' },
      name: 'Min u'
    },
    {
      x: maxTrajCoords[0],
      y: maxTrajCoords[1],
      mode: 'lines',
      line: { color: 'lightgreen' },
      name: 'Max horizontal range'
    },
    {
      x: boundingCoords[0],
      y: boundingCoords[1],
      mode: 'lines',
      line: { color: 'violet', dash: 'dot' },
      name: 'Bounding curve'
    },
    {
      x: [targetX.value],
      y: [targetY.value],
      type: 'scatter',
      mode: 'markers',
      marker: { color: 'red' },
      name: 'Target'
    }
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

    <p style="text-align: center">
      <em>Current minimum u value: ~{{ Math.ceil(minU) }}ms⁻¹</em>
      <br />
      <em>Current optimum angle: ~{{ Math.round((maxAngleInRads / Math.PI) * 180) }}°</em>
      <br />
      <em>Current maximum horizontal range: ~{{ Math.round(maxHorizontalProjectileRange) }}m</em>
    </p>
    <br />

    <table id="graphConfig">
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
          <input type="number" max="100" min="0" step="0.01" v-model.number="h" />
        </td>
        <td>
          <input type="range" max="100" min="0" step="0.01" v-model.number="h" />
        </td>
      </tr>

      <tr>
        <td><label>Target X/m</label></td>
        <td>
          <input type="number" max="1000" min="0" step="0.1" v-model.number="targetX" />
        </td>
        <td>
          <input type="range" max="1000" min="0" step="0.1" v-model.number="targetX" />
        </td>
      </tr>

      <tr>
        <td><label>Target Y/m</label></td>
        <td>
          <input type="number" max="1000" min="0" step="0.1" v-model.number="targetY" />
        </td>
        <td>
          <input type="range" max="1000" min="0" step="0.1" v-model.number="targetY" />
        </td>
      </tr>

      <tr>
        <td><label>Number of intervals</label></td>
        <td>
          <input type="number" min="5" max="1000" step="1" v-model.number="interval" />
        </td>
        <td>
          <input type="range" min="5" max="1000" step="1" v-model.number="interval" />
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
