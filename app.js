const btnAdd = document.getElementById("btnCargar");
  btnAdd.addEventListener("click",()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(json => {
   let info = "";
   for (let i=0;i<json.length;i++){
     info += `<option value = '${json[i].id}'> ${json[i].name} </option>`
   }
   const datos = document.getElementById("users")
   datos.innerHTML=info;
  });
});



const btnComentarios = document.getElementById("btnComentarios");
  btnComentarios.addEventListener("click",()=> {
    const divcomentario = document.getElementById("comentarios")
    fetch('https://jsonplaceholder.typicode.com/comments/')
    .then((response) => response.json())
    .then((json)=> {
      let comentario =``;
      for (let i=0; i<json.length;i++){
        comentario += `<div> <hr>
          <h2> ${json[i].name} </h2> 
          <h2> ${json[i].id} </h2>
          <p> ${json[i].body} </p>
        </div>`
     } 
      divcomentario.innerHTML = comentario;
  });
});





const menuUser = document.getElementById("users");
  menuUser.addEventListener("change",()=>{
  const divdatos = document.getElementById("posts") 
  let id = document.getElementById("users").value
  fetch('https://jsonplaceholder.typicode.com/posts?userId='+ id)
  .then((response) => response.json())
  .then((json) => {
    let datos = '';
    for (let i=0;i<json.length;i++){
      datos += `<div>
        <h3>${json[i].title}</h3> 
        <p>${json[i].body}</p>
      </div>`
    }
    divdatos.innerHTML = datos;
  });
});
