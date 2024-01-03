// Diretório da pasta de imagens
const pastaImagens = '/imagens';

// Obtém a referência do elemento "gallery" no HTML
const galleryElement = document.getElementById('gallery');

// Função para percorrer a pasta de imagens e gerar o código HTML
function exibirImagens() {
    // Obtém a lista de arquivos na pasta de imagens
    fetch(pastaImagens)
        .then(response => response.text())
        .then(data => {
            // Quebra o resultado em linhas
            const linhas = data.split('\n');

            // Gera o código HTML para cada imagem
            const imagensHTML = linhas.map(imagem => {
                // Verifica se a linha corresponde a um arquivo de imagem
                if (/\.(jpe?g|png|gif)$/i.test(imagem)) {
                    return `<img src="${pastaImagens}/${imagem}" alt="${imagem}" />`;
                }
            }).join('');

            // Insere o código HTML gerado no elemento "gallery"
            galleryElement.innerHTML = imagensHTML;
        })
        .catch(error => console.error(error));
}

// Chama a função para exibir as imagens
exibirImagens();

