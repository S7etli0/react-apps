function TimeSplit() {

    let rad = document.querySelector('input[name="yearType"]:checked').value;

    if (rad==='total') {
        document.querySelector('.avgYears').style.display = 'none';
        document.querySelector('.leapYears').style.display = 'none';
        document.querySelector('.allYears').style.display = 'inline';

    } else {
        document.querySelector('.avgYears').style.display = 'inline';
        document.querySelector('.leapYears').style.display = 'inline';
        document.querySelector('.allYears').style.display = 'none';
    }
}

export default TimeSplit;