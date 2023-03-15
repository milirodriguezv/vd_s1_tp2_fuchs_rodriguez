d3.csv('astronautas.csv', d3.autoType).then(data => {
  
  console.log(data)

  let chart = Plot.plot({
    marks: [
      Plot.barY(data, Plot.groupX({y: 'sum'},
        {x: 'anio_mision', y: 'mision_hs',
        fill: d => (d.anio_mision == 2016 ? 'purple' :  'orange')},
      )),
     
      Plot.axisX({y: (x) => data.find((d) => d.mision_hs >= x)?.anio_mision,  //poner los anios arriba de cada barra
        fontWeight: 'bold', 
        fontSize: 20,
        tickSize: 0,
      }),
  
      Plot.axisX({fill: "white", tickSize: 0}),
      
    ],
    x: {
      label: null,
      labelOffset: 30,
  
    },

    y: {
      label: 'Horas de mision',
      ticks: 15,
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

