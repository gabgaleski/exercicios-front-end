// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe("Tela de inserção de email", () => {

  it('Verificando se existe o campo Email.', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });

 it('Verificando se existe dois botoes', () => {
   render(<App />);
   const btn = screen.getAllByRole('button');
    expect(btn).toHaveLength(2);
  });

  it('Verificando se existe um botão', () => {
    render(<App />);
    const btn = screen.getByTestId('id-send');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveProperty('type', 'button');
    expect(btn).toHaveValue('Enviar')
  });

  test('Verificando se o botão e o campo email estão funcionando.', () => {
    render(<App />);
  
    const EMAIL_USER = 'email@email.com';
  
    const textEmail = screen.getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');
  
    const btnSend = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email');
    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(btnSend);
  
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
  });
})



// acessar os elementos da tela 

// interagir com os elementos (se for necessario)

// fazer os testes