// for (let i=1;  i<=10; i++){
//     if(i%2==0){
//         console.log(i);
//     }
    
// }
// let n=+prompt("vvedite chislo")
// for (let i=1;  i<=n; i++){
    
    
// }
const btr = document.querySelector('.zad')
const box = document.querySelector('.big')

const list = document.createElement('ol')
box.append(list)
btr.addEventListener('click', () =>{
    let text = document.querySelector('.inText').value
    console.log(text)
    let li = document.createElement('li')
    li.innerHTML = "text"
    
    document.querySelector('.inText').value = ''
    list.append(li)
})