let heartCount = 0;
const heartBtns = document.getElementsByClassName("heart-btn");
const heartCounter = document.getElementById("heart-counter");
for (const heartBtn of heartBtns) {
  heartBtn.addEventListener("click", function () {
    heartCount++;
    heartCounter.innerText = heartCount;
  });
}
let copyCount = 0;
const copyBtns = document.getElementsByClassName("copy-btn");
const copyCounter = document.getElementById("copy-counter");
for (const copyBtn of copyBtns) {
  copyBtn.addEventListener("click", function (e) {
    const card = e.currentTarget.closest(".card");
    const number = card.querySelector(".number").innerText;
    navigator.clipboard.writeText(number);
    copyCount++;
    copyCounter.innerText = +copyCount;
    alert(`Copied number: ${number}`);
  });
}
const callBtns = document.getElementsByClassName("call-btn");
for (const callBtn of callBtns) {
  callBtn.addEventListener("click", function (e) {
    const card = e.currentTarget.closest(".card");
    const title = card.querySelector(".title").innerText;
    const number = card.querySelector(".number").innerText;
    const currentTime = new Date().toLocaleTimeString();
    let coinField = parseInt(document.getElementById("total-coin").innerText);

    if (coinField < 20) {
      alert("❌You don't have sufficient coin. Minimum 20 coins needed");
      return;
    } else {
      alert(`📞Calling ${title} ${number}......`);
      document.getElementById("total-coin").innerText = coinField - 20;

      const historyContainer = document.getElementById("history-container");
      const div = document.createElement("div");
      div.className =
        "history p-2 bg-slate-100 my-2 rounded-xl flex justify-between items-center";
      div.innerHTML = `<div class="text w-2/3">
          <h2 class="font-semibold text-[16px]">${title}</h2>
          <h4 class="">${number}</h4>
        </div>
        <p class="text-sm">${new Date().toLocaleTimeString()}</p>`;
      historyContainer.appendChild(div);
    }
  });
}

document.getElementById("clear-btn").addEventListener("click", function () {
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerHTML = "";
});
