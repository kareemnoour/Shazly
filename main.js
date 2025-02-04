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

let form = document.getElementById('form');
let id = document.getElementById('id');
let name = document.getElementById('name');
let email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let selectedDate = new Date(dateTime.value); 

    let options = { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: true };
    let formattedDate = selectedDate.toLocaleString("en-GB", options).replace(',', ' - ');
    

    let popup = document.querySelector('.popup');
    popup.style.display = 'block';
    popup.innerHTML = `
            <h2>Thank you for submitting</h2>
            <p>id:${id.value}</p>
            <p>name:${name.value}</p>
            <p>email:${email.value}</p>
            <p>date& time:${formattedDate}</p>
    `;
    setTimeout(() => {
        location.reload();
    }, 3000);
});