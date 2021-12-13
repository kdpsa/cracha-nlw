const socialMediaLinks = {
    github: 'kdpsa',
    instagram: 'kadu_jpeg',
    twitter: 'kadu_jpeg',
    facebook: 'kadujpeg',
    youtube: 'channel/UCo_biloB1aB7Ix21ot7b2AQ'
}

function changeSocialMediaLinks() {

    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`
    }

}

changeSocialMediaLinks()

function getGitHubProfileInfo() {

    const url = `https://api.github.com/users/${socialMediaLinks.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userProfilePhoto.src = data.avatar_url
            userName.textContent = data.name
            userProfileLink.href = data.html_url
            userLogin.textContent = data.login
            userBio.textContent = data.bio
        })

}

getGitHubProfileInfo()
