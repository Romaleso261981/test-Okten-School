const btn = document.getElementById("button");
const incSpan = document.getElementById("incrementSpan");
const incBtn = document.getElementById("increment");
const decBtn = document.getElementById("decrement");

let count = 0;

incBtn.addEventListener("click", function () {
  count++;
  incSpan.textContent = count;
  console.log("count", count);
});

decBtn.addEventListener("click", function () {
  count--;
  incSpan.textContent = count;
});

btn.onclick = function () {
  alert("clicked");
};
