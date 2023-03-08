const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

const BodyBgColor = {
  timerId: null,
  isActive: false,

  startColor() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    BodyBgColor.timerId = setInterval(() => {
      bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
  },

  stopColor() {
    clearInterval(BodyBgColor.timerId);
    this.isActive = false;
  },
};

startBtn.addEventListener('click', () => {
  stopBtn.removeAttribute('disabled');
  startBtn.setAttribute('disabled', '');
  BodyBgColor.startColor();
});
stopBtn.addEventListener('click', () => {
  stopBtn.setAttribute('disabled', '');
  startBtn.removeAttribute('disabled');
  BodyBgColor.stopColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
