import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Header from '../components/Header';

describe('1 - Analisando o componente chamado `Header`', () => {
  it('Será validado se o componente `<Header />` é renderizado', () => {
    render(<Header />);
  });

  it('Será validado se o componente `<Header />` contém uma tag `header`', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('Será validado se o componente `<Header />` contém uma tag `h1`', () => {
    render(<Header />);
    const headerTitle = screen.getByRole('heading', { level: 1 });
    expect(headerTitle).toBeInTheDocument();
  });

  it('Será validado se o componente `<Header />` renderiza corretamente o texto "Falando de CRA e VITE"', () => {
    render(<Header />);
    const headerTitle = screen.getByRole('heading', { level: 1 });
    expect(headerTitle).toHaveTextContent(/Falando de CRA e VITE/i);
  });

  it('Será validado se o componente `<Header />` está sendo renderizado no componente principal `App`', () => {
    render(<App />);
    const headerTitle = screen.getByTestId('header-title');
    expect(headerTitle).toHaveTextContent(/Falando de CRA e VITE/i);
  });

  
});
