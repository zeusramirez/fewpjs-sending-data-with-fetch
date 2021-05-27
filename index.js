// Add your code here




function submitData(name, email){
return fetch('http://localhost:3000/users',{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
        //user data
        name: `${name}`,
        email: `${email}`
    })
}).then(response => response.json())
.then(data => appendId(data))
.catch(function(error) {
    alert("Error - Something went wrong.")
    appendError(error)
})
}

function appendId(data){
    let pElem = document.createElement('p')
    pElem.textContent = data.id
    document.querySelector('body').append(pElem)
}
function appendError(error){
    let pError = document.createElement('p')
    pError.textContent = error.message
    document.querySelector('body').append(pError)

}