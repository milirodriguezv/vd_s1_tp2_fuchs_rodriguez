d3.csv('astronautas.csv', d3.autoType).then(data => {
  
  console.log(data)
  let chart = Plot.plot({
    marks: [
      Plot.barX(data, 
        Plot.groupY({x:'sum'}, {x: 'mision_hs', y: 'nacionalidad', fill: 'genero'}))
    ],
    color: {
      type: 'categorical',
      scheme: 'Pastel1',
      legend: true,
    },
    y: {
      domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.nacionalidad),
      label: 'Nacionalidad',
      labelOffset: 200
    },
    x: {
      grid: true,
      tickFormat: 'd', 
      label: 'Horas de misión totales',
      labelOffset: 70,
    },
    style: {
      fontFamily: 'sans-serif',
      fontSize: 14,
      padding: '50px'
    },

    height: 800,
    width: 700,
    marginLeft: 200,
    marginBottom: 200,

  
  })
 
  d3.select('#chart').append(() => chart)
})

