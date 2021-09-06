import React, { useEffect } from 'react';

import { Container } from './styles';

export const TransactionTable: React.FC = () => {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento Web</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>06/09/2021</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Gasolina</td>
            <td className="with-draw">-R$2.000,00</td>
            <td>Veículo</td>
            <td>02/09/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}