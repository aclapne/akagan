const reactDescription = ["Playground", "Sandbox","Room"]

function getRandomInt(max){
    return Math.floor(Math.random()*(max+1));
}

function Header() {
    const description = reactDescription[getRandomInt(2)]

    return (
        <h1>Welcome to my {description}.</h1>
    )
}
export default Header;