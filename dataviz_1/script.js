d3.csv('astronautas.csv', d3.autoType).then(data => {
  
  console.log(data)
  let chart = Plot.plot({
    marks: [
      Plot.barX(data, 
        Plot.groupY({x:'sum'}, 
        {x: 'mision_hs', y: 'nacionalidad', fill: 'genero', sort: {y: "x", reverse: true}},
        ))
    ],
    color: {
      type: 'categorical',
      range: ['rgb(255, 128, 0)', 'rgb(135, 77, 168)'],

    },
    y: {
      label: 'Nacionalidad',
      labelOffset: 200,
    },

    x: {
      grid: true,
      tickFormat: 'd', 
      label: 'Horas de misión totales',
      labelOffset: 70,
    },

    style: {
      fontFamily: 'Tahoma',
      fontSize: 14,
      color:'white', 
      background: 'hsl(0, 0%, 0%)',
    },

    height: 600,
    width: 700,
    marginLeft: 200,
    marginBottom: 100,
  })
 
  d3.select('#chart').append(() => chart)
})

