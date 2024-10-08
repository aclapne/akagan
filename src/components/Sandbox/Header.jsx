const reactDescription = ["Playground", "Sandbox","Room"]

function getRandomInt(max){
    return Math.floor(Math.random()*(max+1));
}

function Header() {
    const description = reactDescription[getRandomInt(2)]

    return (
        <section className={"sandbox__header"}>
            <h1>Welcome to my {description}.</h1>
        </section>
    )
}
export default Header;