import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function SignIn() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const { email, password } = formData;

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

			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password,
			);

			if (userCredential.user) {
				toast.success('Signed In Successfully');
				navigate('/Home');
			}
		} catch (error) {
			toast.error('Invalid Email or Password');
		}
	};
	return (
		<div className='container-fluid mt-5'>
			<div className='container-md'>
				<div className='form-control shadow-lg user-login'>
					<form onSubmit={onSubmit}>
						<div className='mb-3'>
							<label htmlFor='email' className='form-label'></label>
							<input
								type='text'
								className='form-control'
								id='email'
								placeholder='Email'
								onChange={onChange}
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='password' className='form-label'></label>
							<input
								type='password'
								value={password}
								className='form-control'
								id='password'
								placeholder='Password'
								onChange={onChange}
							/>
						</div>
						<div className='mb-3 login-btn'>
							<button type='submit' className='btn btn-primary'>
								Login
							</button>
							<Link to='/sign-up' className='btn btn-success'>
								Sign Up
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
