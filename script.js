let count = 0;
const heartBtns = document.getElementsByClassName("heart-btn");
const heartCounter = document.getElementById("heart-counter");
for (const heartBtn of heartBtns) {
  heartBtn.addEventListener("click", function () {
    count++;
    heartCounter.innerText = count;
  });
}
// copy btn+copy counter
