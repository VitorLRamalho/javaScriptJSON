const clientes = require("./clientes.json");

function filtraAptSemComplemento(cliente) {
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"));
    });
}

const filtrados = filtraAptSemComplemento(clientes);
console.log(filtrados);