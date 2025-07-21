const FirstApp = ( { title, subTitle = 'No hay SubTitle', name = 'illika' } ) => {

    return (
        <>
            <h1 data-testid="titleid"> { title } </h1>
            <h2> { subTitle } </h2>
            <p> { name } </p>
        </>
    )
}


export default FirstApp
