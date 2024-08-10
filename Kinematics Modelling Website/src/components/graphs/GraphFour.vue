<script setup>
//Vue3 wrapper for plotly.js
import { VuePlotly } from '@clalarco/vue3-plotly'
//Vue modules which allow reactive referencing, and dynamic computing of variables
import { ref, computed } from 'vue'

import { analyticalTrajectoryCoords, calculateProjectileRange, deg } from './utils.js'

let angle = ref(65)
let g = ref(9.81)
let u = ref(10)
let h = ref(10)
let interval = ref(25)

let maxAngleInRads = 0
let maxProjectileRange = 0

const data = computed(() => {
  //Normal projectile path plotting
  let trajectoryCoords = analyticalTrajectoryCoords(
    u.value,
    g.value,
    h.value,
    angle.value,
    interval.value
  )

  //Max range trajectory plotting
  maxAngleInRads = Math.asin(1 / Math.sqrt(2 + (2 * g.value * h.value) / Math.pow(u.value, 2)))

  maxProjectileRange = calculateProjectileRange(
    u.value,
    g.value,
    h.value,
    deg(maxAngleInRads),
    interval.value
  )

  let maxTrajCoords = analyticalTrajectoryCoords(
    u.value,
    g.value,
    h.value,
    deg(maxAngleInRads),
    interval.value
  )

  return [
    {
      x: trajectoryCoords[0],
      y: trajectoryCoords[1],
      mode: 'lines',
      line: { color: 'dodgerblue' },
      name: 'Input'
    },
    {
      x: maxTrajCoords[0],
      y: maxTrajCoords[1],
      mode: 'lines',
      line: { color: 'lightgreen' },
      name: 'Max horizontal range'
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
      <em>Current optimum angle: ~{{ Math.round((maxAngleInRads / Math.PI) * 180) }}°</em>
      <br />
      <em>Current maximum horizontal range: ~{{ Math.round(maxProjectileRange) }}m</em>
    </p>
    <br />

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
          <input type="number" max="100" min="0" step="0.01" v-model.number="h" />
        </td>
        <td>
          <input type="range" max="100" min="0" step="0.01" v-model.number="h" />
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
