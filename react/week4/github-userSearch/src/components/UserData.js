import React, { useState, useEffect } from "react";
import UserSearch from "./Form";
import UserList from "./UserList";

function UserData() {
	const url = `https://api.github.com/search/users?`;
	const [search, setSearch] = useState("");
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchUser = async () => {
		let searchUrl = `${url}q=${search}`;
		if (search) {
			setLoading(true);
			await fetch(searchUrl)
				.then(data => data.json())
				.then(data => {
					setUsers(data.items);
				});
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchUser();
	}, [search]);

	const handleSearch = input => {
		setSearch(input);
	};
	return (
		<div>
			<UserSearch handleSearch={handleSearch} />
			{loading ? <p>...fetching data</p> : <UserList users={users} />}
		</div>
	);
}

export default UserData;
