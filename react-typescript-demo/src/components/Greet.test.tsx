import { render, screen } from "@testing-library/react";
import Greet from "./Greet";


describe('Greet', () => {
    test('Greet render', () => {
        render(<Greet />)
        const element = screen.getAllByText(/Welcome/im);
        for (let i = 0 ; i< element.length; i++) {
            expect(element[i]).toBeInTheDocument();
        }
    })
    
    test('Greet render with name props', () => {
        render(<Greet name="Rajini" />)
        const element = screen.getByText(/Welcome Rajini/);
        expect(element).toBeInTheDocument();
    })
    test('Greet render with name count', () => {
        render(<Greet isloggedin={true} count={20} />)
        const element = screen.getByText(/You have 20 unread messages/);
        expect(element).toBeInTheDocument();
    })
})
