d3.csv('astronautas.csv', d3.autoType).then(data => {
  
  console.log(data)

  let chart = Plot.plot({
    marks: [
      Plot.dot(data.filter(d => d.nacionalidad == 'U.S.S.R/Rusia' || d.nacionalidad =='EE.UU.'), {
        x: "anio_mision",
        y: "mision_hs",
        fill: "nacionalidad",
        fillOpacity: 0.6,
      }),
      Plot.frame(),
    ],
    grid: true,
    nice: true,
    zero: true,
    width: 800,
    height: 200,
    facet: {
      data: data.filter(d => d.nacionalidad == 'U.S.S.R/Rusia' || d.nacionalidad =='EE.UU.'),
      x: "nacionalidad",
      label: 'Nacionalidad'
    },
  });
    
  d3.select('#chart').append(() => chart)
})

