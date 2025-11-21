

const submitbutton = document.querySelector('[type="button"]')

console.log(submitbutton)

submitbutton.addEventListener("click", addbutton)


function addbutton() {
    const name = document.querySelector('[type="text"]').value
    const email = document.querySelector('[type="email"]').value
    if (email === "" || name === ""){
        return
    }
    document.querySelector('[type="text"]').value = ""
    document.querySelector('[type="email"]').value = ""

    document.querySelector("tbody").innerHTML += (`<tr><td>${name}</td><td>${email}</td><td><button class="Delete">X</button></td></tr>`)
    
}