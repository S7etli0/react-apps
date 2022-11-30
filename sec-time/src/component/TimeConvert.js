import TimeSplit from "./TimeSplit";

function TimeConvert(e) {
    
    e.preventDefault();
    let time = e.target.timeinput.value;

    if (!isNaN(time))  {
        let fulldays = Math.trunc(time/60/60/24);

        let leap = Math.trunc(fulldays/1461);
        fulldays = Math.trunc(fulldays%1461);

        let x = Math.trunc(fulldays/1460);
        if (x===1) {
            fulldays-=1;
        }
        e.target.leapYears.value = leap;

        let normYears = Math.trunc(fulldays/365);
        e.target.avgYears.value = normYears + 3*leap;

        e.target.allYears.value = normYears + 4*leap;

        let weeksTime = Math.trunc(fulldays%365/7);
        e.target.weeks.value = weeksTime;

        if (x===1) {
            e.target.days.value = 1;
            
        } else {
            let daysTime = Math.trunc(fulldays%365%7);
            e.target.days.value = daysTime;
        }

        let hoursTime = Math.trunc(time/60/60%24);
        e.target.hours.value = hoursTime;

        let minutes = Math.trunc(time/60%60);
        e.target.mins.value = minutes;

        let seconds = time%60;
        e.target.secs.value = seconds;
        TimeSplit();
    }
}
    
export default TimeConvert;