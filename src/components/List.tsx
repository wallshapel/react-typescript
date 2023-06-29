import { useState, useEffect } from 'react';

interface itemsProps {
	items: string[];
}

const List = ({ items }: itemsProps) => {

	const [t, setT ] = useState<number>(0);

	const li: any = items.map((item: string, i: number) => {
		return <li key={ i } onClick={ () => deleteItem(i) }>{ item }</li>
	});

	const deleteItem = (i: number) => {
		items.splice(i, 1);
		setT(items.length);
	};

	useEffect(() => {
		setT(items.length);		
	}, [items]);

	useEffect(() => {			
	}, [t]);

	return <ul>{ li }</ul>
};

export default List;