import { fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';

describe('teste da aplicação toda', () => {
  it('deve renderizar o componente App', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText('Você está na página Início');
  
    expect(home).toBeInTheDocument();
  })
  
  it('deve renderizar o componente Sobre', () => {
    const { getByText, history} = renderWithRouter(<App />);
    fireEvent.click(getByText('Sobre'));
  
    const pathname = history.location.pathname;
    expect(pathname).toBe("/about");
  
    const aboutAll = getByText("Você está na página Sobre");
    expect(aboutAll).toBeInTheDocument();
  });
})


describe('teste a página Not Found', () => {
  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { getByText, history} = renderWithRouter(<App />);
    history.push('/pagina/que-nao-existe');
  
    const noMatch = getByText('Página não encontrada');
    expect(noMatch).toBeInTheDocument();
  });
});

it('deve renderizar o componente About (apenas componente', () => {
  const { getByText, history } = renderWithRouter(<About />);
  const aboutOnly = getByText('Você está na página Sobre');
  expect(aboutOnly).toBeInTheDocument();
})