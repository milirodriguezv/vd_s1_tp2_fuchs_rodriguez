d3.csv('astronautas.csv', d3.autoType).then(data => {
  
  console.log(data)

  let chart = Plot.plot({
    marks: [
      Plot.dot(data.filter(d => d.nacionalidad == 'U.S.S.R/Rusia'),
        {
          x: 'edad_mision',
          y: 'mision_hs',
          z: 'genero',
          symbol: 'star',
          fill: 'genero',
          opacity: 0.5,
        },
      ),
    ],
    color: {
      legend: true,
      range: ['#F9E628', '#2088EA']
    },
    x: {
      tickFormat: 'd',
      labelOffset: 50,
      insetRight: 10,
      label: 'Edad',
      domain: [35, 60]
    },
    y: {
      nice: true,
      grid: true,
      label: 'Horas de misión',
      labelOffset: 50,
      insetTop: -15,
      tickFormat: 'd',
      ticks: 5
    },
    style:{
      fontFamily: 'sans-serif',
      fontSize: 12,
      color:'white', 
      padding: '10px',
      background: 'hsl(0, 0%, 0%)'
    },
    width: 700,
    height: 400,
    margin: 60,
    
  })
  d3.select('#chart').append(() => chart)
})
