import React from 'react';

function Home() {
	return (
		<div className='container-fluid mt-5'>
			<div className='container-md'>
				<div className='form-control shadow-lg user-login'>
					<div className='mb-3'>
						<label htmlFor='username' className='form-label'></label>
						<input
							type='text'
							className='form-control'
							name='username'
							id='username'
							aria-describedby='helpId'
							placeholder='Username'
						/>
					</div>
					<div className='mb-3'>
						<label htmlFor='password' className='form-label'></label>
						<input
							type='password'
							className='form-control'
							name='password'
							id='
							password'
							placeholder='Password'
						/>
					</div>
					<div className='mb-3 login-btn'>
						<button type='button' className='btn btn-primary'>
							Login
						</button>
						<button type='button' className='btn btn-success'>
							SignUp
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
