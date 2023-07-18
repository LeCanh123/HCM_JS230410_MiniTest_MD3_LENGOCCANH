import express from 'express';
const router = express.Router();
import fs from 'fs'
import multiparty from 'multiparty';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config();
import {existCheck} from '../../middlewares/checkExist';

router.get('/', (req, res) => {
    if(req.query.idDelete){
        fs.readFile(__dirname+"./../../views/templates/todo.html", 'utf-8', (err, data) => {
            if(err) {
                return res.status(500).json({
                    message: "Lấy dữ liệu thất bại!"
                })
            }
    
        fs.readFile(__dirname+"./../../../src/dev-data/todos.json", 'utf-8', (err1, data1) => {
            if(err1) {
                return res.status(500).json({
                    message: "Lấy dữ liệu thất bại!"
                })
            }
        fs.readFile(__dirname+"./../../views/templates/todoItem.html", 'utf-8', (err2, data2) => {
            if(err2) {
                return res.status(500).json({
                    message: "Lấy dữ liệu thất bại!"
                })
            }
    

            let dataEnd=JSON.parse(data1).filter(el=>
                el.id!=req.query.idDelete
                )
                let dataEnd1=JSON.stringify(dataEnd)
        fs.writeFile(__dirname+"./../../../src/dev-data/todos.json",dataEnd1,(err3)=>{
            if (err3)
            console.log(err3);
          else {
            let resutl='';
            // let dataEnd=JSON.parse(data1).map(el=>{
            //     resutl+=data2.replace("{{todoName}}",el.title)
            // })
            dataEnd.map(el=>{
                if(el.completed==false){
                    
                    resutl+=data2.replace("{{todoName}}",el.title).replace("{{idDelete}}",el.id).replace("{{div}}",`<div class="d-flex align-items-center">`).replace("{{div1}}","</div>").replace("{{id}}",el.id)
                }else{
                    resutl+=data2.replace("{{todoName}}",el.title).replace("{{idDelete}}",el.id).replace("{{div}}",`<del class="d-flex align-items-center">`).replace("{{div1}}","</del>").replace("{{check12}}","checked").replace("{{id}}",el.id)
                }
                
                
                })


            let resutlEnd=data.replace("{{todoItem}}",resutl)
            return  res.status(200).send(resutlEnd)
          }

        })


            
         

        })
        })
    
    
    
    
    
    
    
    
    }
    )


        return
    }
    fs.readFile(__dirname+"./../../views/templates/todo.html", 'utf-8', (err, data) => {
        if(err) {
            return res.status(500).json({
                message: "Lấy dữ liệu thất bại!"
            })
        }

    fs.readFile(__dirname+"./../../../src/dev-data/todos.json", 'utf-8', (err1, data1) => {
        if(err) {
            return res.status(500).json({
                message: "Lấy dữ liệu thất bại!"
            })
        }
    fs.readFile(__dirname+"./../../views/templates/todoItem.html", 'utf-8', (err2, data2) => {
        if(err) {
            return res.status(500).json({
                message: "Lấy dữ liệu thất bại!"
            })
        }

        let resutl='';
        let dataEnd=JSON.parse(data1).map(el=>{
            if(el.completed==false){
                    
                resutl+=data2.replace("{{todoName}}",el.title).replace("{{idDelete}}",el.id).replace("{{div}}",`<div class="d-flex align-items-center">`).replace("{{div1}}","</div>").replace("{{id}}",el.id)
            }else{
                resutl+=data2.replace("{{todoName}}",el.title).replace("{{idDelete}}",el.id).replace("{{div}}",`<del class="d-flex align-items-center">`).replace("{{div1}}","</del>").replace("{{check12}}","checked").replace("{{id}}",el.id)
            }
        })
        let resutlEnd=data.replace("{{todoItem}}",resutl)
        return  res.status(200).send(resutlEnd)
    })
    })








}
)
}
)



