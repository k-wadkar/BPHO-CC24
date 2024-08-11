export {
  fixedTimestepTrajectoryCoords,
  analyticalTrajectoryCoords,
  analyticalTrajectoryCoordsExtra,
  calculateHorizontalProjectileRange,
  calculateBoundingCoords,
  calculateDistanceTravelled,
  calculateMaximaCoords,
  calculateMinimaCoords,
  calculateInstantaneousRange,
  analyticalRangeCoords,
  calculateMaximaRange,
  calculateMinimaRange,
  square,
  sqrt,
  rad,
  deg
}

//Returns an array containing an array of x-values and a corresponding array of y-values
//Calculations made using discrete timesteps
function fixedTimestepTrajectoryCoords(u, g, h, xIntercept, thetaInDeg, timeInterval) {
  //Empty arrays to contain vertical and horizontal displacements
  const xDisp = []
  const yDisp = []

  //Calculates the horizontal and vertical components of u
  let Horizontalu = u * cos(rad(thetaInDeg))
  let Verticalu = u * sin(rad(thetaInDeg))

  //Projectile start coordinates pushed to coords arrays
  xDisp.push(xIntercept)
  yDisp.push(h)

  //Data points generated
  let t = 0

  do {
    t += timeInterval

    //Verticalu += -g * timeInterval
    let newXDisp = xDisp[xDisp.length - 1] + Horizontalu * timeInterval
    //let newYDisp = yDisp[yDisp.length - 1] + Verticalu * timeInterval
    let newYDisp = Verticalu * t + 0.5 * -g * square(t) + h

    xDisp.push(newXDisp)
    yDisp.push(newYDisp)
  } while (yDisp[yDisp.length - 1] > 0)

  while (yDisp[yDisp.length - 1] <= 0) {
    xDisp.pop()
    yDisp.pop()
  }

  xDisp.push(xIntercept + calculateHorizontalProjectileRange(u, g, h, thetaInDeg))
  yDisp.push(0)

  //returns the x
  return [xDisp, yDisp, Horizontalu, -Verticalu]
}

//Returns an array containing an array of x-values and a corresponding array of y-values
//Calculations made using mathematical formulae (i.e. analytical method)
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

//Same as above but returns values below y=0 as per the specified underflow
function analyticalTrajectoryCoordsExtra(u, g, h, thetaInDeg, numIntervals, underflow) {
  const xDisp = []
  const yDisp = []

  const thetaInRad = rad(thetaInDeg)

  const projectileRange = calculateHorizontalProjectileRange(u, g, h, thetaInDeg)

  let intervalGap = projectileRange / numIntervals

  let i = 0
  let y = 0

  while (y >= underflow) {
    xDisp.push(i)
    y =
      h +
      i * tan(thetaInRad) -
      (g / (2 * square(u))) * (1 + square(Math.tan(thetaInRad))) * square(i)
    yDisp.push(y)
    i += intervalGap
  }

  return [xDisp, yDisp]
}

//Returns an array containing an array of x-values and a corresponding array of y-values
//Coords relate to the 'bounding parabola' for trajectories passing through a given point
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

//Calculates maximum x-value when y=0
function calculateHorizontalProjectileRange(u, g, h, thetaInDeg) {
  return (
    (square(u) / g) *
    (sin(rad(thetaInDeg)) * cos(rad(thetaInDeg)) +
      cos(rad(thetaInDeg)) * sqrt(square(sin(rad(thetaInDeg))) + (2 * g * h) / square(u)))
  )
}

//Calculates the length of a parabolic arc (i.e. the distance travelled by a projectile)
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

