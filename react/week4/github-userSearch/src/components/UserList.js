import React from "react";
import User from "./User";

function UserList({ users }) {
	console.log("users data in userlist", users);
	return (
		<div>
			<ul>
				{users.length > 0 ? (
					users.map(user => {
						return <User key={user.id} user={user} />;
					})
				) : (
					<p>no user</p>
				)}
			</ul>
		</div>
	);
}

export default UserList;
