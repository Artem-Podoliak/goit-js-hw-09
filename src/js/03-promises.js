import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
  delayEl: document.querySelector('[name="delay"]'),
  stepEl: document.querySelector('[name="step"]'),
  amountEl: document.querySelector('[name="amount"]'),
};

refs.formEl.addEventListener('submit', event => {
  event.preventDefault();
  const delay = refs.delayEl.value;
  const step = refs.stepEl.value;
  const amount = refs.amountEl.value;

  const promises = [];
  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    const thisDelay = delay + i * step;
    const promise = createPromise(position, thisDelay);
    promises.push(promise);
  }

  Promise.all(promises)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
