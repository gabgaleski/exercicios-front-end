import swal from 'sweetalert2';
import "./style.css";
const btn = document.getElementById('random-btn');
const hero = document.getElementById('hero-name');
const img = document.getElementById('img')

btn.addEventListener('click', () => {
  const randomNumber = Math.round(Math.random() * 731);
  const getNumber = randomNumber;
  const NEWAPI = `https://superheroapi.com/api.php/6012293548862198/${getNumber}`;
  fetch(NEWAPI)
  .then((promise) => promise.json())
  .then((data) => {
    const { name, image } = data;
    hero.innerHTML = name;
    img.src = image.url;
  })
  .catch((error) => {
    swal.fire('Algo deu errado')
  })
});