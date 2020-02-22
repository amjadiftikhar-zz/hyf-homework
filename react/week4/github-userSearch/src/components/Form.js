import React, { useState } from "react";

function UserSearch({ handleSearch }) {
	const [searchUser, setSearchUser] = useState("");
	handleSearch(searchUser);
	return (
		<div>
			<form>
				<input
					type="text"
					value={searchUser}
					onChange={e => setSearchUser(e.target.value)}
				/>
			</form>
		</div>
	);
}

export default UserSearch;