//Determines the coordinates for a range local maximum
function calculateMaximaCoords(u, g, h, thetaInDeg) {
  if (thetaInDeg < 70.5) {
    return null
  }

  let thetaInRad = rad(thetaInDeg)

  let maximaTime = ((3 * u) / 2 / g) * (sin(thetaInRad) - sqrt(square(sin(thetaInRad)) - 8 / 9))

  let xVal = maximaTime * u * cos(thetaInRad)
  let yVal =
    h + xVal * tan(thetaInRad) - (g / 2 / square(u)) * (1 + square(tan(thetaInRad))) * square(xVal)

  return [xVal, yVal]
}

//Determines the coordinates for a range local minimum
function calculateMinimaCoords(u, g, h, thetaInDeg) {
  if (thetaInDeg < 70.5) {
    return null
  }

  let thetaInRad = rad(thetaInDeg)

  let maximaTime = ((3 * u) / 2 / g) * (sin(thetaInRad) + sqrt(square(sin(thetaInRad)) - 8 / 9))

  let xVal = maximaTime * u * cos(thetaInRad)
  let yVal =
    h + xVal * tan(thetaInRad) - (g / 2 / square(u)) * (1 + square(tan(thetaInRad))) * square(xVal)

  return [xVal, yVal]
}

//Determines the range of a local maximum if it occurs
function calculateMaximaRange(u, g, h, thetaInDeg) {
  if (thetaInDeg < 70.5) {
    return null
  }

  let thetaInRad = rad(thetaInDeg)

  let maximaTime = ((3 * u) / 2 / g) * (sin(thetaInRad) - sqrt(square(sin(thetaInRad)) - 8 / 9))

  let maximaRange = calculateInstantaneousRange(u, g, maximaTime, thetaInDeg)

  return [maximaTime, maximaRange]
}

//Determines the range of a local minimum if it occurs
function calculateMinimaRange(u, g, h, thetaInDeg) {
  if (thetaInDeg < 70.5) {
    return null
  }

  let thetaInRad = rad(thetaInDeg)

  let minimaTime = ((3 * u) / 2 / g) * (sin(thetaInRad) + sqrt(square(sin(thetaInRad)) - 8 / 9))

  let minimaRange = calculateInstantaneousRange(u, g, minimaTime, thetaInDeg)

  return [minimaTime, minimaRange]
}

//Returns an array containing an array of x-values and a corresponding array of y-values
//Coords correspond to a range vs time graph
function analyticalRangeCoords(u, g, h, thetaInDeg, numIntervals, underflow) {
  let instantaneousTime = []
  let range = []

  let thetaInRad = rad(thetaInDeg)

  let a = (-g / 2 / square(u)) * (1 + square(tan(thetaInRad)))
  let b = tan(thetaInRad)
  let c = h - underflow

  let maxXVal = (-b - sqrt(square(b) - 4 * a * c)) / 2 / a
  let maxTime = maxXVal / u / cos(thetaInRad)

  let intervalGap = maxTime / numIntervals

  for (let i = 0; i <= maxTime; i += intervalGap) {
    instantaneousTime.push(i)
    range.push(calculateInstantaneousRange(u, g, i, thetaInDeg))
  }

  return [instantaneousTime, range]
}

//Calculates the instantaneous distance of a projectile from its initial launch position
function calculateInstantaneousRange(u, g, t, thetaInDeg) {
  return sqrt(
    square(u) * square(t) -
      g * Math.pow(t, 3) * u * sin(rad(thetaInDeg)) +
      0.25 * square(g) * Math.pow(t, 4)
  )
}

//Converts from degrees to radians
function rad(angleInDeg) {
  return (angleInDeg / 180) * Math.PI
}

//Vice versa
function deg(angleInRad) {
  return (angleInRad / Math.PI) * 180
}

//Sine shorthand
function sin(angleInRad) {
  return Math.sin(angleInRad)
}

//Ditto
function cos(angleInRad) {
  return Math.cos(angleInRad)
}

//Ditto
function tan(angleInRad) {
  return Math.tan(angleInRad)
}

//Squares input
function square(input) {
  return Math.pow(input, 2)
}

//Square roots input
function sqrt(input) {
  return Math.sqrt(input)
}
