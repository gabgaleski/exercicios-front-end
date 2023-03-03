import validator from 'validator';

const btn = document.getElementById('btn-verify');
const text = document.getElementById('text-input');
const saida = document.getElementById('text-output');
const select = document.getElementById('selector');

btn.addEventListener('click', (event) => {
  event.preventDefault();
  const objVerify = {
    email: validator.isEmail(text.value),
    cpf: validator.isTaxID(text.value, 'pt-BR'),
    hexColor: validator.isHexColor(text.value),
    url: validator.isURL(text.value),
    fone: validator.isMobilePhone(text.value, 'pt-BR'),
  };
  saida.innerHTML = `A validação retornou: ${objVerify[select.value]}`;
});
