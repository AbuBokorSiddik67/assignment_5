// Random color in all body function start
function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
document.getElementById("bg-color-btn").addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor();
});
// Random color in all body function end
// Local time start
function getFormattedDate() {
    let now = new Date();
    let day = now.toLocaleDateString('en-US', { weekday: 'short' }) + ",";
    let date = now.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    document.getElementById("day").innerText = day;
    document.getElementById("date").innerText = date;
}
document.getElementById("day,date").innerText = getFormattedDate();

// Local time end