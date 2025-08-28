// heart functionality
let heartCount = 0;
const heartBtns = document.getElementsByClassName("heart-btn");
const heartCounter = document.getElementById("heart-counter");
for (const heartBtn of heartBtns) {
  heartBtn.addEventListener("click", function () {
    heartCount++;
    heartCounter.innerText = heartCount;
  });
}
// copy button functionality
let copyCount = 0;
const copyBtns = document.getElementsByClassName("copy-btn");
const copyCounter = document.getElementById("copy-counter");
for (const copyBtn of copyBtns) {
  copyBtn.addEventListener("click", function () {
    copyCount++;
    copyCounter.innerText = copyCount;
    //
    alert("Copied number");
  });
}
