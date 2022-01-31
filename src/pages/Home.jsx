import React from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Home() {
	const auth = getAuth();
	const navigate = useNavigate();
	const onLogout = () => {
		auth.signOut();
		navigate('/');
		toast.success('Logged Out Successfully');
	};
	return (
		<div className='container-fluid mt-5'>
			<div className='container-md '>
				<div className='hero  shadow-lg user-login' id='homeDiv'>
					<h2 className='text-center text-nowrap mb-5'>
						Welcome to the Home Page
					</h2>
					<button onClick={onLogout} className='btn btn-warning btn-sm  '>
						Sign Out
					</button>
				</div>
			</div>
		</div>
	);
}

export default Home;
