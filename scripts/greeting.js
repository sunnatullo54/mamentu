export function greeting() {
    const greetingElement = document.querySelector('.greeting');

    const currentDate = new Date();
    const hour = currentDate.getHours();

    greetingElement.textContent = showGreeting(hour);
}

function showGreeting(hour) {
    if(hour >= 6 && 12 > hour) {
        return 'Good moning';
    } else if(hour >= 12 && hour < 10) {
        return  'Good aftenoon';
    } else if(hour >= 10 && hour < 24) {
        return 'Good evening';
    } else {
        return 'Good night'
    }
}