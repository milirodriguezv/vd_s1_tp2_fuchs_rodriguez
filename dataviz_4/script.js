d3.csv('astronautas.csv', d3.autoType).then(data => {
  
  console.log(data)

  let chart = Plot.plot({
    marks: [
      Plot.barY(data, Plot.groupX({y: 'sum'},
        {x: 'anio_mision', y: 'mision_hs',
        fill: d => (d.anio_mision == 2016 ? 'purple' :  'orange')},
      )),
      // Plot.text(data, {
      //   x: 'anio_mision',
      //   y: 'mision_hs',
      //   text: '78000 horas',
      //   fill: d => (d.anio_mision == '2016' ? 'white' : 'transparent'),
      //   fpntWeight: 'bold',
      //   fontSize: 18,
      //   dy: -5,
      // }),
      Plot.axisY(d3.ticks(0, 80000, 8)),
      
      
    ],
    x: {
      label: 'Anio',
      labelOffset: 30
    },
    y: {
      label: 'Horas de mision',
      grid: true,
      labelOffset: 5,
    },
    style: {
      fontFamily: 'sans-serif',
      fontSize: 14,
      //background: 'hsl(0, 1%, 50%)',
      padding: '50px'
    },
    width: 900,
    height: 1000,
    marginLeft: 80,
    inset: 20
  })
 
  d3.select('#chart').append(() => chart)
})

