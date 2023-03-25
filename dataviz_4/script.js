d3.csv('astronautas.csv', d3.autoType).then(data => {
  
  console.log(data)

  let chart = Plot.plot({
    marks: [
      Plot.barY(data, Plot.groupX({y: 'sum'},
        {x: 'anio_mision', y: 'mision_hs',
        fill: d => (d.anio_mision == 2016 ? 'purple' :  'orange')},
      )),
     
      // Plot.axisX({y: (x) => data.find((d) => d.mision_hs >= x)?.anio_mision,  //poner los anios arriba de cada barra
      // fontFamily: 'Arial',
      // fontWeight: 'bold', 
      //   fontSize: 20,
      //   tickSize: 0,
      // }),
  
      // Plot.axisX({fill: "white", tickSize: 0}),
      
    ],
    x: {
      label:'Año de misión',
      tickFormat: 'd',
      labelOffset: 60,
      //fontWeight: d => (d.anio_mision == 2016 ? 'bold' :  '')
    },


    y: {
      label: 'Horas de misión',
      ticks: 7,
      domain: [0, 80000],
      tickFormat: 'd',
      grid: true,
      labelOffset: 20,
      insetTop: 40
    },

    style: {
      fontFamily: 'Verdana',
      fontSize: 14,
      padding: '30px'
    },
    width: 800,
    height: 500,
    marginLeft: 70,
    marginBottom: 70,
    inset: 20
  })
 
  d3.select('#chart').append(() => chart)
})

