const Button = document.getElementById('direction-btn');
const directionP = document.querySelector('.direction')

Button.addEventListener('click', generateDirection);

function generateDirection() {
  let num = genRanNum();
  console.log(num);
  if (num === 0) {
      directionP.innerText = 'Straight!';
  } else if (num === 1) {
      directionP.innerText = 'Right!';
  } else {
      directionP.innerText = 'Left!';
  }
}

function genRanNum() {
  return Math.floor(Math.random() * 3);
}