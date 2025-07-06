
const newMessage = 'illika!!!';

const suma = (num1, num2) => (num1 + num2);

const FirstApp = ( { title, subTitle = 'No hay SubTitle'} ) => {

    return (
        <>
            <h1> { title } </h1>
            <p> { subTitle } </p>
        </>
    )
}


export default FirstApp
