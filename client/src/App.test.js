import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Renders App Correctly', () => {
  render(<App />);
  const elementInput = screen.getByLabelText('Tulis Pekerjaan');
  const elementButton = screen.getByRole('button',{name: /Tambah/i});
  
  // Expects input works correctly
  fireEvent.change(elementInput, {target: {value: 'Berenang'}})
  expect(elementInput.value).toBe('Berenang');
  
  // Expects task added successfully and input area emptied
  fireEvent.click(elementButton);
  expect(elementInput.value).toBe('');
  expect(screen.getByText(/Berenang/i)).toBeInTheDocument();

  // Expects remove button works successfully
  const removeButton = (screen.getByText(/Berenang/i)).querySelector('button');
  fireEvent.click(removeButton);
  expect(screen.queryByText(/Berenang/i)).toBeNull();

});
