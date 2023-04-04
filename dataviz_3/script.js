d3.csv('astronautas.csv', d3.autoType).then(data => {
  
  console.log(data)

  let data_filtrada = data.filter(d => d.nacionalidad == 'U.S.S.R/Rusia' || d.nacionalidad == 'EE.UU.')

  let chart = Plot.plot({
    
    marks: [
      Plot.dot(data_filtrada, {
        x: "anio_mision",
        y: "mision_hs",
        fill: d => (d.nacionalidad == 'EE.UU.' ? '#f56607' : d.nacionalidad == 'U.S.S.R/Rusia' ? '#8e0690' : 'transparent'),
        r: 3,
      }),
       
      Plot.frame({
        stroke: '#b0b0b0',
      }),
      Plot.axisX({
        tickFormat: "d",
        label: 'Año',
        labelOffset: 30,
        ticks: 6,        
      }),
      
    ],
    y: {
      label: 'Horas de misión',
      tickFormat: "d",
      ticks: 5
    },

    nice: true,
    
    marginBottom: 60, 
    marginLeft: 60, 
    width: 700,
    height: 400,
    style:{
      fontFamily: 'Tahoma',
      fontSize: 14,
      color:'black', 
      padding: '10px',
      
    },
    facet:{
      data: data_filtrada,
      x: "nacionalidad",
      label: null,
      
    }

  });
    
  d3.select('#chart').append(() => chart)
})

