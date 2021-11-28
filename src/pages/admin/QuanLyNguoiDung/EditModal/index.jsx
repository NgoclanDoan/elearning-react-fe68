import { Modal } from 'components/Modal';
import React, { useState } from 'react';
import './style.scss';

function EditModal() {
	// State for our modal
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<div>
			<div className='bar'>
				<button onClick={() => setModalOpen(true)}>Show Modal</button>
			</div>

			<Content />

			{modalOpen && (
				<Modal
					title='Try scrolling'
					content="I bet you you can't! Muahahaha 😈"
					onClose={() => setModalOpen(false)}
				/>
			)}
		</div>
	);
}

const Content = () => {
	const terms = [
		'stars',
		'birds',
		'puppy',
		'nature',
		'snow',
		'cafe',
		'hipster',
		'startup',
		'salad',
		'funny',
	];

	const images = terms.map((term) => (
		<img
			src={`https://source.unsplash.com/random/800x200?${term}`}
			alt=''
		/>
	));

	return <div className='images'>{images}</div>;
};
export default EditModal;
