
const fabricantesSelect = document.querySelector("#fabricantes");
 const form = document.querySelector("form");

 form.addEventListener("submit", async (event) => {
  event.preventDefault();
  
 const formData = new FormData(form);
 const options = { method: "post", body: formData };  
  
  const response = await fetch("https://api-pw-21.herokuapp.com/produtos",options);
 
  if (response.ok) {
   const result = await response.json();
   console.log(result);
    alert(" Veiculo cadastrado com sucesso.");
   } else {
  console.warn("Falha ao consultar API");
  }
});

 async  function getFabricantes() {
 const response = await fetch("https://api-pw-21.herokuapp.com/fabricantes");
  const fabricantes = await response.json();
  
  fabricantes.forEach((fabricantes) => {
  fabricantesSelect.innerHTML += `<option value="${fabricantes.id}">${fabricantes.nome}</option>`;
  });
  }

    getFabricantes();


