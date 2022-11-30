// remove the css formatting and the text for error warning 
function DropErrorSign(errors) {

    errors.style.backgroundColor = "transparent";
    errors.style.border = "none";

    errors.style.padding = '0px';
    errors.style.marginTop = '0px';
    errors.innerHTML='';
}

export default DropErrorSign;