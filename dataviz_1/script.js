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
    y: {
      domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.nacionalidad),
    },
    x: {
      grid: true,
    },
    height: 1000,
    marginLeft: 100,
  })
 
  d3.select('#chart').append(() => chart)
})
