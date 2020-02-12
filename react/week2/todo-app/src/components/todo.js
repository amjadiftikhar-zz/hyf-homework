import React from "react";

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

export default Todo;
