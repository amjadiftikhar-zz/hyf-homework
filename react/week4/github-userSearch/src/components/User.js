import React, { useState } from "react";
import UserDetails from "./UserDetails";

function User({ user }) {
	const [showUserDetails, setShowUserDetails] = useState(false);
	const showDetails = e => {
		e.preventDefault();
		setShowUserDetails(!showUserDetails);
	};

	return (
		<div className="userList">
			<a href={user.url} onClick={e => showDetails(e)}>
				<img src={user.avatar_url} />
				<span>{user.login}</span>
			</a>
			{showUserDetails && <UserDetails user={user} />}
		</div>
	);
}

export default User;
