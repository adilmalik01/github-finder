let username = document.querySelector("#userInupt")
let userButton = document.querySelector("#userBtn")
let resultDiv = document.querySelector(".result")


userButton.addEventListener("click", async () => {

    let response = await axios.get(`https://api.github.com/users/${username.value}`)
    console.log(response.data);

    let htmlTemplate = `
       <div class="card">
            <img src=${response.data.avatar_url} alt="">
            <div class="names">
                <p>${response.data.name}</p>
                <p>${response.data.login}</p>
            </div>
            <footer>
                <h3>${response.data.followers}</h3>
                <h3>${response.data.following}</h3>
                <h3>${response.data.public_repos}</h3>
            </footer>
        </div>   
    
    `
    resultDiv.innerHTML = htmlTemplate


})



