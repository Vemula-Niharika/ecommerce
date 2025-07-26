import login from "./login.js";
import Register from "./Register.js";

const root=document.getElementById('root');
console.log(root);
const allAnchors=document.querySelectorAll('a')

const router={
    "/login":login,
    "/Register":Register
}
function handelClick(e)
{
    e.preventDefault()
    let path=e.target.pathname
    history.pushState(null,"",'${path}')
    // if(path=="/login")
    // {
    //     root.innerHTML=login()
    // }
    // else if(path=="/Register")
    // {
    //     root.innerHTML=Register()
    // }

    root.innerHTML=router[path]()
}
allAnchors.forEach((anchor)=>
{
    anchor.addEventListener("click",handelClick)
})

// window.addEventListener('popstate',(e)=>{
//     // console.log(location);
//     let path=location.pathname
//     if(path=="/index.html")
//     {
//         root.innerHTML=""
//     }
//     else{
//         root.innerHTML=router[path]()
//         }
    
// })