d3.csv('astronautas.csv', d3.autoType).then(data => {
  
    console.log(data)
    let chart = Plot.plot({
      marks: [
        Plot.barX(data, {
          x: 'mision_hs',
          y: 'nacionalidad',
          sort: 'mision_hs',
          fill: 'mision_hs'
        }),
      ],
      color: {
        scheme: 'greens',
        legend: true,
        label: 'Horas de misión por persona'
      },
  
      
      y: {
        /*domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, sb.mision_hs)).map(d => d.nacionalidad),*/
        label: 'Nacionalidad'
      },
      x: {
        grid: true,
        tickFormat: 'd', 
        label: 'Horas de misión totales',
        labelOffset: 60
      },
      style:{
        fontFamily: 'verdana',
        fontSize: 12,
      },
  
      height: 1000,
      marginLeft: 150,
      marginBottom: 200
    
    })
    
   
    d3.select('#chart').append(() => chart)
  })