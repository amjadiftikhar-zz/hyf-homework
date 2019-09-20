const seriesDurations = [
    {
        title: '"Game of thrones"',
        days: 13,
        hours: 21,
        minutes: 20,  
    },
    {
        title: '"Ainak wala jin"',
        days: 20,    
        hours: 20,
        minutes: 35,
    },
    {
        title: '"The Alpha Bravo Charlie"',
        days: 10,
        hours: 23,
        minutes: 15,
    }
  ];
  let total = 0;
  function durationOfLife() {
      const averageLifeYears = 80;
      const averageMinutes = averageLifeYears * 526000;
      for(let i = 0; i < seriesDurations.length; i++) {
        const daysInMinutes = seriesDurations[i].days * 1440;
        const hoursInMinutes = seriesDurations[i].hours * 60;
        const totalDuration = daysInMinutes + hoursInMinutes + seriesDurations[i].minutes;
        const percentageOfLife = (totalDuration/averageMinutes) * 100;
        total += percentageOfLife;
        console.log(`${seriesDurations[i].title} took ${percentageOfLife.toFixed(2)}% of my life.`)
      }
      console.log(`In total, that is ${total.toFixed(2)}% of my life`);
  };
  console.log(durationOfLife());
