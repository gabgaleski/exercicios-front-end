// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

test('Verificando se existe dois botoes', () => {
  render(<App />);
  const btn = screen.getAllByRole('button');
  expect(btn).toHaveLength(2);
});

test('Verificando se existe um botão', () => {
  render(<App />);
  const btn = screen.getByTestId('id-send');
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveProperty('type', 'button');
  expect(btn).toHaveValue('Enviar')
});


// acessar os elementos da tela 

// interagir com os elementos (se for necessario)

// fazer os testes