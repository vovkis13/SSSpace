import React from 'react';
import { Container } from '@mui/material';
import { AgenciesList } from './components';
import './AgenciesPage.scss';

export const AgenciesPage = () => (
  <Container maxWidth="xl">
    <h1 className="agencies-header">Agencies</h1>
    <AgenciesList />
  </Container>
);
