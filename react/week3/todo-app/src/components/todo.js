import React, { useState } from "react";

function Todo({ element, id, removeTodo, handleCheckBox, updateTodo }) {
	
	const [isEdited, setIsEdited] = useState(false);

	const [newState, setNewState] = useState({
		newDescription: element.description,
		newDeadline: element.deadline
	});
	console.log("hello render");
	return (
		<div
			className="todo"
			style={{ textDecoration: element.isCompleted ? "line-through" : "" }}
		>
			<div className="listItems">
				<p>
					{isEdited ? (
						<>
							<input
								type="text"
								onChange={e =>
									setNewState({ ...newState, newDescription: e.target.value })
								}
								value={newState.newDescription}
							/>
							<input
								type="datetime-local"
								onChange={e =>
									setNewState({ ...newState, newDeadline: e.target.value })
								}
								value={newState.newDeadline}
							/>
						</>
					) : (
						<>
							{element.description} | {element.deadline}
						</>
					)}
					<input
						type="checkbox"
						checked={element.isCompleted && "checked"}
						onChange={() => handleCheckBox(id)}
					/>
					{isEdited ? (
						<button
							onClick={() => {
								setIsEdited(false);
								updateTodo(
									element.id,
									newState.newDescription,
									newState.newDeadline
								);
							}}
						>
							update
						</button>
					) : (
						<button onClick={() => setIsEdited(true)}>edit</button>
					)}

					<button id="remove" onClick={() => removeTodo(id)}>
						x
					</button>
				</p>
			</div>
		</div>
	);
}

function areEqual(prevProps, nextProps) {
	return (
		prevProps.element === nextProps.element &&
		prevProps.isCompleted === nextProps.isCompleted
	);
}

export default React.memo(Todo, areEqual);


