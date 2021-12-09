 
 const section = document.querySelector("main section");

 const fetchData = async() => {
  const result= await fetch("https://api-pw-21.herokuapp.com/produtos");
  const produto = await result.json();
  produto.forEach((produto) => {
  section.innerHTML += `<div class="card">,
  
  <a href="produto.html?id=${produto.id}">
  <h2>${produto.nome}</h2>
  <img src="${produto.imagem}" width="200px"/>
  <p></p>
  </a>
  </div>`;
 

});
}

fetchData();


















