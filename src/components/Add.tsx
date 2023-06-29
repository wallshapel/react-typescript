import { useState, useRef } from 'react';
import List from './List';

const Add = () => {

	const [list, setList] = useState<string[]>([]);
	const [item, setItem] = useState('');
	const inputText = useRef<HTMLInputElement>(null);

	const prepareItem = (value: string) => {
		setItem(value);			
	};

	const addItem = () => {
		setList([...list, item]);
		if (inputText.current !== null) {
			inputText.current.value = '';
			setItem('');
			inputText.current.focus();
		}
	};

	return (
		<div>
			<label htmlFor='input'>Item: <input id='input' type='text' onChange={ e => prepareItem(e.target.value) } ref={ inputText } placeholder='Element' autoFocus /></label>
			<button onClick={ addItem }>Add Item</button>
			<List items={ list } />
		</div>
	);
};


export default Add;