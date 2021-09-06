import React from 'react';
import Modal from 'react-modal';

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
      >
        <h3>Modal de Transações</h3>
      </Modal>
  );
}

export default NewTransactionModal;