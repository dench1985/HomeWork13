let api = 'https://jsonplaceholder.typicode.com';

let dis5 = document.querySelector('input')
let dis6 = document.querySelector(".all")

let albumsData = [];

fetch(api + "/albums")
    .then((r) => r.json())
    .then((d) => {
        albumsData = d;
    });

dis5.addEventListener("input", async () => {
    const c = albumsData.filter((v) => v.title.includes(dis5.value));
        if(c.length==0){
        dis6.innerText=('Такого пользователя не существует');
    }
    else{
        dis6.innerText = JSON.stringify(c, null, 2)
    }
});

//-------------------------------------------
let dis7 = document.querySelector('input')
let dis8 = document.querySelector(".all")

let postsData = [];

fetch(api + "/posts")
    .then((r) => r.json())
    .then((d) => {
        postsData = d;
    });

dis5.addEventListener("input", async () => {
    const c = postsData.filter((v) => v.title.includes(dis7.value));
        if(c.length==0){
        dis8.innerText=('Такого пользователя не существует');
    }
    else{
        dis8.innerText = JSON.stringify(c, null, 2)
    }
});
//-----------------------------------
let dis9 = document.querySelector('input')
let dis10 = document.querySelector(".all")

let todosData = [];

fetch(api + "/todos")
    .then((r) => r.json())
    .then((d) => {
        todosData = d;
    });

dis5.addEventListener("input", async () => {
    const c = todosData.filter((v) => v.title.includes(dis9.value));
        if(c.length==0){
        dis8.innerText=('Такого пользователя не существует');
    }
    else{
        dis10.innerText = JSON.stringify(c, null, 2)
    }
});
































