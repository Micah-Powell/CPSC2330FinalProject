

const submitbutton = document.querySelector('[type="button"]')
const tablebody = document.querySelector('tbody')

console.log(submitbutton)
console.log(tablebody)

submitbutton.addEventListener("click", addbutton)
tablebody.addEventListener("click", deletebutton)



function deletebutton(e) {
    const target = e.target

    const deletetarget = target.closest('TR')
    console.log (target)
    console.log (target.innerHTML)
    console.log (deletetarget)
    console.log (target.value == 'X')
    if (target.innerHTML === '<button class="Delete">X</button>') {
        document.querySelector('tbody').innerHTML.replace(deletetarget, "")
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