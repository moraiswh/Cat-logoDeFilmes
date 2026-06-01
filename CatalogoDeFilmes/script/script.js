const filmes = [
    {
titulo: "Homem Aranha",
imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/gte2cJ3mtc2I8hZyXwRTzyclKuC.jpg",
descricao: "No aranhaverso",
    },
{
    titulo:"Batman Vs Superman",
    imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/vh6pjeGH0GQupLepPCZn5PylcRg.jpg",
    descricao:"A Origem da justiça",
},
{
    titulo: "Vingadores",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg",
    descricao: "Ultimato",
},
{
    titulo:"Vingadores",
    imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/A4kvp7vY1BDLrrQIagRCffLKj1t.jpg",
    descricao:"Guerra Infinita",
},
{
    titulo: "Vingadores",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/i29O7K4n3z5qB2SAJmSc0kR5dPj.jpg",
    descricao: "Doutor Destino",
},
{
    titulo: "Deadpool",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/tekExNqal2kcHp8BKiHX5jjxK9J.jpg",
},
]

const listaFilmes = document.getElementById("listaFilmes");
function mostrarFilmes(Lista) {
listaFilmes.innerHTML = ""
Lista.forEach(filme => {
    listaFilmes.innerHTML += `
    <div class="col-md4">
    <div class="card card-filme h-100">
    <img scr="$()
});
}