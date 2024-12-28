let dateTime = document.getElementById('dateTime');
let upDateTime = () => {
    
    let date = new Date();
    
    let offset = date.getTimezoneOffset(); 
    date.setMinutes(date.getMinutes() - offset);
    
    let formattedDateTime = date.toISOString().slice(0, 16); 
    dateTime.value = formattedDateTime;

};

upDateTime();
setInterval(upDateTime, 1000);
