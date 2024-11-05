export function input() {
    const input = document.querySelector('.greeting');

    input.addEventListener('input', (e) => {
        localStorage.setItem('greeting', e.taget.value)
    });

    input.value = localStorage.getItem('greeting');
}