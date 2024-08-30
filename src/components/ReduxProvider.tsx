// src/components/ReduxProvider.tsx
'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../stores/store'; // Adjust the import path based on your setup

const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
