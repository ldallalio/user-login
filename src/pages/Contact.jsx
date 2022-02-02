import React from 'react';

function Contact() {
	const handleSubmit = (e) => {
		e.preventDeafult();
	};
	return (
		<div className='container-fluid mt-5 user-login'>
			<div className='container-md '>
				<form className='' onSubmit={handleSubmit}>
					<label className='mb-2' htmlFor='email'>
						Email Address
					</label>
					<input
						className='form-control mb-2'
						id='email'
						type='email'
						name='email'
					/>

					<label className='mb-2' htmlFor='message'>
						Message
					</label>
					<textarea className='form-control mb-4' id='message' name='message' />

					<button
						type='submit'
						className='form-control btn btn-primary btn-block mb-8'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
