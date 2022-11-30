function TimeVars() {
      
    let time = document.querySelector('input[name="timeinput"]').value;
    let fail = document.querySelector('#fail');

    let symbols = /[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]+/;
    let kind = false;
    let text = '';

    fail.style.color = 'white';
    fail.style.backgroundColor = 'red';

    if (time.trim()==='') {
        text = 'No kind of data available';

    } else if (/[aA-zZ]/.test(time)) {
        text = 'Alphabet data not allowed';

    } else if (time.trim().includes(' ')) {
        text = 'Remove the empty spaces';

    } else if (symbols.test(time)) {

        if ((time.includes('.'))&&(!isNaN(time))) {
            text = 'Only integer data allowed';
        } else {
            text = 'No special symbols allowed';
        }

    } else if ((time.length>10)) {
        text = 'Maximum 10 digits allowed';
               
    } else {

        kind = true;
        text = `${time} seconds equal`;
        fail.style.color = 'black';
        fail.style.backgroundColor = 'rgba(0, 255, 255, 0.526)';
    }

    fail.textContent = text;
    return kind;                
}

export default TimeVars;