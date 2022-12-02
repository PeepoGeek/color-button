import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces, primaryColor, secondaryColor } from './App'



test('button has correct initial value', () => {
  render(<App />)
  const checkbox = screen.getByRole('checkbox')

  expect(checkbox).not.toBeChecked()

});

test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: `change to ${replaceCamelWithSpaces(secondaryColor)}` })

  fireEvent.click(colorButton)

  expect(colorButton).toHaveStyle({ backgroundColor: secondaryColor })
  expect(colorButton).toHaveTextContent(`change to ${replaceCamelWithSpaces(primaryColor)}`)
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

test('button turns grey color when is disabled', () => {

  render(<App />)

  const colorButton = screen.getByRole('button')
  const checkbox = screen.getByRole('checkbox', { name: "Disable button" })

  fireEvent.click(checkbox)

  expect(colorButton).toHaveStyle({ backgroundColor: "grey" })

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: primaryColor })

  fireEvent.click(colorButton)
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" })

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: secondaryColor })
})


describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letter', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})