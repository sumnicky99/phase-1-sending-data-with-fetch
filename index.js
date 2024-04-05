// Add your code here
function submitData(name, email) {
    const userObj = {
        name: name,
        email: email,
    }

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userObj)
    })
    .then(res => res.json())
    .then(object => document.body.append(object.id))
    .catch(function (message) {
        document.body.append(message)
    })
}
