// comentario una linea
const userList = document.querySelector('#tabla')

window.addEventListener('DOMContentLoaded',async() => {
   const data = await loadUsers()
    renderUsers(data.data)
    
})

 async function loadUsers() {
    const response = await fetch('https://fakerapi.it/api/v1/persons?_quantity=1')
    //return response.json()
    return await response.json()
    }

  //info a mostrar aleatoria
const createUserItems = users => users.map (user =>
`<tr><td>NOMBRE:</td><td> ${user.firstname} ${user.lastname}</td></tr>
<td>Telefono:</td><td> ${user.phone}</td></tr>
<td>E-mail:</td><td> ${user.email}</td></tr>
<td>Fecha de nacimiento:</td><td> ${user.birthday}</td></tr>
<td>Direccion:</td><td> ${user.address.street}</td></tr>
<td>Localidad:</td><td> ${user.address.city}</td></tr>
<td>Pais:</td><td> ${user.address.country}</td></tr>
`).join(' ')

function renderUsers(users){
  const itemsString = createUserItems(users)
  userList.innerHTML = itemsString
}

/**
 * 
 * multiple linea comentario
 * 
 * 
 */