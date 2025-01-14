import { useState } from 'react';


export default function Counter({
	children,
	count: initialCount,
}: {
	children: JSX.Element;
	count: number;
}) {
	const [count, setCount] = useState(initialCount);
	const add = () => setCount((i) => i + 1);
	const subtract = () => setCount((i) => i - 1);

	return (
		<>
			<article>
			<header>{children}</header>
				<button onClick={subtract}>-</button>
				<h1>{count}</h1>
				<button onClick={add}>+</button>
		

			</article>
		</>
	);
}


