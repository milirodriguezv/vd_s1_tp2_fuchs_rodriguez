d3.csv('astronautas.csv', d3.autoType).then(data => {
  
  console.log(data)

  let chart = Plot.plot({
    marks: [
      Plot.barY(data, Plot.groupX({y: 'sum'},
        {x: 'anio_mision', y: 'mision_hs',
        fill: d => (d.anio_mision == 2016 ? '#8e0690' :  '#cfcfcf')},
      )),
     
/*
      Plot.axisX({
        ticks:
        {display: false},
      }
      ),
*/
      

    Plot.text(data,
      Plot.groupX(
      {y: 'sum', text:"first"},
      {x: 'anio_mision', y: 'mision_hs',
      fill: d => (d.anio_mision == 2016 ? '#8e0690' :  '#cfcfcf'),
      text: d=> (d.anio_mision).toFixed(0),
      dy: -8,
      fontWeight: d => (d.anio_mision == 2016 ? 'bold': 'normal'),
      fontSize: '12px',}
      ),
    ),

    ],


    x: {
      label:'Año de misión',
      labelOffset: 60,
      ticks: null,
    },

    


    y: {
      label: 'Horas de misión',
      ticks: 5,
      domain: [0, 80000],
      tickFormat: 'd',
      grid: true,
      labelOffset: 20,
      insetTop: 40
    },

    style: {
      fontFamily: 'Tahoma',
      fontSize: 14,
      padding: '30px'
    },
    width: 700,
    height: 400,
    marginLeft: 70,
    marginBottom: 70,
    inset: 20
  })
 
  d3.select('#chart').append(() => chart)
})

