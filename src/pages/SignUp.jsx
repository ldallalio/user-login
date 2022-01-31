import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.config';

function SignUp() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});
	const { name, email, password } = formData;

	const navigate = useNavigate();

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			const auth = getAuth();

			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password,
			);
			const user = userCredential.user;
			updateProfile(auth.currentUser, {
				displayName: name,
			});
			const formDataCopy = { ...formData };
			delete formDataCopy.password;
			formData.timestamp = serverTimestamp();

			await setDoc(doc(db, 'users', user.uid), formDataCopy);
			toast.success('Account Created Successfully');

			navigate('/Home');
		} catch (error) {
			toast.error('Something went wrong with registration');
		}
	};

	return (
		<div className='container-fluid mt-5'>
			<div className='container-md'>
				<div className='form-control shadow-lg user-login'>
					<form onSubmit={onSubmit}>
						<h2>User Registration</h2>
						<div className='mb-3'>
							<label htmlFor='name' className='form-label'></label>
							<input
								type='text'
								className='form-control'
								id='name'
								placeholder='Name'
								value={name}
								onChange={onChange}
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='email' className='form-label'></label>
							<input
								type='text'
								className='form-control'
								id='email'
								value={email}
								placeholder='Email'
								onChange={onChange}
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='password' className='form-label'></label>
							<input
								className='form-control'
								type='password'
								placeholder='Password'
								id='password'
								onChange={onChange}
							/>
						</div>
						<div className='mb-3 login-btn'>
							<button type='submit' className='btn btn-primary'>
								Sign Up
							</button>
							<Link to='/' className='btn btn-secondary '>
								Back
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignUp;

//Retrieve the data from the database
// const getUsers = async () => {
// 	const usersCol = collection(db, 'users');
// 	const userSnapshot = await getDocs(usersCol);
// 	const userList = userSnapshot.docs.map((doc) => doc.data());
// 	return userList;
// };
