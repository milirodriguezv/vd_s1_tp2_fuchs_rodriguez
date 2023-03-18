d3.csv('astronautas.csv', d3.autoType).then(data => {
  
  console.log(data)

  let chart = Plot.plot({
    marks: [
      Plot.barX(data,
        Plot.groupY(
          {
            x1: 'min',
            x2: 'max',
          },
          { x: 'mision_hs', y: 'nacionalidad' },
        ),
      ),
      Plot.text(data, {
        x: 'mision_hs',
        y: 'nacionalidad',
        text: 'nacionalidad',
        textAnchor: "end",
        dx: -6
      })
      // Plot.ruleY([0]),
      // Plot.gridY({x: (y) => data.find((d) => d.nacionalidad >= y)?.mision_hs, insetLeft: -6}),
      // Plot.axisY({x: (y) => data.find((d) => d.nacionalidad >= y)?.mision_hs, insetLeft: -6, fill: 'black', textStroke: 'white'})
    ],
    x: {
      label: 'Min-Max horas de misión',
      tickFormat: 'd'
    },
    y: {
      ticks: null,
      label: 'Nacionalidad',
      axis: null
    },

    grid: true,
    nice: true,
    line: true,
    marginBottom: 50,
    marginLeft: 200,

    style:{
      fontFamily: 'verdana',
      fontSize: 12,
      padding: '10px',
    },
  })
  d3.select('#chart').append(() => chart)
})

