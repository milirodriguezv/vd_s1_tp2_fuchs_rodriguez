d3.csv('astronautas.csv', d3.autoType).then(data => {
  
  console.log(data)

  let data_filtrada = data.filter(d => d.nacionalidad == 'U.S.S.R/Rusia' || d.nacionalidad == 'EE.UU.')

  let chart = Plot.plot({
    
    marks: [
      Plot.dot(data_filtrada, {
        x: "anio_mision",
        y: "mision_hs",
        fill: d => (d.nacionalidad == 'EE.UU.' ? '#E53935 ' : d.nacionalidad == 'U.S.S.R/Rusia' ? '#1976D2 ' : 'transparent'),
        r: 3,
      }),
      Plot.frame(),
      Plot.axisX({
        tickFormat: "d",
        //domain: [2008, 2023],
        label: 'Anio',
        labelOffset: 30,
        ticks: 6,
      }),
      
    ],
    y: {
      label: 'Horas de Mision',
    },
    
    grid: true,
    nice: true,
    
    marginBottom: 60, 
    marginLeft: 60, 
    width: 500,
    height: 300,
    style:{
      fontFamily: 'Arial',
      fontSize: 12,
      color:'black', 
      padding: '10px',
    },
    facet:{
      data: data_filtrada,
      //data: data,
      x: "nacionalidad",
      label: "Nacionalidad",
    }

  });
    
  d3.select('#chart').append(() => chart)
})

