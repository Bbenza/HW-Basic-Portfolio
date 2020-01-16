const inputValue = document.querySelector("#search");
const btn = document.querySelector(".btn");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");
const followersContainer = document.querySelector(".main__profile-followers");
const followingContainer  = document.querySelector(".main__profile-following");
const bioContainer = document.querySelector(".main__profile-bio");
const locationContainer = document.querySelector(".main__profile-location");
const starredContainer = document.querySelector(".main__profile-starred_url");
const profile = document.querySelector("#profile");


const client_id = " Iv1.74a870a6faecd2f7 ";
const client_secret = "1876ea61191fdd00e6f86fe23723a5c0f6037253";

const fetchUsers = async user => {
  const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&
    client_secret=${client_secret}`);

  const data = await api_call.json();
  return { data };
};

const showData = () => {
  fetchUsers(inputValue.value).then(res => {

    nameContainer.innerHTML = `Name: <span class="main__profile-value">${res.data.name
  }</span>`;

    unContainer.innerHTML =   `Username: <span class="main__profile-value">${res.data.login}</span>`;

    reposContainer.innerHTML =`Public Repositories: <span class="main__profile-value">${res.data.public_repos}</span>`;

    urlContainer.innerHTML =  `URL: <span class="main__profile-value">${res.data.html_url}</span>`;
    followersContainer.innerHTML =  `Followers: <span class="main__profile-value">${res.data.followers}</span>`;
    followingContainer.innerHTML  =  `Following: <span class="main__profile-value">${res.data.following}</span>`;
    bioContainer.innerHTML =  `Bio: <span class="main__profile-value">${res.data.bio}</span>`;
    locationContainer.innerHTML =  `Location: <span class="main__profile-value">${res.data.location}</span>`;
    starredContainer.innerHTML = `star: <span class="profile-value">${res.data.starred_url}</span>`;
    profile.innerHTML = ` <img id="thumbnail avatar" src="avatar_url">${res.data.avatar_url}`;
    });
};

btn.addEventListener("click", () => {
  showData();
});
