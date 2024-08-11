<script setup>
//Vue3 wrapper for plotly.js
import { VuePlotly } from '@clalarco/vue3-plotly'
//Vue modules which allow reactive referencing, and dynamic computing of variables
import { ref, computed } from 'vue'

import { fixedTimestepWithDragCoords, fixedTimestepTrajectoryCoords } from './utils'

let angle = ref(45)
let g = ref(9.81)
let u = ref(30)
let initialYDisp = ref(2)
let interval = ref(0.01)
let dragCoefficient = ref(0.1)
let CSA = ref(0.001)
let airDensity = ref(1)
let m = ref(0.01)

const data = computed(() => {
  let trajectoryCoords = fixedTimestepTrajectoryCoords(
    u.value,
    g.value,
    initialYDisp.value,
    0,
    angle.value,
    interval.value
  )

  let dragTrajectoryCoords = fixedTimestepWithDragCoords(
    u.value,
    g.value,
    initialYDisp.value,
    angle.value,
    interval.value,
    dragCoefficient.value,
    CSA.value,
    airDensity.value,
    m.value
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
      x: dragTrajectoryCoords[0],
      y: dragTrajectoryCoords[1],
      mode: 'lines',
      line: { color: 'darkorange' },
      name: 'Input with drag'
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
        <td><label>Drag Coefficient</label></td>
        <td>
          <input type="number" min="0" max="1.5" step="0.01" v-model.number="dragCoefficient" />
        </td>
        <td>
          <input type="range" min="0" max="1.5" step="0.01" v-model.number="dragCoefficient" />
        </td>
      </tr>

      <tr>
        <td><label>Cross-sectional area/m²</label></td>
        <td>
          <input type="number" min="0" max="1" step="0.0001" v-model.number="CSA" />
        </td>
        <td>
          <input type="range" min="0" max="1" step="0.0001" v-model.number="CSA" />
        </td>
      </tr>

      <tr>
        <td><label>Air density/kgm⁻³</label></td>
        <td>
          <input type="number" min="0" max="10" step="0.01" v-model.number="airDensity" />
        </td>
        <td>
          <input type="range" min="0" max="10" step="0.01" v-model.number="airDensity" />
        </td>
      </tr>

      <tr>
        <td><label>Mass/kg</label></td>
        <td>
          <input type="number" min="0" max="1" step="0.001" v-model.number="m" />
        </td>
        <td>
          <input type="range" min="0" max="1" step="0.001" v-model.number="m" />
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
