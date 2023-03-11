d3.csv('astronautas.csv', d3.autoType).then(data => {
  
  console.log(data)

  let chart = Plot.plot({
    marks: [
      Plot.barX(
        data,
        Plot.groupY(
          {
            x1: 'min',
            x2: 'max',
          },
          { x: 'mision_hs', y: 'nacionalidad' },
        ),
      ),
    ],
    x: {
      label: 'Min mision_hs, Max mision_hs',
    },
    grid: true,
    nice: true,
    line: true,
  })
  d3.select('#chart').append(() => chart)
})

//   let chart = Plot.plot({
//     marks: [
//       Plot.areaY(
//         data.filter(d => d.nacionalidad == 'EE.UU.'),
//         {
//           x: 'anio',
//           y: 'eva_mision_hs',
//           opacity: 0.3,
//         },
//       ),
//     ],
//     line: true,
//     x: {
//       tickFormat: 'd',
//       ticks: 11,
//     },
//     y: {
//       ticks: 7,
//       grid: true,
//     },
//   })
//   d3.select('#chart').append(() => chart)
// })