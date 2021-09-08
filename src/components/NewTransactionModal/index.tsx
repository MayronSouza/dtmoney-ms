import React from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/images/close.svg'

import { Container } from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({ isOpen, onRequestClose }) => {
  

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
        <Container>
          <h3>Cadastrar Transação</h3>

          <input
            type="text"
            placeholder="Título"
          />
          <input
            type="text"
            placeholder="Valor"
          />
          <input
            type="text"
            placeholder="Categoria"
          />

          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
  );
}

export default NewTransactionModal;