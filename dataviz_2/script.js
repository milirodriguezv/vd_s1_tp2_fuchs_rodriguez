d3.csv('astronautas.csv', d3.autoType).then(data => {
  
  console.log(data)

  let chart = Plot.plot({
    marks: [
      Plot.line(data,
        //data.filter(d => d.genero == 'femenino'),
        {
          x: 'edad_mision',
          y: 'mision_hs',
          z: 'genero',
        },
      ),
    ],
    x: {
      // https://github.com/observablehq/plot#formats
      tickFormat: 'd',
    },
    y: {
      nice: true,
      grid: true,
    },
  })
  d3.select('#chart').append(() => chart)
})
