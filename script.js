const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();

function resetDOM() {
  counter.classList.remove('hide');
  finalMessage.classList.remove('show');
  nums.forEach((num) => {
    num.classList.value = '';
  });
  nums[0].classList.add('in'); //Applying class 'in' to the first element so that the runAnimation function will trigger the first 'if' statement
}

function runAnimation() {
  nums.forEach((num, idx) => {
    //Do the next for each number
    const nextToLast = nums.length - 1; //To check if the element is not the last element
    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in');
        num.classList.add('out');
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in');
      } else {
        //If all nums have been passed. hide the animation and set the final message to show
        counter.classList.add('hide');
        finalMessage.classList.add('show');
      }
    });
  });
}

replay.addEventListener('click', () => {
  resetDOM();
  runAnimation();
});
