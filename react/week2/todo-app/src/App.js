import React, { useState, useEffect } from "react";
import "./App.css";

function Timer() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let counter = setTimeout(() => {
			setCount(prev => prev + 1);
		}, 1000);
		return () => clearTimeout(counter);
	}, []);

	return <p>You have used {count} seconds on this website</p>;
}

function Todo({ element, id, removeTodo, handleCheckBox }) {
	return (
		<div
			className="todo"
			style={{ textDecoration: element.isCompleted ? "line-through" : "" }}
		>
			<div className="listItems">
				<p key={id}>
					{element.title}
					<input
						type="checkbox"
						checked={element.isCompleted && "checked"}
						onChange={() => handleCheckBox(id)}
					/>
					<button onClick={() => removeTodo(id)}>x</button>
				</p>
			</div>
		</div>
	);
}
function AddForm({ addNewTodo }) {
	const [state, setState] = useState("");
	const handleNewTodo = event => {
		event.preventDefault();
		if (!state) return;
		addNewTodo(state);
		setState("");
		// console.log(value);
	};
	const handleTodo = event => {
		event.preventDefault();
		if (!state) return;
		addNewTodo(state);
		setState("");
	};
	// const randomTodo = event => {
	// 	const len = todos.length;
	// 	setValue(Math.floor(Math.random() * len));
	// };
	return (
		<form id="todoForm" onSubmit={handleNewTodo}>
			<input
				type="text"
				placeholder="add todo here!"
				value={state}
				onChange={e => setState(e.target.value)}
			/>
			<button onClick={handleTodo}>add todo</button>
			{/* <button onClick={handleTodo}>random todo</button> */}
		</form>
	);
}
//////

function AddTodo() {
	const todoArr = [
		{ id: 1, title: "Get out of bed", isCompleted: false },
		{ id: 2, title: "Brush teeth", isCompleted: false },
		{ id: 3, title: "Eat breakfast", isCompleted: false }
	];

	const [todos, setTodos] = useState(todoArr);
	const addNewTodo = title => {
		const newTodos = [...todos, { title }];
		setTodos(newTodos);
		// console.log(newTodos);
	};

	const removeTodo = id => {
		// console.log("remove", index)
		const newFilteredTodos = [...todos];
		newFilteredTodos.splice(id, 1);
		setTodos(newFilteredTodos);
	};

	const handleCheckBox = id => {
		const newTodos = [...todos];
		newTodos[id].isCompleted = true;
		setTodos(newTodos);
	};

	return (
		<div>
			<h1>Todo Application</h1>
			<Timer />
			<div id="todoDiv">
				<AddForm addNewTodo={addNewTodo} />
				<div className="listItems">
					{todos.map((element, id) => (
						<Todo
							key={id}
							id={id}
							element={element}
							handleCheckBox={handleCheckBox}
							removeTodo={removeTodo}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

function App() {
	return (
		<div className="App">
			<AddTodo />
		</div>
	);
}

export default App;
