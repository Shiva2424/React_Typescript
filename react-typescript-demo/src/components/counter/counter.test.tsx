import { render, screen } from "@testing-library/react"
import Counter from "./counter"
import userEvent from '@testing-library/user-event'

describe('Counter', () => {
    test("renders correctly", () => {
            render(<Counter />)
            const countElement = screen.getByRole('count');
            expect(countElement).toBeInTheDocument();
            const incrButton = screen.getByRole('button', {name: 'Increment'})
            expect(incrButton).toBeInTheDocument();
    });

    test('renders count of 1 after clicking increment button', async () => {
        //userEvent.setup();
        render(<Counter/>)
        const incrButton = screen.getByRole('button', {name: 'Increment'})
        await userEvent.click(incrButton);
        const countElement = screen.getByRole('count');
        expect(countElement).toHaveTextContent('1')
    })
    test('renders count of 2 after clicking increment button twice', async () => {
        //userEvent.setup();
            render(<Counter/>)
            const incrButton = screen.getByRole('button', {name: 'Increment'})
            await userEvent.click(incrButton);
            await userEvent.click(incrButton);
            const countElement = screen.getByRole('count');
            expect(countElement).toHaveTextContent('2')
        })

        test('renders count of 10 after clicking set button', async () => {
            //userEvent.setup();
                render(<Counter/>)
                const amountInput = screen.getByRole('spinbutton');
               await userEvent.type(amountInput,'10');
               expect(amountInput).toHaveValue(10)
                const countElement = screen.getByRole('count');
                const setButton = screen.getByRole('button', {name: 'Set'})
                await userEvent.click(setButton);
                expect(countElement).toHaveTextContent('10');
            })
            test('elements are focused in order', async () => {
                    render(<Counter />);
                    const incrButton = screen.getByRole('button', {name: 'Increment'})
                    const amountInput = screen.getByRole('spinbutton');
                    const setButton = screen.getByRole('button', {name: 'Set'})
                    await Promise.all([userEvent.tab(),userEvent.tab(),userEvent.tab(),userEvent.tab(),userEvent.tab()])
                    expect(incrButton).toHaveFocus();
                    await userEvent.tab();
                    expect(amountInput).toHaveFocus();
                    await userEvent.tab();
                    expect(setButton).toHaveFocus();

            })
})