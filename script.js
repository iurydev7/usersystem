const form = document.querySelector("#formCadastro");

// Escuta o evento do formulário
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(Object.fromEntries(
        [...form.elements]
            .filter(element => element.id)
            .map(element => [element.id, element.value])
    ));
    form.reset();
});