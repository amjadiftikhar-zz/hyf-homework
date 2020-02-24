import React, { useState } from "react";
import UserDetails from "./UserDetails";

function User({ user }) {
	const [userState, setUserState] = useState(false);
	const showDetails = e => {
		e.preventDefault();
		setUserState(!userState);
	};

	return (
		<div className="githubUsers">
			<a href={user.url} onClick={e => showDetails(e)}>
				<img src={user.avatar_url} alt="" width="50" height="50" />
				<span>{user.login}</span>
			</a>
			{userState && <UserDetails user={user} />}
		</div>
	);
}

export default User;
