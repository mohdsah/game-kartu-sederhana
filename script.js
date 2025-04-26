const kotaks = document.querySelectorAll('.kotak');

kotaks.forEach((kotak, index) => {
  kotak.style.backgroundImage = `url('images/${index + 1}.jpg')`;
});
