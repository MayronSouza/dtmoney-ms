import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/images/close.svg'
import incomeImg from '../../assets/images/income.svg'
import outcomeImg from '../../assets/images/outcome.svg'

import {
  Container,
  TransactionTypeContainer,
  RadioBox,
} from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({ isOpen, onRequestClose }) => {
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault();

    console.log({ title, value, category, type });
  }

  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <img
          src={closeImg}
          className="react-modal-close"
          alt="Fechar modal"
          onClick={onRequestClose}
        />
        <Container onSubmit={handleCreateNewTransaction}>
          <h3>Cadastrar Transação</h3>

          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />

          <input
            type="text"
            placeholder="Valor"
            value={value}
            onChange={event => setValue(Number(event.target.value))}
          />

          <TransactionTypeContainer>
            <RadioBox
              type="button"
              isActive={type === 'deposit'}
              onClick={() => setType('deposit')}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entradas" />
              <span>Entradas</span>
            </RadioBox>

            <RadioBox
              type='button'
              isActive={type === 'withdraw'}
              onClick={() => setType('withdraw')}
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saídas" />
              <span>Saídas</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
  );
}

export default NewTransactionModal;