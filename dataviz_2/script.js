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
          opacity: 0.5,
          fill: d => (d.genero == 'femenino' ? 'darkviolet' : 'darkorange'),
          legend:true,
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
    style:{
      fontFamily: 'verdana',
      fontSize: 12,
      color:'black', 
      padding: '10px',
    },
    width: 700,
    height: 400,
    marginLeft: 80,
    
  })
  d3.select('#chart').append(() => chart)
})
