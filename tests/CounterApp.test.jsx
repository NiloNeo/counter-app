import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe("Prueba de <CounterApp value={100} />", () => {
    const value = 100;
    test('Hacer Snapshot con <CounterApp value={100} />', () => {
        const { container } = render(<CounterApp value={value} />);
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar el valor inicial en 100', () => {
        render(<CounterApp value={value} />);
        const numero = screen.getByRole("heading", {level:2}).innerHTML;
        expect(Number(numero)).toBe(value);
    });

    test('Debe de incrementar el boton +1', () => {        
        render(<CounterApp value={value} />);        
        fireEvent.click(screen.getByText("+1"));
        expect(screen.getByText("101")).toBeTruthy();
    });

    test('Debe de decrementar el boton -1', () => {        
        render(<CounterApp value={value} />);        
        fireEvent.click(screen.getByText("-1"));
        expect(screen.getByText("99")).toBeTruthy();
    });

    test('Debe de funcionar el botón de reset', () => {        
        render(<CounterApp value={value} />);        
        fireEvent.click(screen.getByText("+1"));
        fireEvent.click(screen.getByText("+1"));
        fireEvent.click(screen.getByText("+1"));
        //fireEvent.click(screen.getByText("Reset"));
        fireEvent.click(screen.getByRole("button", {name: "btn-reset"}));
        expect(screen.getByText(value)).toBeTruthy();
    });

});