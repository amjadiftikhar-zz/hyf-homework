import React, { useState } from "react";

function AddForm({ addTodo }) {
	const [value, setValue] = useState("");
	const handleNewTodo = event => {
		event.preventDefault();
		if (!value) alert("please enter todo first");
		addTodo(value);
		setValue("");
		// console.log(value);
	};
	const handleTodo = event => {
		event.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue("");
	};

	return (
		<form id="todoForm" onSubmit={handleNewTodo}>
			<input
				type="text"
				placeholder="add your todo"
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<button onClick={handleTodo}>add todo</button>
		</form>
	);
}
//////

function AddTodo() {
	const todoArr = [		
		{ id: 1, description: "Get out of bed, ", deadline: "Wed Sep 13 2017" },
		{ id: 2, description: "Brush teeth, ", deadline: "Thu Sep 14 2017" },
		{ id: 3, description: "Eat breakfast, ", deadline: "Fri Sep 15 2017" }
	];

	const [todos, setTodos] = useState(todoArr);

	const addTodo = description => {
		const newTodos = [...todos, { description }];
		setTodos(newTodos);
		console.log(newTodos);
	};

	const removeTodo = (index) => {
		const newFilteredTodos = [...todos]
		newFilteredTodos.splice(index, 1)
		setTodos(newFilteredTodos)
	}

	return (
		<div id="todoDiv">
			<AddForm addTodo={addTodo} />
			<div className="listItems">
				{todos.map((element, index) => (
					<div className="listItems">
						<p key={index}>
							{element.description}
							{element.deadline}
							<button
								type="button"
								className="deleteBtn"
								onClick={() => removeTodo(index)}
							>
								X
							</button>
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default AddTodo;
