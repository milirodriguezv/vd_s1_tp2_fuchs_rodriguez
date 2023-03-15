d3.csv('astronautas.csv', d3.autoType).then(data => {
  
  console.log(data)

  let chart = Plot.plot({
    marks: [
      Plot.barY(data, {
        x: 'anio_mision',
        y: 'mision_hs',
      }),
    ],
    color: {
      scheme: 'greens',
      legend: true,
    },
    x: {
      grid: true,
    },
    height: 1000,
    marginLeft: 100,
  })
 
  d3.select('#chart').append(() => chart)
})