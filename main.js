const Button = document.getElementById('direction-btn');
const directionSpan = document.querySelector('.direction')

Button.addEventListener('click', generateDirection);

function generateDirection() {
  let num = genRanNum();
  console.log(num);
  if (num === 0) {
      directionSpan.innerText = 'Straight';
  } else if (num === 1) {
      directionSpan.innerText = 'Right';
  } else {
      directionSpan.innerText = 'Left';
  }

}

function genRanNum() {
  return Math.floor(Math.random() * 3);
}