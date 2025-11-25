const submitbutton = document.querySelector('[type="button"]')
const tablebody = document.querySelector('tbody')


submitbutton.addEventListener("click", addbutton)
tablebody.addEventListener("click", deletebutton)



function deletebutton(e) {
    const target = e.target

    const deletetarget = target.closest('TR')

    if (target.innerHTML === 'X') {
        deletetarget.remove()
        updatelist()
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
    updatelist()
}

function updatelist() {
    const results = []
    for (let i = 0; i < tablebody.childNodes.length; i++) {
        let row = tablebody.rows[i]
        results.push(
            {name: row.cells[0].textContent, email: row.cells[1].textContent}
        )
        
    }
    fetch("/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(results)
        }
    )
    .then(response => response.json())
    .then(result => {
    console.log("Server responded:", result);
    })

}