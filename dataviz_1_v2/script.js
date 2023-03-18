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
      //falta ordenar
      label: 'Nacionalidad'
    },
    x: {
      grid: true,
      tickFormat: 'd', 
      label: 'Horas de misión totales',
      labelOffset: 60
    },

    height: 1000,
    marginLeft: 150,
    marginBottom: 200
  
  })
 
  d3.select('#chart').append(() => chart)
})

