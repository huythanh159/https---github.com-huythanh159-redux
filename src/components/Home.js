import { Container } from "react-bootstrap";
import FormAddNew from "./FormAddNew";
import HeaderNavbar from "./HeaderNavbar";
import TableUser from "./TableUser";
const Home = (props) => {
    return (
        <>
            <Container>
                <HeaderNavbar />
                <FormAddNew />
                <TableUser />
            </Container>
        </>
    )
}

export default Home;