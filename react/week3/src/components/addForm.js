import React, { useState } from "react";

function AddForm({ addNewTodo }) {
	const [state, setState] = useState({
		description: "",
		deadline: ""
	});

	const handleTodo = event => {
		event.preventDefault();
		if (!state) return;
		addNewTodo(state);
		setState("");
	};

	return (
		<form id="todoForm" onSubmit={handleTodo}>
			<input
				name="description"
				type="text"
				placeholder="add todo here!"
				value={state.description}
				onChange={e => setState({ ...state, description: e.target.value })}
			/>

			<input
				name="deadline"
				type="text"
				type="datetime-local"
				value={state.deadline}
				onChange={e => setState({ ...state, deadline: e.target.value })}
			/>
			<button onClick={handleTodo}>add todo</button>
		</form>
	);
}

export default AddForm;
