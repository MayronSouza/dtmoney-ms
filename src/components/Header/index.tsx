import { useState } from 'react';

import logoImg from '../../assets/images/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenNewTransactionModal }) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button
          type="button"
          onClick={onOpenNewTransactionModal}
        >Nova transação</button>
      </Content>
    </Container>
  );
}