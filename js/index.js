const submitButton = document.querySelector("#github-form");
const searchEndURL = "http://api.github.com/search/users?q=";
const reposURL = "http://api.github.com/users/";

submitButton.addEventListener("submit", userSearch);

function userSearch(e) {
    e.preventDefault();
    const searchInput = e.target[0].value
    getUsers(searchInput);
}

function getUsers(searchname){
    fetch(`${searchEndURL}${searchname}`,{
        headers: {
            Accept: "application/vnd.github.v3+json"
        }
    })
    .then(resp => resp.json())
    .then(searches => searchResults(searches))
}

function searchResults(searches){
    searches.items.forEach(search => {
        const username = search.login;
        const avatar = search.avatar_url;
        const link = search.html_url;
        displaySearch(username, avatar, link);
    })
}

function displaySearch(username, avatar, link){
    const userList = document.querySelector("#user-list");

    const name = document.createElement("h3");
    const image = document.createElement("img");
    const profileLink = document.createElement("a")

    image.src = avatar;
    profileLink.href = link;
    profileLink.innerText = username;
    name.appendChild(profileLink);
    userList.append(name, image);
}

function getRepo(user){
    fetch(`${resposURL}${user}/repos`, {
        headers: {
            Accept: "application/vnd.github.v3+json"
        }
    }
    .then(resp => resp.json())
    .then(json => showRepos)
    )
}

function showRepos(user){
    user.forEach(info => {
        const repoURL = info.repos_url;
    })
}



function showUsers(){

}