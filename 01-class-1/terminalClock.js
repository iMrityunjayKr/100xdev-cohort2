//designing a terminal clock

function clock() {
    const date = new Date();
    const hours = String(date.getHours());
    const minutes = String(date.getMinutes());
    const seconds = String(date.getSeconds());
    console.clear();
    console.log(`${hours}:${minutes}:${seconds}`);
}
setInterval(clock, 1000)