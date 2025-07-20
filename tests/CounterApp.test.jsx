import { render, screen } from "@testing-library/react";
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

});