const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', e => {
  e.preventDefault();
  const location = search.value;
  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';
  messageTwo.style.backgroundColor = 'transparent';
  fetch('/weather?address=' + location).then(response => {
    response.json().then(data => {
      if (data.error) {
        messageOne.textContent = data.error;
        messageTwo.style.backgroundColor = 'transparent';
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
        messageTwo.style.backgroundColor = 'transparent';
        messageTwo.style.fontSize = '13px';
      }
    });
  });
});
