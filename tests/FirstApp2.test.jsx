import { render, screen } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

describe("Pruebas en <FirstApp />", () => {
    const title = "Hola, soy Illika";
    const subTitle = "Soy un SubTitle";

    test('Debe de hacer Match con el Snapshot', () => {
        const { container } = render(<FirstApp title = {title} />);
        expect(container).toMatchSnapshot();
    });
    
    test('Debe de mostrar "Hola, soy Illika"', () => {        
        render(<FirstApp title = {title} />);
        expect(screen.getByText(title)).not.toBeFalsy();
    });

    test('Debe de mostrar el titulo en un h1', () => {   
        render(<FirstApp title = {title} />);
        expect(screen.getByRole("heading", {level: 1}).innerHTML).toContain(title);
    });

    test('Debe de mostrar el subTitle enviado por los props', () => {   
        render(<FirstApp title = {title} subTitle={subTitle} />);
        expect(screen.getAllByText(subTitle).length).toBe(1);
    });
    
    

})