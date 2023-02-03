// Add your code here
    

function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    }
    let configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData),
        }

    return fetch("http://localhost:3000/users", configurationObject)
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            let h4 = document.createElement('h4')
            h4.innerHTML = data.id
            document.body.append(h4)
            console.log(data)
        })
        .catch(function(error) {
            let h3 = document.createElement('h3')
            h3.innerHTML = error.message
            document.body.append(h3)
            console.log(error.message)
        })
}

