'use strict'
const mysqlConnection = require('../config/database')

class CrmTemplateController{
    static store(req,res){
        const columns = Object.keys(req.body)
        const values = Object.values(req.body)

        let sql = "INSERT INTO CrmTemplate ("+ columns.join(" , ")+") VALUES ("
        for (let i = 0; i < values.length; i++) {
            sql += "?";
            if (i !== values.length - 1) {
                sql += ",";
            }
        }
        sql+= ")";
        mysqlConnection.query(sql, values,(error,result,fields)=>{
            if (error){
                console.log(error.message)
                res.status(500).json({'error':error.message})
                return;
            }
            res.json({
                'result':req.body
            })
        })
    }
    static index(req,res){
        var sql = "select * from CrmTemplate"
        mysqlConnection.query(sql,(err,rows,fields)=>{
            if(!err){
                res.status(200).json(rows);
            }
            else{
                console.log(err)
            }
        })
    }
}

module.exports = CrmTemplateController