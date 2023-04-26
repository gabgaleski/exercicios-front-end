import { useState } from "react";

function Exercise() {
  
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [city, setCity] = useState('');
  const [modulo, setModulo] = useState();


  return (
    <form>
      <input value={name} name="name" placeholder='Seu nome' type='text' onChange={({target}) => setName(target.value)} />
      <input value={age} name="age" placeholder='Sua idade' type='number' onChange={({target}) => setAge(target.value)} />
      <input value={city} name="city" placeholder='Sua Cidade' type='text' onChange={({target}) => setCity(target.value)} />
      <p>Qual modulo esta:</p>
      <label>
      Fundamentos
        <input
        type='radio'
        name='modulo'
        value='Fundamentos'
        checked={modulo === 'Fundamentos'}
        onChange={({target}) => setModulo(target.value)}
        />
      </label>
      <label>
      Front-end
        <input
        type='radio'
        name='modulo'
        value='Front-end'
        checked={modulo === 'Front-end'}
        onChange={({target}) => setModulo(target.value)}
        />
      </label>
      <label>
      Back-end
        <input
        type='radio'
        name='modulo'
        value='Back-end'
        checked={modulo === 'Back-end'}
        onChange={({target}) => setModulo(target.value)}
        />
      </label>
      <label>
      Ciência da Computação
        <input 
        type='radio'
        name='modulo'
        value='Ciência da Computação'
        checked={modulo === 'Ciência da Computação'}
        onChange={({target}) => setModulo(target.value)}
        />
      </label>
      <button type='button'>Enviar</button>
    </form>
  );
}

export default Exercise;
