function TimeData ({show}) {
    
    let hide = 'hidden';
    if (show) {
        hide = '';
    }
    
    let alldata = [{labeltag:'All Years', nametag:'allYears'}, {labeltag:'Avrg Years', nametag:'avgYears'},
                    {labeltag:'Leap Years', nametag:'leapYears'}, {labeltag:'Weeks', nametag:'weeks'},
                    {labeltag:'Days',nametag:'days'},{labeltag:'Hours',nametag:'hours'},
                    {labeltag:'Minutes', nametag:'mins'}, {labeltag:'Seconds', nametag:'secs'}];
                
    return (
        <span hidden={hide}>
            {alldata.map((post, index)=>{
                return (<span key={index} className={post.nametag}>
                            <label>{post.labeltag}</label>
                            <input type='number' name={post.nametag} readOnly/><br/>
                        </span>)
            })}
        </span>
    )   
}

export default TimeData;