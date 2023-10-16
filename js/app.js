window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  setTimeout(function () {
    loader.style.display = "none";
    content.style.display = "block";
  }, 1500);
});

const contract = document.querySelector(".roadmap__contract");
const dataValue = contract.getAttribute("data-value");

contract.addEventListener("click", () => {
  const textArea = document.createElement("textarea");
  textArea.value = dataValue;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("Value copied: " + dataValue);
});
