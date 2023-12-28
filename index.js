// // const os = require('os')
// // let res=os.platform()
// // console.log(res )

// // const my_math = require('./my_math')
// // let res1=my_math.add(4,8);
// // console.log(res1);
// const fs = require('fs')
// // let result= fs.readFile('some.txt', 'utf-8', (error, data)=>fs.writeFile('some.txt', data+ "\nиди нахуй черт",(err, data)=>{
// //     console.log('посрал!')
// // }))
// // console.log(result)
// // fs.mkdirSync('text-files')
// // fs.mkdir('text-files',()=>{
// //     fs.writeFile('./text-files/some.txt', 'Hello', ()=> {})
// // })
// fs.unlink('./text-files/some.txt', ()=>{
//     fs.rmdir('./text-files', ()=>{})
// })
const http= require('http')
const fs = require('fs')
let server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
    if (req.url=='/')
    fs.createReadStream('./templates/index.html').pipe(res)
    else if (req.url =='/about')
    fs.createReadStream('./templates/about.html').pipe(res)
    else
    fs.createReadStream('./templates/error.html').pipe(res)


})
const PORT = 3000
const HOST='localhost'
server.listen(PORT, HOST, ()=>{
    console.log(`сервер запущен: http://${HOST}:${PORT}`)
})