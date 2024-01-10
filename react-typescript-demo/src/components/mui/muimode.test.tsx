import { screen } from "@testing-library/react"
import {render} from '../../test-utils'
import AppProviders from "../providers/App-providers"
import MuiMode from "./mui-mode"


describe('Mui Mode', () => {
    test('renders text correctly', () => {
        // render(<MuiMode />, {
        //     wrapper: AppProviders
        // })
        render(<MuiMode />);
        const headingElement = screen.getByRole('heading');
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveTextContent('dark mode')
    })
})