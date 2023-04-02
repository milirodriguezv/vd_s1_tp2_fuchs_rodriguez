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
    },

    height: 600,
    width: 700,
    marginLeft: 200,
    marginBottom: 100,
  })

  let legend = Plot.legend({
    color: {
      domain: ["Femenino", "Masculino"],
      type: 'categorical',
      range: ['rgb(255, 128, 0)', 'rgb(135, 77, 168)'],
    },
    style: {
      fontFamily: 'Tahoma',
      fontSize: "12px",
      
    },
  })
 
  d3.select('#legend').append(() => legend)
  d3.select('#chart').append(() => chart)
})

