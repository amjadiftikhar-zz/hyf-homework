import React, { useState } from "react";

function AddForm({ addNewTodo}) {
	const [state, setState] = useState("");

	const handleTodo = event => {
		event.preventDefault();
		if (!state) return;
		addNewTodo(state);
		setState("");
	};

	return (
		<form id="todoForm" onSubmit={handleTodo}>
			<input
				type="text"
				placeholder="add todo here!"
				value={state}
				onChange={e => setState(e.target.value)}
			/>
			<button onClick={handleTodo}>add todo</button>
		</form>
	);
}

export default AddForm;
