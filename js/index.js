function search(e) {
    e.preventDefault();
    const searchValue = document.getElementById('search').value;
    // console.log('searchVal: ', searchValue)
    // console.log('e: ', e)

    // fetch with search term
    fetch(`https://api.github.com/search/users?q=${searchValue}`)
    .then((resp) => resp.json())
    .then((data) => {
        // display results

        list = document.getElementById('user-list')

        data.items.forEach((result) => {
            // console.log('result: ', result)
            const username = document.createElement('li')
            list.appendChild(username)
            username.innerHTML = result.login;
            username.addEventListener('click', getReposByUser)

        })
    })
}

function getReposByUser(user) {
    console.log('user: ', user);
    // const searchValue = document.getElementById('search').value;
    // console.log(this.innerHTML)
    fetch(`https://api.github.com/users/${this.innerHTML}/repos`)
    .then((resp) => resp.json())
    .then((data) => {
        console.log('data: ', data)
        list = document.getElementById('repos-list')

        list.innerHTML = ""

        data.forEach(function (beepBoop) {
            console.log(beepBoop)    
            const userRepoList = document.createElement('li')
            list.appendChild(userRepoList)
            userRepoList.innerHTML = beepBoop["full_name"]
        })


        // data.items.forEach((result) => {
        //     console.log('result: ', result)
            // const username = document.createElement('li')
            // list.appendChild(username)
            // username.innerHTML = result.login;
            // username.addEventListener('click', getReposByUser)
        })

    // })
}

function initialize() {
    const form = document.getElementById('github-form');
    form.addEventListener('submit', search)
}

initialize();