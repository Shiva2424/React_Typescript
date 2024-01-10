import { render, screen } from "@testing-library/react"
import CounterTwo from "./counterTwo"
import userEvent from '@testing-library/user-event'

describe('Counter two', () => {
    test('renders correctly', () => {
        render(<CounterTwo count={0} />);
        const textElement = screen.getByText('Counter two');
        expect(textElement).toBeInTheDocument();
    })

    test('handlers are called', async () => {
        userEvent.setup();
        const incrementHandler = jest.fn();
        const decrementHandler = jest.fn();
        render(<CounterTwo count={0} increment={incrementHandler} decrement={decrementHandler} />);
        const incrButton = screen.getByRole('button', {name: 'Increment'})
        const decrButton = screen.getByRole('button', {name: 'Decrement'})
        await userEvent.click(incrButton)
        await userEvent.click(decrButton)
        expect(incrementHandler).toHaveBeenCalledTimes(1);
        expect(decrementHandler).toHaveBeenCalledTimes(1);
    })
})