import express from 'express';
const router = express.Router();
import fs from 'fs'
import multiparty from 'multiparty';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config();
import {existCheck} from '../../middlewares/checkExist';




///////////
router.get('/', (req, res) => {
 
    console.log("sssssssssssssssssssssssssss");
            fs.readFile(__dirname+"./../../../src/dev-data/todos.json", 'utf-8', (err1, data) => {
                if(err1) {
                    return res.status(500).json({
                        message: "Lấy dữ liệu thất bại!"
                    })
                }
    
                fs.writeFile(__dirname+"./../../../src/dev-data/todos.json", '[]', (err) => {
                 if(err) {
                     return res.status(500).json({
                         message: "Lấy dữ liệu thất bại!"
                     })
                 }
                 res.redirect('http://localhost:3000/api/v1/todos');
                 res.end();
                })
    
    
   
    
    
        
            })
        
     
    
    })
 ////////////


 module.exports = router;