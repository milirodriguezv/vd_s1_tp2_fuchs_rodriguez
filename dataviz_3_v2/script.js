d3.csv('astronautas.csv', d3.autoType).then(data => {
  
  console.log(data)

  let chart = Plot.plot({
    x: {domain: [2000, 2020]},
    marks: [
      Plot.dot(data, {
        x: "anio_mision",
        y: "mision_hs",
        fill: d => (d.nacionalidad == 'EE.UU.' ? '#E53935 ' : d.nacionalidad == 'U.S.S.R/Rusia' ? '#1976D2 ' : 'transparent'),
        r: 5,
      }),
      Plot.frame(),
    ],
    y: {
      label: 'Horas de Mision',
    },
    x: {
      domain: [2000, 2020], //no andaaaaa
      label: 'Anio',
      labelOffset: 30
    },
    grid: true,
    nice: true,
    zero: true,
    marginBottom: 60, 
    marginLeft: 60, 
    width: 500,
    height: 300,
    style:{
      fontFamily: 'sans-serif',
      fontSize: 12,
      color:'black', 
      padding: '10px',
    },
    facet:{
      data: data.filter(d => d.nacionalidad == 'U.S.S.R/Rusia' || d.nacionalidad == 'EE.UU.'),
      //data: data,
      x: "nacionalidad",
    }
  });
    
  d3.select('#chart').append(() => chart)
})

