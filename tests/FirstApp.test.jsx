import { render } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

describe("Pruebas en <FirstApp />", () => {
    /*
    test('Debe de hacer match con el snapshot', () => {

        const title = "Hola, Soy illika";
        const {container} = render(<FirstApp title={title} />)
        
        expect(container).toMatchSnapshot();      
    })
    */

    test('debe de mostrar el titulo en un h1', () => {
        const title = "Hola, Soy illika";
        const {container, getByText, getByTestId} = render(<FirstApp title={title} />)

        expect(getByText(title)).toBeTruthy();

        /*
        const h1 = container.querySelector("h1");
        expect(h1.innerHTML).toContain(title);
        */
        
        expect(getByTestId("titleid")).toBeTruthy();

        expect(getByTestId("titleid").innerHTML).toContain(title);
    });

    test('Debe de mostrar el subtitle por props', () => {
        const title = "Hola, Soy illika";
        const subTitle = "usando JEST y TESTINGLIBRARY";
        const { getByText } = render(<FirstApp title={title} subTitle={subTitle} />)

        expect(getByText(subTitle)).toBeTruthy();
    })
    
    
    
})