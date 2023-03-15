d3.csv('astronautas.csv', d3.autoType).then(data => {
  
  console.log(data)

  let chart = Plot.plot({
    marks: [
      Plot.barY(data, Plot.groupX({y: 'sum'},
        {x: 'anio_mision', y: 'mision_hs',
        fill: d => (d.anio_mision == 2016 ? 'purple' :  'orange')},
      )),
      
    ],
    y: {
      grid: true
    },
    height: 1000,
    marginLeft: 100,
  })
 
  d3.select('#chart').append(() => chart)
})

