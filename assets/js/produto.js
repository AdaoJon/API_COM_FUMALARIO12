 const section = document.querySelector("main section");

const url = new URL(document.URL);
const id = url.searchParams.get("id");

 const fetchData = async() => {
  const result= await fetch(`http://localhost/produtos/${id}`);
  const produto = await result.json();
  produto.forEach((produto) => {
  section.innerHTML += `<div class="card">
  
  <h2>${produto.nome}</h2>
  <img src="${produto.imagem}" width="900px"/>
  <p>${produto.descricao}</p>
    </div>`;
});
}

fetchData();

















