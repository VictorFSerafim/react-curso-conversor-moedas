import { render, screen } from '@testing-library/react';
import ConversorMoedas from './conversor-moedas';
import ReactDom from 'react-dom';

it('deve renderizar o componente sem erros', () => {
  const div = document.createElement('div');
  ReactDom.render(<ConversorMoedas />,div);
  ReactDom.unmountComponentAtNode(div);
});
