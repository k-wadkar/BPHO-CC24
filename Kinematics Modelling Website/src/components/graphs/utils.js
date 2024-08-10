export {
  fixedTimestepTrajectoryCoords,
  analyticalTrajectoryCoords,
  calculateHorizontalProjectileRange,
  calculateBoundingCoords,
  calculateDistanceTravelled,
  rad,
  deg
}

function fixedTimestepTrajectoryCoords(u, g, h, thetaInDeg, timeInterval) {
  //Empty arrays to contain vertical and horizontal displacements
  const xDisp = []
  const yDisp = []

  //Calculates the horizontal and vertical components of u
  let Horizontalu = u * cos(rad(thetaInDeg))
  let Verticalu = u * sin(rad(thetaInDeg))

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

  const thetaInRad = rad(thetaInDeg)

  const projectileRange = calculateHorizontalProjectileRange(u, g, h, thetaInDeg)

  let intervalGap = projectileRange / numIntervals

  for (let i = 0; i < projectileRange; i += intervalGap) {
    xDisp.push(i)
    yDisp.push(
      h +
        i * tan(thetaInRad) -
        (g / (2 * square(u))) * (1 + square(Math.tan(thetaInRad))) * square(i)
    )
  }

  xDisp.push(projectileRange)
  yDisp.push(0)

  return [xDisp, yDisp]
}

function calculateBoundingCoords(u, g, h, numIntervals) {
  const xDisp = []
  const yDisp = []

  const a = -g / 2 / square(u)
  const c = square(u) / 2 / g + h

  const xIntersect = -sqrt(-4 * a * c) / 2 / a

  let intervalGap = xIntersect / numIntervals

  for (let i = 0; i < xIntersect; i += intervalGap) {
    xDisp.push(i)
    yDisp.push(c + a * square(i))
  }

  xDisp.push(xIntersect)
  yDisp.push(0)

  return [xDisp, yDisp]
}

function calculateHorizontalProjectileRange(u, g, h, thetaInDeg) {
  return (
    (square(u) / g) *
    (sin(rad(thetaInDeg)) * cos(rad(thetaInDeg)) +
      cos(rad(thetaInDeg)) * sqrt(square(sin(rad(thetaInDeg))) + (2 * g * h) / square(u)))
  )
}

function calculateDistanceTravelled(u, g, h, thetaInDeg) {
  let thetaInRad = rad(thetaInDeg)

  let a = square(u) / (g * (1 + square(tan(thetaInRad))))
  let b = tan(thetaInRad)
  let c =
    tan(thetaInRad) -
    (g * calculateHorizontalProjectileRange(u, g, h, thetaInDeg) * (1 + square(tan(thetaInRad)))) /
      square(u)

  function integralExpression(z) {
    return 0.5 * Math.log(Math.abs(sqrt(1 + square(z)) + z)) + 0.5 * z * sqrt(1 + square(z))
  }

  return a * (integralExpression(b) - integralExpression(c))
}

function rad(angleInDeg) {
  return (angleInDeg / 180) * Math.PI
}

function deg(angleInRad) {
  return (angleInRad / Math.PI) * 180
}

function sin(angleInRad) {
  return Math.sin(angleInRad)
}

function cos(angleInRad) {
  return Math.cos(angleInRad)
}

function tan(angleInRad) {
  return Math.tan(angleInRad)
}

function square(input) {
  return Math.pow(input, 2)
}

function sqrt(input) {
  return Math.sqrt(input)
}
