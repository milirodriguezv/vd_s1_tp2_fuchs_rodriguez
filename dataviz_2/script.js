d3.csv('astronautas.csv', d3.autoType).then(data => {
  
  console.log(data)

  let chart = Plot.plot({
    marks: [
      Plot.dot(data,
        //data.filter(d => d.genero == 'femenino'),
        {
          x: 'edad_mision',
          y: 'mision_hs',
          z: 'genero',
          fill: 'genero',
          opacity: 0.5
          
        },
      ),
    ],
    symbol: {
      legend: true,
    },
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
