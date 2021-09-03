let A = document.getElementById("signal");
console.log(A);

function showSignal() {
    emergency.play();
    A.classList.remove("hidden");
}