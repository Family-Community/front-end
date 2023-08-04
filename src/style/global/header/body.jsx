import { HeaderBox } from "./style"

function Body() {
    const handleOnClick = (e) => {
        console.log('logo click event');
    }
    return (
        <HeaderBox>
            <p onClick={handleOnClick}></p>
        </HeaderBox>
    )
}

export default Body