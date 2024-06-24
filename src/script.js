/*const countdown = async () => {
    const response = await fetch('http://192.168.1.50:3000/halvingDate');
    const data = await response.json();
    const halvingDate = new Date(data.halvingTime);

    // Update the countdown every second
    const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = halvingDate - now;

    // Calculate years, days, hours, minutes, and seconds
    const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById('years').innerText = years;
    document.getElementById('days').innerText = days;
	document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
	document.getElementById('seconds').innerText = seconds;

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = 'Bitcoin Halving Event Has Occurred!';
		}
    }, 1000);
};

document.addEventListener('DOMContentLoaded', countdown);
*/
const countdown = () => {
    // Set the date for the next Bitcoin halving (estimated date: April 1, 2024)
    const halvingDate = new Date('April 1, 2028 00:00:00').getTime();

    // Update the countdown every second
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = halvingDate - now;

        // Calculate years, days, hours, minutes, and seconds
        const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
        const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById('years').innerText = years;
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;

        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('countdown').innerHTML = 'Bitcoin Halving Event Has Occurred!';
        }
    }, 1000);
};

document.addEventListener('DOMContentLoaded', countdown);

