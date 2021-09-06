import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { Container } from './styles';

interface TransactionProps {
  id: number;
  title: string;
  amount: Amount;
  type: string;
  category: string;
  createdAt: Date;
}

type Amount = {
  amount: 'deposit' | 'with-draw';
}

export const TransactionTable: React.FC = () => {
  const [transactions, setTransactions] = useState<TransactionProps[]>();

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data));
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
        {transactions && transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td className={transaction.type === 'deposit' ? "deposit" : 'with-draw'}>
              {transaction.amount}
            </td>
            <td>{transaction.category}</td>
            <td>{transaction.createdAt}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </Container>
  );
}