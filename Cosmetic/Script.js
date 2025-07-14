function shopNow() {
  alert("Redirecting to product page soon!");
}
function toggleHeart(el) {
  el.classList.toggle('liked');
  el.textContent = el.classList.contains('liked') ? '❤️' : '♡';
}
