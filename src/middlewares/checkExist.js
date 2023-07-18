import fs from 'fs'
import multiparty from 'multiparty';









module.exports = {
    existCheck: function(req, res, next) {
        let flag=false;
        fs.readFile(__dirname+"./../dev-data/todos.json", 'utf-8', (err1, data1) => {





            if(err1) {
                return res.status(500).json({
                    message: "Lấy dữ liệu thất bại!"
                })
            }


            let form = new multiparty.Form();
            form.parse(req, (err, fields, files) => {
                console.log(fields,"fields");
if(err){
    return res.status(400).json({message:"lỗi"})
}



                JSON.parse(data1).map(el=>{
                    if(el.title==fields.todo){
                        flag=true;
   
                    }
                })


            })


            
        })




        if(flag){
            res.status(200).json({message:"Công việc đã tồn tại"});
            res.end();
        }else{
             next()
        }
    }
}