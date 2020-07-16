import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';
import uuid from 'uuid/v1';

test('Renders Todo List Correctly', () => {
  const { getByText, getByRole } = render( 
  <TodoList tasks={[
    {task: "masak ikan", id: uuid()},
    {task: "minum air", id: uuid()}
  ]} />
  );

  // Expects tasks lists displayed
  const linkElement = getByText(/masak ikan/i);
  expect(linkElement).toBeInTheDocument();
  const linkElement2 = getByText(/minum air/i);
  expect(linkElement2).toBeInTheDocument(); 
});

  
