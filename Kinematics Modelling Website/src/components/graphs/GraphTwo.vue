<script setup>
//Vue3 wrapper for plotly.js
import { VuePlotly } from '@clalarco/vue3-plotly'
//Vue modules which allow reactive referencing, and dynamic computing of variables
import { ref, computed } from 'vue'

let angle = ref(45)
let g = ref(9.81)
let u = ref(10)
let initialYDisp = ref(0)
let interval = ref(25)

const data = computed(() => {
  //Normal projectile path plotting
  const xDisp = []
  const yDisp = []

  const angleInRads = (angle.value / 180) * Math.PI

  const projectileRange =
    (Math.pow(u.value, 2) / g.value) *
    (Math.sin(angleInRads) * Math.cos(angleInRads) +
      Math.cos(angleInRads) *
        Math.sqrt(
          Math.pow(Math.sin(angleInRads), 2) +
            (2 * g.value * initialYDisp.value) / Math.pow(u.value, 2)
        ))

  let intervalGap = projectileRange / interval.value

  for (let i = 0; i < projectileRange; i += intervalGap) {
    xDisp.push(i)
    yDisp.push(
      initialYDisp.value +
        i * Math.tan(angleInRads) -
        (g.value / (2 * Math.pow(u.value, 2))) *
          (1 + Math.pow(Math.tan(angleInRads), 2)) *
          Math.pow(i, 2)
    )
  }

  xDisp.push(projectileRange)
  yDisp.push(0)

  //Apogee plotting
  let apogeeX = (Math.pow(u.value, 2) / g.value) * Math.sin(angleInRads) * Math.cos(angleInRads)
  let apogeeY =
    initialYDisp.value + (Math.pow(u.value, 2) / 2 / g.value) * Math.pow(Math.sin(angleInRads), 2)

  return [
    { x: xDisp, y: yDisp, mode: 'lines', name: 'Trajectory' },
    {
      x: [apogeeX],
      y: [apogeeY],
      type: 'scatter',
      mode: 'markers',
      marker: { color: 'red' },
      name: 'Apogee'
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
  displayModeBar: false,
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
