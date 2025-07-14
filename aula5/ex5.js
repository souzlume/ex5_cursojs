function exerc () {
    const form = document.getElementsByClassName("form");
    const resultado = document.getElementsByClassName("resultado");
    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.getElementsByClassName("nome");
        const sobrenome = form.getElementsByClassName("sobrenome");
        const peso = form.getElementsByClassName("peso");
        const altura = form.getElementsByClassName("altura");

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        form.addEventListener('submit', recebeEventoForm);
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    };
}
exerc();
