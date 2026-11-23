document.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    console.log("Link clicked: " + e.target.textContent);
  }
});
