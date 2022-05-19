import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../redux/Counter/counter.actions';
const TableUser = (props) => {

    const dispatch = useDispatch();
    const listUsers = useSelector((state) => state.user.listUsers);

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [])
    console.log(listUsers)
    // const [listUsers, setListUsers] = useState();
    // const fetchAllUser = async () => {
    //     const res = await axios.get("http://localhost:8080/users/all");
    //     const data = res && res.data ? res.data : []
    //     setListUsers(data);
    //     console.log("check data", data)
    // }

    // useEffect(() => {
    //     fetchAllUser();
    // }, []);

    // const handleDeleteUser = (user) => {
    //     console.log(user)
    // }

    //lay api
    // const [listUsers, setListUsers] = useState();
    // const fetchAllUsers = async () => {
    //     const res = await axios.get("http://localhost:8080/users/all");
    //     const data = res && res.data ? res.data : [];
    //     setListUsers(data);
    // }
    // useEffect(() => {
    //     fetchAllUsers();
    // }, []);
    const handleDeleteUser = (user) => {
        console.log(user);
    }
    return (
        <>
            <Container>
                <br /><br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>User Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                            return (
                                <tr key={`user-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{item.email}</td>
                                    <td>{item.username}</td>
                                    <td>
                                        <button className='btn btn-danger'
                                            onClick={() => handleDeleteUser(item)}>Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                        }; */}
                        {listUsers && listUsers.length > 0 && listUsers.map((user, index) => {
                            return (
                                <tr key={`userid-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>
                                        <button className='btn btn-danger'
                                            onClick={() => handleDeleteUser(user)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </Table>
            </Container>
        </>
    )


}
export default TableUser;