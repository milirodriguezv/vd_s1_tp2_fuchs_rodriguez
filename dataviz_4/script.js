d3.csv('astronautas.csv', d3.autoType).then(data => {
  
  console.log(data)

  let chart = Plot.plot({
    line: true,
    nice: true,
    zero: true,
    grid: true,
    color: {
      legend: true,
      range: ['violet', 'orange'],
    },
    marks: [
      Plot.dot(
        data.filter(d => d.nacionalidad == 'EE.UU.'),
        {
        x: 'mision_hs',
        y: 'eva_mision_hs',
        fill: 'genero'
      }),
    ],
    width: 640,
    height: 400,
    margin: 60,
    inset: 80,
    zero: true,
    x: {
      label: 'Fertilidad',
      labelOffset: 40,
    },
    y: {
      label: 'Grupo de países',
      labelOffset: 50,
    },
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