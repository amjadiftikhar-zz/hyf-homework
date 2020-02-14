import React, { useState, useEffect } from "react";
import Todo from "./todo";
import Timer from "./addTimer";
import AddForm from "./addForm";

function AddTodo() {
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		const getData = async () => {
			const todoArray = await fetch(
				"https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
			).then(response => response.json());
			setTodos(todoArray);
			// console.log("This is from todoArray", todoArray);
		};
		getData();
	}, []);

	const addNewTodo = description => {
		const newTodos = [...todos, { ...description, isCompleted: false }];
		setTodos(newTodos);
		console.log("This is from newTodos", newTodos);
	};

	const updateTodo = (id, newDescription, newDeadline) => {
		const updatedTodos = todos.map(todo => {
			if (todo.id === id) {
				return {
					...todo,
					description: newDescription,
					deadline: newDeadline
				};
			} else {
				return todo;
			}
		});
		setTodos(updatedTodos);
		console.log("updated Todos", updatedTodos);
	};

	const removeTodo = id => {
		console.log(id);
		const newFilteredTodos = [...todos];
		newFilteredTodos.splice(id, 1);
		setTodos(newFilteredTodos);
	};

	const handleCheckBox = id => {
		const newTodos = [...todos];
		newTodos[id].isCompleted = !newTodos[id].isCompleted;
		setTodos(newTodos);
	};

	return (
		<div>
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
							updateTodo={updateTodo}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default AddTodo;