// router.get('/', (req, res) => {})
router.get('/:id', (req, res) => {
    
    fs.readFile(__dirname+"./../../views/templates/todo.html", 'utf-8', (err, data) => {
        if(err) {
            return res.status(500).json({
                message: "Lấy dữ liệu thất bại!"
            })
        }

    fs.readFile(__dirname+"./../../../src/dev-data/todos.json", 'utf-8', (err1, data1) => {
        if(err) {
            return res.status(500).json({
                message: "Lấy dữ liệu thất bại!"
            })
        }
    fs.readFile(__dirname+"./../../views/templates/todoItem.html", 'utf-8', (err2, data2) => {
        if(err) {
            return res.status(500).json({
                message: "Lấy dữ liệu thất bại!"
            })
        }

        let resutl='';
        let dataEnd=JSON.parse(data1).map(el=>{
        if(el.id==req.params.id){
            if(el.completed==false){
                
                resutl+=data2.replace("{{todoName}}",el.title).replace("{{idDelete}}",el.id).replace("{{div}}",`<div class="d-flex align-items-center">`).replace("{{div1}}","</div>")
            }else{
                resutl+=data2.replace("{{todoName}}",el.title).replace("{{idDelete}}",el.id).replace("{{div}}",`<del class="d-flex align-items-center">`).replace("{{div1}}","</del>")
            }
        }
        })
        let resutlEnd=data.replace("{{todoItem}}",resutl)
        return  res.status(200).send(resutlEnd)
    })
    })

}
)


})






/////////////////////////
router.post('/', (req, res) => {
if(req.body.title){
    fs.readFile(__dirname+"./../../../src/dev-data/todos.json", 'utf-8', (err1, data) => {
        if(err1) {
            return res.status(500).json({
                message: "Lấy dữ liệu thất bại!"
            })
        }
    let newData ={
        "userId": Date.now(),
        "id": Date.now(),
        "title": req.body.title,
        "completed": false
    }
    let result=JSON.parse(data);
    result.unshift(newData)
    let result1=JSON.stringify(result)
    fs.writeFile(__dirname+"./../../../src/dev-data/todos.json", result1, (err2) => {
        if(err2) {
            return res.status(500).json({
                message: "Ghi dữ liệu thất bại!"
            })
        }
        res.status(200).json(result);
        res.end();


    })

    })

}else{
    let form = new multiparty.Form();
    form.parse(req, (err, fields, files) => {
        if(err) {
            return res.status(500).json({
                message: "gửi dữ liệu thất bại!"
            })
        }
        console.log(fields.todo[0]);

        fs.readFile(__dirname+"./../../../src/dev-data/todos.json", 'utf-8', (err1, data) => {
            if(err1) {
                return res.status(500).json({
                    message: "Lấy dữ liệu thất bại!"
                })
            }
        let newData ={
            "userId": Date.now(),
            "id": Date.now(),
            "title": fields.todo[0],
            "completed": false
        }
        let result=JSON.parse(data);
        result.unshift(newData)
        let result1=JSON.stringify(result)
        fs.writeFile(__dirname+"./../../../src/dev-data/todos.json", result1, (err2) => {
            if(err2) {
                return res.status(500).json({
                    message: "Ghi dữ liệu thất bại!"
                })
            }
            res.redirect('http://localhost:'+process.env.PORT+'/api/v1/todos')


        })

        })






})
}




})
/////////////
 



///////////
router.put('/:id', (req, res) => {
 console.log("..........");
 let flag=false;

        fs.readFile(__dirname+"./../../../src/dev-data/todos.json", 'utf-8', (err1, data) => {
            if(err1) {
                return res.status(500).json({
                    message: "Lấy dữ liệu thất bại!"
                })
            }

        let result=JSON.parse(data);
        
        let a=result.map(el=>{
            if(el.id==req.params.id){
                console.log("flag true");
                flag=true;
                return flag=true;
            }
        })
        console.log(flag);


if(flag){
    let result1=result.map(el=>
        {
            if(el.id==req.params.id){
                return {...req.body,id:req.params.id}
            }else{
                return el
            }
        }
        
       
        
        
        )
    let result2=JSON.stringify(result1)
    fs.writeFile(__dirname+"./../../../src/dev-data/todos.json", result2, (err2) => {
        if(err2) {
            return res.status(500).json({
                message: "Ghi dữ liệu thất bại!"
            })
        }
        res.status(200).json(result1);
        res.end();


    })
}else{
    res.send("Sai id");
    res.end();
}


    
        })
    
 

})
////////////



