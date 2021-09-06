import { create } from 'domain';
import { createServer } from 'miragejs';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

import { GlobalStyle } from './styles/global';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'with-draw',
          category: 'Food',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Transaction 2',
          amount: 1000,
          type: 'deposit',
          category: 'Salário',
          createdAt: new Date(),
        }
      ];
    })
  }
});

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
