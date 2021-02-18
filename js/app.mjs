function getMood() {
  const randomNum = Math.floor(Math.random() * 28) + 1;
  document.getElementById("pix").src = "/images/" + randomNum + ".jpg";
}