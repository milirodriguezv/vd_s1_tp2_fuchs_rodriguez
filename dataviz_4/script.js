d3.csv('astronautas.csv', d3.autoType).then(data => {
  
  console.log(data)

  let chart = Plot.plot({
    line: true,
    nice: true,
    zero: true,
    grid: true,
    color: {
      legend: true,
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
  })
  d3.select('#chart').append(() => chart)
})