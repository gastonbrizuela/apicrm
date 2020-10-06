'use strict'
const { response } = require('express');
const mysqlConnection = require('../config/database')


class CrmCampaignControllers {
    static index(req,res){
        var sql = "select * from CrmCampaign"
        mysqlConnection.query(sql,(err,rows,fields)=>{
            if(!err){
                res.status(200).json(rows);
            }else{
                console.log(err)
            }
        })
    }
    static store(req,res){
    console.log(req.body)
    const columns = Object.keys(req.body);
    const values = Object.values(req.body);

    let sql = "INSERT INTO CrmCampaign (" + columns.join(" , ") +") VALUES (";

    for (let i = 0; i < values.length; i++) {
        sql += "?";
        if (i !== values.length - 1) {
            sql += ",";
        }
    }
    sql+= ")";
    console.log(sql)
    console.log(values)
    mysqlConnection.query(sql, values, (error, result, fields) => {
    console.log(result)
    if (error){
        res.status(500).json({'error': error.message})
        console.log(error.message)
        return;
    }else{    res.json({
        'exercise': req.body
    })}

    }); 
        }
    
    
}

module.exports =  CrmCampaignControllers