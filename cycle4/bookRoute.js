const express = require('express');
const router = express.Router();

const { body, param, validationResult } = require('express-validator');

let { books, nextId } = require('../books');

router.get('/', (req,res)=>{
    res.json(books);
});

router.post('/', (req,res)=>{
    const newBook = { id: nextId++, ...req.body };
    books.push(newBook);
    res.status(201).json(newBook);
});

router.put('/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const index=books.findIndex(book=>book.id===id);

    if(index===-1){
        return res.status(404).json({error:"Book not found"});
    }

    books[index]={...books[index],...req.body};

    res.json(books[index]);
});

router.delete('/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const index=books.findIndex(book=>book.id===id);

    if(index===-1){
        return res.status(404).json({error:"Book not found"});
    }

    books.splice(index,1);
    res.sendStatus(204);
});

module.exports = router;
