import React, { useState, useEffect } from "react";

function UserDetails({ user }) {
	const [details, setDetails] = useState("");
	const [loading, setLoading] = useState(false);

	const fetchDetails = async login => {
		const url = `https://api.github.com/users/${login}`;
		setLoading(true);
		const urlData = await fetch(url)
			.then(data => data.json())
			.catch(error => console.log(error));
		setDetails(urlData);
		setLoading(false);
	};

	useEffect(() => {
		fetchDetails(user.login);
	}, [user.login]);

	if (loading) return <></>;
	return (
		<div className="userDetails">
			{details ? (
				<>
					<div>{details.name}</div>
					<div>{details.blog}</div>
					<div>{details.bio}</div>
					<div>Location: {details.location}</div>
					<div>Public repos: {details.public_repos}</div>
					<div>Followers: {details.followers}</div>
				</>
			) : (
				<p>no details available</p>
			)}
		</div>
	);
}

export default UserDetails;
