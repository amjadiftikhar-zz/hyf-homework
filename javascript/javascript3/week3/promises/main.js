/*Lets use the github api to see what repositories different users have. You can use this url to get repositories for a specific github username, in this case the username benna100: https://api.github.com/search/repositories?q=user:benna100. Select 3 classmates github username that you want to show repositories for.

Fetch all the 3 classmates repositories at the same time using Promise.all. Remember the all at once exercise here?

When you have the data for the different repositories, render the fullname of the repo, url of the repo, and the owner of the repo. See github-repos as an example of how the renderered repos should look. You are more than welcome to style it a bit nicer! */

const classmate1 = fetch(
	"https://api.github.com/search/repositories?q=user:hosseinTa"
).then(response => response.json());
const classmate2 = fetch(
	"https://api.github.com/search/repositories?q=user:benna100"
).then(response => response.json());
const classmate3 = fetch(
	"https://api.github.com/search/repositories?q=user:fawadik"
).then(response => response.json());

function promiseAll() {
	Promise.all([classmate1, classmate2, classmate3])
		.then(userData => {
			console.log(userData);
			const ul = document.createElement("ul");
			document.body.appendChild(ul);
			userData.forEach(element => {
				const repoList = document.createElement("li");
				document.body.appendChild(repoList);
                const userName = element.items[0].owner.login;
                repoList.textContent = `${userName}'s repositories`;
				const newUl = document.createElement("newUl");
				repoList.appendChild(newUl);
				element.items.forEach(repoUrl => {
					const newRepoLi = document.createElement("li");
					newUl.appendChild(newRepoLi);
                    newRepoLi.textContent = `${repoUrl.url}`;
                    // const fullName = repoUrl.full_name;
                    // repoList.textContent = `${repoUrl.full_name}`
				});
			});
		})
		.catch(error => console.log(error));
}
promiseAll();
