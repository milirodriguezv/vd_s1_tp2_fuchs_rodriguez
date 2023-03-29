d3.csv('astronautas.csv', d3.autoType).then(data => {
  
  console.log(data)
  let chart = Plot.plot({
    marks: [
      Plot.barX(data, 
        Plot.groupY({x:'sum'}, {x: 'mision_hs', y: 'nacionalidad', fill: 'genero'}))
    ],
    color: {
      type: 'categorical',
      range: ['#eb8c34', '#a75fc9'],

    },
    y: {
      domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.nacionalidad),
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
      
      //queria poner EEUU y Rusia en negrita 

    },
    height: 600,
    width: 600,
    marginLeft: 200,
    marginBottom: 100,
  })

  let legend = Plot.legend({
    color: {
      domain: ["Femenino", "Masculino"],
      type: 'categorical',
      range: ['#eb8c34', '#a75fc9'],
    },
    style: {
      fontFamily: 'Tahoma',
      fontSize: "12px",
    },
  })
 
  d3.select('#legend').append(() => legend)
  d3.select('#chart').append(() => chart)
})

