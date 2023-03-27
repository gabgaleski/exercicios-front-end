import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';

describe('Testando a aplicação', () => {
  it('deve renderizar o componente App', () => {
    renderWithRouter(<App />);
  
    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
    expect(homeTitle).toBeInTheDocument();
  });
  
  it('deve renderizar o componente Sobre', async () => {
    const { history } = renderWithRouter(<App />);
  
    const aboutLink = screen.getByRole('link', { name: /Sobre/i });
    expect(aboutLink).toBeInTheDocument();
    
    userEvent.click(aboutLink);
    const aboutTitle = await screen.findByRole('heading',
    { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();

    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  
    
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/pagina/que-nao-existe/');
    })

    const notFoundTitle = screen.getByRole('heading',
      { name: 'Página não encontrada' });
    expect(notFoundTitle).toBeInTheDocument();
  });
})

describe('Testando componentes', () => {
  it('deve renderizar o componente About (apenas componente)', () => {
    renderWithRouter(<About />);
  
    const aboutTitle = screen.getByRole('heading',
      { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });
})