///////////
router.patch('/:id', (req, res) => {
    console.log("..........");
    let flag=false;
   
           fs.readFile(__dirname+"./../../../src/dev-data/todos.json", 'utf-8', (err1, data) => {
               if(err1) {
                   return res.status(500).json({
                       message: "Lấy dữ liệu thất bại!"
                   })
               }
   
           let result=JSON.parse(data);
           
           let a=result.map(el=>{
               if(el.id==req.params.id){
                   console.log("flag true");
                   flag=true;
                   return flag=true;
               }
           })
           console.log(flag);
   
   
   if(flag){
       let result1=result.map(el=>
           {
               if(el.id==req.params.id){
                   return {id:req.params.id,...el,...req.body}
               }else{
                   return el
               }
           }
           
          
           
           
           )
       let result2=JSON.stringify(result1)
       fs.writeFile(__dirname+"./../../../src/dev-data/todos.json", result2, (err2) => {
           if(err2) {
               return res.status(500).json({
                   message: "Ghi dữ liệu thất bại!"
               })
           }
           res.status(200).json(result1);
           res.end();
   
   
       })
   }else{
       res.send("Sai id");
       res.end();
   }
   
   
       
           })
       
    
   
   })
////////////


///////////
router.delete('/:id', (req, res) => {
    console.log("..........");
    let flag=false;
   
           fs.readFile(__dirname+"./../../../src/dev-data/todos.json", 'utf-8', (err1, data) => {
               if(err1) {
                   return res.status(500).json({
                       message: "Lấy dữ liệu thất bại!"
                   })
               }
   
           let result=JSON.parse(data);
           
           let a=result.map(el=>{
               if(el.id==req.params.id){
                   console.log("flag true");
                   flag=true;
                   return flag=true;
               }
           })
           console.log(flag);
   
   
   if(flag){
       let result1=result.filter(el=>
el.id!=req.params.id
           )


       let result2=JSON.stringify(result1)
       fs.writeFile(__dirname+"./../../../src/dev-data/todos.json", result2, (err2) => {
           if(err2) {
               return res.status(500).json({
                   message: "Ghi dữ liệu thất bại!"
               })
           }
           res.status(200).json(result1);
           res.end();
   
   
       })
   }else{
       res.send("Sai id");
       res.end();
   }
   
   
       
           })
       
    
   
   })
////////////



router.post('/todos', (req, res) => {
    console.log("req.body",req.body.name);
if(req.body.name.includes()){}


fs.readFile(__dirname+"./../../../src/dev-data/todos.json", 'utf-8', (err1, data) => {
    if(err1) {
        return res.status(500).json({
            message: "Lấy dữ liệu thất bại!"
        })
    }

let result=JSON.parse(data).map(el=>{
if(req.body.name.includes(el.title)&&req.body.name.includes(el.id)){
    if(req.body.name.includes("checked")){
        return { ...el,completed:false}
    }else{
        return { ...el,completed:true}
    }

}
else{
return el
}

})

let result1=JSON.stringify(result)
fs.writeFile(__dirname+"./../../../src/dev-data/todos.json", result1, (err2) => {
    if(err2) {
        return res.status(500).json({
            message: "Ghi dữ liệu thất bại!"
        })
    }
    // res.status(200).json(result);
    // res.end();
res.redirect('http://localhost:3000/api/v1/todos')

})






})
})













module.exports = router;