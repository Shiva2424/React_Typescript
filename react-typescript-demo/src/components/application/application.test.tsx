import { render, screen } from "@testing-library/react";
import Application from "./application";

describe('Application', () => {
    test('renders correctly', () => {
render(<Application />)
const nameElement = screen.getByRole('textbox');
expect(nameElement).toBeInTheDocument();

const checkboxElement = screen.getByRole('checkbox');
expect(checkboxElement).toBeEnabled();
expect(checkboxElement).toBeInTheDocument();

const pageheading = screen.getByRole('heading', {level: 1});
expect(pageheading).toBeInTheDocument();

const nameElement2 = screen.getByLabelText('Name')
expect(nameElement2).toBeInTheDocument();

const nameElement3 = screen.getByPlaceholderText('Enter Name')
expect(nameElement3).toBeInTheDocument();

const divElement = screen.getByText('All Fields are mandatory');
expect(divElement).toBeInTheDocument();

const nameElement4 = screen.getByDisplayValue('Subramanyam');
expect(nameElement4).toBeInTheDocument();

const testElement = screen.getByTestId('customelement');
expect(testElement).toBeInTheDocument();
    })
})