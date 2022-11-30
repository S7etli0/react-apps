// subsracting dates - last day of the first employee minus first day of the last employee and convert into days
function PairWorkDays(finish,start) {

    let weekendDays = 0;
    let dayMillisec = 86400000;
    let timeTogether = finish-start;
    let daysTogether = Math.trunc(timeTogether/ dayMillisec);
  
    // substracting Saturdays and Sundays
    while (start.getTime() <= finish.getTime()) {

        let day = start.getDay();
        if ((day === 0)||(day === 6)) {
            weekendDays++;
        }
        start = new Date(+start + dayMillisec);
    }
    daysTogether -= weekendDays; 

    // adding plus one because one day is lost by the date substraction   
    return daysTogether+1;
}

export default PairWorkDays;