import { useState } from 'react';
import { createServer } from 'miragejs';


import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

import { GlobalStyle } from './styles/global';
import NewTransactionModal from './components/NewTransactionModal';

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
  const [isNewTransactionOpenModal, setIsNewTransactionOpenModal] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionOpenModal(true);
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionOpenModal(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionOpenModal}
        onRequestClose={handleCloseNewTransactionModal}
      />
      
      <GlobalStyle />
    </>
  );
}
