// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Form, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../App.css'

// const Register = () => {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [data, setData] = useState([]);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         try {
//             axios.post("http://localhost:8000/register",
//                 {
//                     email:email,
//                 password:password
//                 }
//             );
//             alert("Posted")
//         } catch (error) {
//             console.log(error)
//         }

//         setEmail('');
//         setPassword('');
//     };
//   return (
//    <>
//         <Form onSubmit={handleSubmit} className='form-comp'>
//                     <Form.Group controlId="formBasicEmail">
//                         <Form.Label>Email address</Form.Label>
//                         <Form.Control
//                             type="email"
//                             value={email}
//                             className='input-comp'
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </Form.Group>

//                     <Form.Group controlId="formBasicPassword">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control
//                             type="password"
//                             value={password}
//                             className='input-comp'
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </Form.Group>

//                     <Button variant="primary" type="submit">
//                         Login
//                     </Button>
//                 </Form>
//    </>
//   )
// }

// export default Register