<script setup>
//Vue3 wrapper for plotly.js
import { VuePlotly } from '@clalarco/vue3-plotly'
//Vue modules which allow reactive referencing, and dynamic computing of variables
import { ref, computed } from 'vue'

import { analyticalTrajectoryCoordsExtra, calculateMaximaCoords } from './utils.js'

let angles = [30, 45, 60, 71, 78, 85]
let g = ref(10)
let u = ref(10)
let initialYDisp = 0
let interval = ref(100)
let underflow = ref(-5)

const data = computed(() => {
  let maximaCoordPairs = []

  // Set zero
  let setZeroCoords = analyticalTrajectoryCoordsExtra(
    u.value,
    g.value,
    initialYDisp,
    angles[0],
    interval.value,
    underflow.value
  )

  maximaCoordPairs.push(calculateMaximaCoords(u.value, g.value, initialYDisp, angles[0]))

  // Set one
  let setOneCoords = analyticalTrajectoryCoordsExtra(
    u.value,
    g.value,
    initialYDisp,
    angles[1],
    interval.value,
    underflow.value
  )

  maximaCoordPairs.push(calculateMaximaCoords(u.value, g.value, initialYDisp, angles[1]))

  // Set two
  let setTwoCoords = analyticalTrajectoryCoordsExtra(
    u.value,
    g.value,
    initialYDisp,
    angles[2],
    interval.value,
    underflow.value
  )

  maximaCoordPairs.push(calculateMaximaCoords(u.value, g.value, initialYDisp, angles[2]))

  // Set three
  let setThreeCoords = analyticalTrajectoryCoordsExtra(
    u.value,
    g.value,
    initialYDisp,
    angles[3],
    interval.value,
    underflow.value
  )

  maximaCoordPairs.push(calculateMaximaCoords(u.value, g.value, initialYDisp, angles[3]))

  // Set four
  let setFourCoords = analyticalTrajectoryCoordsExtra(
    u.value,
    g.value,
    initialYDisp,
    angles[4],
    interval.value,
    underflow.value
  )

  maximaCoordPairs.push(calculateMaximaCoords(u.value, g.value, initialYDisp, angles[4]))

  // Set five
  let setFiveCoords = analyticalTrajectoryCoordsExtra(
    u.value,
    g.value,
    initialYDisp,
    angles[5],
    interval.value,
    underflow.value
  )

  maximaCoordPairs.push(calculateMaximaCoords(u.value, g.value, initialYDisp, angles[5]))

  //Coord splitting
  let maximaXCoords = []
  let maximaYCoords = []

  for (let i = 0; i < maximaCoordPairs.length; i++) {
    if (maximaCoordPairs[i] != null) {
      maximaXCoords.push(maximaCoordPairs[i][0])
      maximaYCoords.push(maximaCoordPairs[i][1])
    }
  }

  return [
    {
      x: setZeroCoords[0],
      y: setZeroCoords[1],
      mode: 'lines',
      line: { color: 'red' },
      name: angles[0] + '°'
    },
    {
      x: setOneCoords[0],
      y: setOneCoords[1],
      mode: 'lines',
      line: { color: 'orange' },
      name: angles[1] + '°'
    },
    {
      x: setTwoCoords[0],
      y: setTwoCoords[1],
      mode: 'lines',
      line: { color: 'yellow' },
      name: angles[2] + '°'
    },
    {
      x: setThreeCoords[0],
      y: setThreeCoords[1],
      mode: 'lines',
      line: { color: 'green' },
      name: angles[3] + '°'
    },
    {
      x: setFourCoords[0],
      y: setFourCoords[1],
      mode: 'lines',
      line: { color: 'blue' },
      name: angles[4] + '°'
    },
    {
      x: setFiveCoords[0],
      y: setFiveCoords[1],
      mode: 'lines',
      line: { color: 'violet' },
      name: angles[5] + '°'
    },
    {
      x: maximaXCoords,
      y: maximaYCoords,
      type: 'scatter',
      mode: 'markers',
      marker: { color: 'goldenrod' },
      name: 'Maxima'
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
        <td><label>Number of intervals</label></td>
        <td>
          <input type="number" min="5" max="1000" step="1" v-model.number="interval" />
        </td>
        <td>
          <input type="range" min="5" max="1000" step="1" v-model.number="interval" />
        </td>
      </tr>

      <tr>
        <td><label>Underflow/m</label></td>
        <td>
          <input type="number" max="0" min="-50" step="1" v-model.number="underflow" />
        </td>
        <td>
          <input type="range" max="0" min="-50" step="1" v-model.number="underflow" />
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
