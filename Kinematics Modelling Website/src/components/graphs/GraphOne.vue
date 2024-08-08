<!-- <script setup>
//Vue3 wrapper for plotly.js
import { VuePlotly } from '@clalarco/vue3-plotly'
//Vue modules which allow reactive referencing, and dynamic computing of variables
import { ref, computed } from 'vue'

//Initialisation/delcaration of function storing variables
let funct = ref('Math.sin(x)')
let tempfunct

let interval = ref(0.01)

//Used to cycle user-entered function into graph
function pushFunction() {
  funct.value = tempfunct
}

// Generate values dynamically (i.e. when function changes, values auto-update)
const data = computed(() => {
  //Empty arrays to contain vertical and horizontal displacements
  const xDisp = []
  const yDisp = []
  //Data points generated according to user-entered function with interval according to user input
  for (let x = 0; x <= 10; x += interval.value) {
    xDisp.push(x)
    yDisp.push(eval(funct.value))
  }
  return [{ x: xDisp, y: yDisp, mode: 'lines' }]
})

// Display using layout characteristics (computed to dynamically change title depending on user-entered function)
const layout = computed(() => ({
  title: 'y = ' + funct.value
  //paper_bgcolor: 'black',
  //plot_bgcolor: 'black',
  //xaxis: { color: 'white' }
}))

//Other configuration settings for the chart
const config = {
  displayModeBar: false
}
</script>

<template>
  <main style="padding: 0px">
    <VuePlotly :data="data" :layout="layout" :config="config"></VuePlotly>
    <div style="margin: 0px">
      <input type="text" v-model="tempfunct" placeholder="Input function" />
      <button @click="pushFunction()">Push function</button>
    </div>
    <div>
      <input
      type="number"
      max="10000"
      min="0"

      />
      <input
        type="range"
        min="0.01"
        max="1"
        step="0.01"
        v-model.number="interval"
        placeholder="Input interval"
      />
    </div>
  </main>
</template> -->

<script setup>
//Vue3 wrapper for plotly.js
import { VuePlotly } from '@clalarco/vue3-plotly'
//Vue modules which allow reactive referencing, and dynamic computing of variables
import { ref, computed } from 'vue'

let angle = ref(45)
let g = ref(9.81)
let u = ref(10)
let initialYDisp = ref(0)
let interval = ref(0.01)

const data = computed(() => {
  //Empty arrays to contain vertical and horizontal displacements
  const xDisp = []
  const yDisp = []

  let Horizontalu = u.value * Math.cos((angle.value / 180) * Math.PI)
  let Verticalu = u.value * Math.sin((angle.value / 180) * Math.PI)

  xDisp.push(0)
  yDisp.push(initialYDisp.value)

  //Data points generated according to user-entered function with interval according to user input

  while (yDisp[yDisp.length - 1] >= 0) {
    Verticalu += -1 * g.value * interval.value
    let newXDisp = xDisp[xDisp.length - 1] + Horizontalu * interval.value
    let newYDisp = yDisp[yDisp.length - 1] + Verticalu * interval.value

    xDisp.push(newXDisp)
    yDisp.push(newYDisp)
  }

  if (yDisp[yDisp.length - 1] < 0) {
    xDisp.pop()
    yDisp.pop()
  }

  return [{ x: xDisp, y: yDisp, mode: 'lines' }]
})

const layout = {
  title: 'Erm, what the sigma'
  //paper_bgcolor: 'black',
  //plot_bgcolor: 'black',
  //xaxis: { color: 'white' }
}

//Other configuration settings for the chart
const config = {
  displayModeBar: false
}
</script>

<template>
  <main style="padding: 0px">
    <VuePlotly :data="data" :layout="layout" :config="config"></VuePlotly>

    <table id="graphConfig">
      <tr>
        <td><label>Angle/°</label></td>
        <td>
          <input type="number" max="85" min="5" step="0.1" v-model.number="angle" />
        </td>
        <td><input type="range" max="85" min="5" step="0.1" v-model.number="angle" /></td>
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
    </table>
  </main>
</template>

<style scoped>
#graphConfig {
  border-spacing: 10px;
}
input[type='number'] {
  width: 5rem;
}
input[type='range'] {
  width: 20rem;
}
</style>
