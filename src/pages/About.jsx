import React from 'react';

function About() {
	return (
		<div className='container-fluid mt-5'>
			<div className='container-md '>
				<div className='hero  shadow-lg user-login' id='homeDiv'>
					<h2 className='text-center text-nowrap mb-5'>About - UserLoginApp</h2>
					<p>
						This app is created with ReactJs and Bootstrap to enable users to
						sign-up and sign in using Firebase.
					</p>
					<a
						href='https://dallalioweb.dev'
						className='link link-success text-sm-center'>
						Developed by: Logan || Dallalio Web Development
					</a>
				</div>
			</div>
		</div>
	);
}

export default About;
