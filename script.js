// 1 уровень сложности: 1.    Сделать авторизацию по username и email, 
// используя следующий url: https://jsonplaceholder.typicode.com/users. 
// Для авторизации передавать query параметры username и email. 
// Ответ обрабатывать с помощью async await. 
// Если приходит пустой массив значит такого пользователя нет – показываем “Такого пользователя не существует.” 
// 1.1 ** Сделать динамическую валидацию, то есть валидация показывается сразу при начале печати и подсказывает, 
// что поле заполнено верно, если поле заполнено верно.

// После успешного входа отображать данные о пользователе в карточке,
//  а именно: id, name, username, email, phone, website. 
//  При этом давать пользователю редактировать поле website.

// *** После успешной авторизации так же должна появиться кнопка “Search”, 
// при клике на которую вы переходите на след. страницу. 
// На этой странице еще три кнопки “Albums”, “Todos”, “Posts”. 
// При клике на каждую вы переходите на страницу поиска с панелью поиска в виде инпута. 
// При вводе каких-либо символов должны отображаться результаты поиска. 
// Например если вы на странице Todos, поиск должен быть по значению title, 
// если на странице Albums, то поиск происходит тоже по значению title 
// и на поиске Posts тоже по полю title.

//--------------------------------------------------------------------------------
//  РЕШЕНИЕ


let api = 'https://jsonplaceholder.typicode.com';

function tobi() {

    let dis = document.querySelector('#text')
    let dis2 = document.querySelector('#text2')
    let dis3 = document.querySelector('p')

    let dis4 = document.querySelector('a')




    let params = `?username=${dis.value}&email=${dis2.value} `

    fetch(`${api}/users${params}`)
        .then((response) => response.json())        
        .then((teg) => {
            if(!teg.length){
                            dis3.innerText=('Такого пользователя не существует')
                        }
                        else{            
                           dis3.innerText = JSON.stringify(teg)
                           dis4.style.display='block'

                        }
        })
        

  }

  fetch (`${api}/albums`)
   .then((a) =>a.json())
   .then ((b) => {
          b.filter((value) =>  value.title.includes('nisi')) 
    
   } )
  
   fetch (`${api}/posts`)
   .then((a) =>a.json())
   .then ((b) => {
          b.filter((value) =>  value.title.includes('nisi')) 
    
   } )
  
   fetch (`${api}/todos`)
   .then((a) =>a.json())
   .then ((b) => {
          b.filter((value) =>  value.title.includes('nisi')) 
    
   } )
  





















