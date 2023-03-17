d3.csv('astronautas.csv', d3.autoType).then(data => {
  
  console.log(data)
  let chart = Plot.plot({
    marks: [
      Plot.barX(data, 
        Plot.groupY({x:'sum'}, {x: 'mision_hs',
        y: 'nacionalidad'})),
        Plot.ruleY([0])
    ],
    x: {
      grid: true,
      label: 'Horas de Mision',
      labelOffset: 20,
    },
    y: {
      label: 'Grupo de países',
      labelOffset: 150,
      domain: d3.sort(data, a => -a.mision_hs).map(d => d.nacionalidad),
    },
    
    
    height: 1000,
    margin: 150,

    style: {
      fontFamily: 'sans-serif',
      fontSize: 13,
      //background: 'hsl(0, 100%, 50%)',
      color: 'black',
      padding: '10px',
    },
  })
 
  d3.select('#chart').append(() => chart)
})
