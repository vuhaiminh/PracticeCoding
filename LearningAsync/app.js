//async code

// const async = () => {
//     console.log("other func")
// }

// console.log("1")

// setTimeout(()=>{
//     console.log("timeout")
// }, 3000);


// console.log("2")

//CallBack
console.log("start")

const login = (email, pass, callback) => {
    setTimeout(() => {
        callback({userEmail:email})
    }, 2000)
}
const user = login("test@email", 1234, (user) => {console.log(user)});
console.log("finish")
