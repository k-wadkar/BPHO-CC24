export {
  fixedTimestepTrajectoryCoords,
  analyticalTrajectoryCoords,
  calculateProjectileRange,
  calculateBoundingCoords,
  rad,
  deg
}

function fixedTimestepTrajectoryCoords(u, g, h, thetaInDeg, timeInterval) {
  //Empty arrays to contain vertical and horizontal displacements
  const xDisp = []
  const yDisp = []

  //Calculates the horizontal and vertical components of u
  let Horizontalu = u * Math.cos((thetaInDeg / 180) * Math.PI)
  let Verticalu = u * Math.sin((thetaInDeg / 180) * Math.PI)

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

function analyticalTrajectoryCoords(u, g, h, thetaInDeg, numIntervals) {
  const xDisp = []
  const yDisp = []

  const thetaInRad = (thetaInDeg / 180) * Math.PI

  const projectileRange = calculateProjectileRange(u, g, h, deg(thetaInRad))

  let intervalGap = projectileRange / numIntervals

  for (let i = 0; i < projectileRange; i += intervalGap) {
    xDisp.push(i)
    yDisp.push(
      h +
        i * Math.tan(thetaInRad) -
        (g / (2 * Math.pow(u, 2))) * (1 + Math.pow(Math.tan(thetaInRad), 2)) * Math.pow(i, 2)
    )
  }

  xDisp.push(projectileRange)
  yDisp.push(0)

  return [xDisp, yDisp]
}

function calculateBoundingCoords(u, g, h, numIntervals) {
  const xDisp = []
  const yDisp = []

  const a = -g / 2 / Math.pow(u, 2)
  const c = Math.pow(u, 2) / 2 / g + h

  const xIntersect = -Math.sqrt(-4 * a * c) / 2 / a

  let intervalGap = xIntersect / numIntervals

  for (let i = 0; i < xIntersect; i += intervalGap) {
    xDisp.push(i)
    yDisp.push(c + a * Math.pow(i, 2))
  }

  xDisp.push(xIntersect)
  yDisp.push(0)

  return [xDisp, yDisp]
}

function calculateProjectileRange(u, g, h, thetaInDeg) {
  return (
    (Math.pow(u, 2) / g) *
    (Math.sin(rad(thetaInDeg)) * Math.cos(rad(thetaInDeg)) +
      Math.cos(rad(thetaInDeg)) *
        Math.sqrt(Math.pow(Math.sin(rad(thetaInDeg)), 2) + (2 * g * h) / Math.pow(u, 2)))
  )
}

function rad(angleInDeg) {
  return (angleInDeg / 180) * Math.PI
}

function deg(angleInDeg) {
  return (angleInDeg / Math.PI) * 180
}
