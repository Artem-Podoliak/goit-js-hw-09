import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const rfs = {
  startBtn: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),

  selectDate: null,
  startTime: Date.now(),
  futureTime: null,
  intervalId: null,

  decrementValue: null,
};

rfs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    rfs.selectDate = selectedDates[0];

    if (rfs.selectDate <= new Date()) {
      antecedentsTimeMessage();
    } else {
      rfs.startBtn.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

rfs.startBtn.addEventListener('click', () => {
  timer();
  rfs.startBtn.disabled = true;
});

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function antecedentsTimeMessage() {
  Notiflix.Notify.failure('Please choose a date in the future');
}

function timer() {
  rfs.decrementValue = rfs.selectDate - rfs.startTime;
  if (rfs.decrementValue <= 0) {
    clearInterval(rfs.intervalId);
  }

  rfs.intervalId = setInterval(() => {
    updateTime();
  }, 1000);
}

function updateTime() {
  renderEl(convertMs(rfs.decrementValue));
  rfs.decrementValue -= 1000;
}

function renderEl({ days = 0, hours = 0, minutes = 0, seconds = 0 }) {
  rfs.daysEl.textContent = addLeadingZero(days);
  rfs.hoursEl.textContent = addLeadingZero(hours);
  rfs.minutesEl.textContent = addLeadingZero(minutes);
  rfs.secondsEl.textContent = addLeadingZero(seconds);
}
