const db = require("./db")

class ClienteDAO {

    selectAllCliente(){
        return new Promise((resolve,reject)=>{
            db.query("select * from cliente",(erro,resultado)=>{
                if(erro){
                    reject(erro)
                    return
                }else{
                  return resolve(resultado)
                }
            })
        })
    }

    selectAllNomeCliente(nome){
        return new Promise((resolve,reject)=>{
            db.query("select * from cliente where nome like '%"+nome+"%' ",(erro,resultado) =>{
                if(erro){
                    reject(erro)
                    return
                }else{
                  return resolve(resultado)
                }
            })
        })
    }

    selectAllIdCliente(id){
        return new Promise((resolve,reject)=>{
            db.query('select * from cliente where id = ?',[id],(erro,resultado) =>{
                if(erro){
                    reject(erro)
                    return
                }else{
                  return resolve(resultado)
                }
            })
        })
    }
    
    inserirClientesDB(cliente){
        return new Promise((resolve, reject) =>{
            db.query("insert into cliente (nome,idade,email) values (?, ?, ?)",[cliente.nome,cliente.idade,cliente.email],(erro,resultado)=>{
                if(erro){
                    reject(erro)
                    return
                }else{
                    return resolve(resultado)
                }
            })
        } )
    }

    updateClientesDB(cliente,id){
        return new Promise((resolve, reject) =>{
            db.query("update cliente set nome = ?, idade = ?, email = ? where id = ?",[cliente.nome,cliente.idade,cliente.email,id],(erro,resultado)=>{
                if(erro){
                    reject(erro)
                    return
                }else{
                    return resolve(resultado)
                }
            })
        } )
    }

    excluirClienteDB(id){
        return new Promise((resolve, reject) =>{
            db.query("delete from cliente where id = ? ",[id],(erro,resultado)=>{
                if(erro){
                    reject(erro)
                    return
                }else{
                    return resolve(resultado)
                }
            })
        } )
    }

}


module.exports = ClienteDAO