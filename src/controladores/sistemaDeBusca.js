const {livros} = require('../dados/livros');

const get = (req, res)=>{
    return res.send(livros);
}

const getPorId = (req, res)=>{
    const {id} = req.params;
    const validacao = livros.find((livro)=>{
        return livro.id === Number(id);
    });
    if(validacao){
        return res.send(validacao);
    } else{
        return res.send("Esse id não existe");
    }
}

const getPorQuery = (req, res)=>{
    const {titulo, edicao} = req.query
    let pesquisa = livros;
    if(titulo){
        pesquisa = livros.find((livro)=>{
            return livro.titulo === titulo 
    });
    if(edicao){
        pesquisa = livros.find((livro)=>{
            return livro.edicao === Number(edicao) ;
    })
}
    return res.send(pesquisa)

}
}

module.exports = {get, getPorId, getPorQuery}