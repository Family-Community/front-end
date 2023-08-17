import { HeaderBox } from "./style"
import { useParams, useNavigate } from "react-router-dom";

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