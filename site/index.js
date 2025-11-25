

const submitbutton = document.querySelector('[type="button"]')
const tablebody = document.querySelector('tbody')

console.log(submitbutton)
console.log(tablebody)

submitbutton.addEventListener("click", addbutton)
tablebody.addEventListener("click", deletebutton)



function deletebutton(e) {
    const target = e.target

    const deletetarget = target.closest('TR')

    if (target.innerHTML === 'X') {
        deletetarget.remove()

    }
}

function addbutton() {
    const name = document.querySelector('[type="text"]').value
    const email = document.querySelector('[type="email"]').value
    if (email === "" || name === ""){
        return
    }
    document.querySelector('[type="text"]').value = ""
    document.querySelector('[type="email"]').value = ""

    document.querySelector('tbody').innerHTML += (`<tr><td>${name}</td><td>${email}</td><td><button class="Delete">X</button></td></tr>`)
    
}