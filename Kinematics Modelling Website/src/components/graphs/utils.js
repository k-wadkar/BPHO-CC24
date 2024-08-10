export { fixedTimestepTrajectoryCoords }

function fixedTimestepTrajectoryCoords(u, g, h, theta, timeInterval) {
  //Empty arrays to contain vertical and horizontal displacements
  const xDisp = []
  const yDisp = []

  //Calculates the horizontal and vertical components of u
  let Horizontalu = u * Math.cos((theta / 180) * Math.PI)
  let Verticalu = u * Math.sin((theta / 180) * Math.PI)

  //Y-intercept values pushed to coords arrays
  xDisp.push(0)
  yDisp.push(h)

  //Data points generated

  while (yDisp[yDisp.length - 1] >= 0) {
    Verticalu += -1 * g * timeInterval
    let newXDisp = xDisp[xDisp.length - 1] + Horizontalu * timeInterval
    let newYDisp = yDisp[yDisp.length - 1] + Verticalu * timeInterval

    xDisp.push(newXDisp)
    yDisp.push(newYDisp)
  }

  if (yDisp[yDisp.length - 1] < 0) {
    xDisp.pop()
    yDisp.pop()
  }

  return [xDisp, yDisp]
}

// function analyticalTrajectoryCoords(a, b) {
//   return a - b
// }
