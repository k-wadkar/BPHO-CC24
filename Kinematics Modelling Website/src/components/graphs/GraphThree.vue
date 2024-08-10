<script setup>
//Vue3 wrapper for plotly.js
import { VuePlotly } from '@clalarco/vue3-plotly'
//Vue modules which allow reactive referencing, and dynamic computing of variables
import { ref, computed } from 'vue'

import { analyticalTrajectoryCoords, deg } from './utils.js'

let g = ref(9.81)
let u = ref(25)
let h = ref(10)
let targetX = ref(30)
let targetY = ref(20)
let interval = ref(50)

let minU = 0

const data = computed(() => {
  const a = (g.value / 2 / Math.pow(u.value, 2)) * Math.pow(targetX.value, 2)
  const b = -targetX.value
  const c =
    targetY.value - h.value + (g.value * Math.pow(targetX.value, 2)) / 2 / Math.pow(u.value, 2)

  //Finds the trajectory angle for the lowball and highball
  const lowAngleInDeg = deg(Math.atan((-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 / a))
  const highAngleInDeg = deg(Math.atan((-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 / a))

  //Contains coordinates for lowball arc
  const lowCoords = analyticalTrajectoryCoords(
    u.value,
    g.value,
    h.value,
    lowAngleInDeg,
    interval.value
  )

  //Contains coordinates for highball arc
  const highCoords = analyticalTrajectoryCoords(
    u.value,
    g.value,
    h.value,
    highAngleInDeg,
    interval.value
  )

  // This bit calculates the min-u arrays

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
      name: 'Minimum u'
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
