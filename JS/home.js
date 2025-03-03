// function isUserAuthenticated(){

// }


function isUserAuthenticated() {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhZGl0eWFrdW1hd2F0MTExQGdtYWlsLmNvbSIsImlhdCI6MTc0MDM3NDYxNSwiZXhwIjoxNzQwNDYxMDE1fQ.nSDr9ZRIp1z1-a1W0OBXdNPB6NMFUVjNWbZGZvR4uz4");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    fetch("https://admin-dev-backend.edvice.in/ping", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            if (result.success) {
                let body = document.getElementsByTagName("body")
                body[0].children[0].remove()
            } else {
                window.location.href = '/HTML/signUp.html'
                console.log(result.error.explanation)
            }
        })
        .catch((error) => console.error(error));
}

window.onload = isUserAuthenticated