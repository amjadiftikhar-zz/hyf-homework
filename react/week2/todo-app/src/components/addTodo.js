import React, { useState } from "react";
import AddForm from "./addForm";
import Timer from "./addTimer";
import Todo from "./todo";

const todoArr = [
	{ id: 1, title: "Get out of bed", isCompleted: false },
	{ id: 2, title: "Brush teeth", isCompleted: false },
	{ id: 3, title: "Eat breakfast", isCompleted: false }
];
function AddTodo() {
	const [todos, setTodos] = useState(todoArr);
	const addNewTodo = title => {
		const newTodos = [...todos, { title, isCompleted: false }];
		setTodos(newTodos);
		// console.log(newTodos);
	};

	const addRandomTodo = title => {
		const randomTodomTodo = [...todos, { title, isCompleted: false }];
		setTodos(randomTodomTodo);
	};

	const removeTodo = id => {
		// console.log("remove", id)
		const newFilteredTodos = [...todos];
		newFilteredTodos.splice(id, 1);
		setTodos(newFilteredTodos);
	};

	const handleCheckBox = id => {
		const newTodos = [...todos];
		// console.log(todos[id]);
		newTodos[id].isCompleted = !newTodos[id].isCompleted;
		// console.log(todos[id]);
		setTodos(newTodos);
	};

	return (
		<div>
			<h1>Todo Application</h1>
			<Timer />
			<div id="todoDiv">
				<AddForm addNewTodo={addNewTodo} addRandomTodo={addRandomTodo} />
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

export default AddTodo;
