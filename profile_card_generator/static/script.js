const form = document.getElementById('profileForm');

const profileName = document.getElementById('profileName');
const profileBio = document.getElementById('profileBio');
const profileImage = document.getElementById('profileImage');

form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const name = document.getElementById('name').value;
    const bio = document.getElementById('bio').value;
    const image = document.getElementById('image').value;

    try {

        const response = await fetch('/generate-profile', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                name,
                bio,
                image
            })
        });

        const data = await response.json();

        if (data.success) {

            profileName.textContent = data.profile.name;
            profileBio.textContent = data.profile.bio;
            profileImage.src = data.profile.image;

        } else {
            alert(data.message);
        }

    } catch (error) {

        console.log(error);
        alert('Something went wrong');

    }

});