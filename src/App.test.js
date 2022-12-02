import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';



test('button has correct initial value', () => {
  render(<App />)
  const checkbox = screen.getByRole('checkbox')

  expect(checkbox).not.toBeChecked()

});

test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: "change to blue" })

  fireEvent.click(colorButton)

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" })
  expect(colorButton).toHaveTextContent('change to red')
})

test('When checkbox is checked, button should be disabled', () => {
  render(<App />)
  const colorButton = screen.getByRole('button')
  const checkbox = screen.getByRole('checkbox', { name: "Disable button" })

  fireEvent.click(checkbox)

  expect(colorButton).toBeDisabled()

  fireEvent.click(checkbox)

  expect(colorButton).toBeEnabled()


})


