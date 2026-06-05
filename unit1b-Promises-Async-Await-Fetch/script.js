const axios=require("axios");
const readlineSync=require("readline-sync");

const githubUsername=readlineSync.question("Enter a Github User Name ")

function hitApi(username) {
    return axios.get(`https://api.github.com/users/${username}`);
}
hitApi(githubUsername)
.then((response)=>{
    const user=response.data;
    console.log("Full Name:",user.name);
    console.log("User Name:", user.login);
    console.log("Number of Followers:",user.followers);

})
.catch((error)=>{
    console.log("error 404 Not Found:",error.message);
})