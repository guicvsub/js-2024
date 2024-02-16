const main = () => {
    let qtdFinal = qtdCaptura();
    let valorFinal = calculaValor(qtdFinal);

    console.log(`O valor total da compra é: R$${valorFinal.toFixed(2)}`);
}

const qtdCaptura = () => {
    const qtd = prompt("Digite a quantidade de livros");
    return parseInt(qtd);
}

const calculaValor = (qtd) => {
    let valor = 22;
    if (qtd >= 7) {
        valor = 15;
    }
    return valor * qtd;
}


main();

