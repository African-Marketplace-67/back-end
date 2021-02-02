const express = require('express');

const router = express.Router();
const Item = require('./item-model')

router.get("/", async (req, res, next) => {
    try {
        const item = await Item.findItem()
        res.json(item)
    } catch (err) {
        next(err);
    }
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    Item.findItemById(id)
        .then(item => {
            if(item){
                res.status(200).json(item)
            }else{
                res.status(404).json({ error: err.message })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(404).json({ error: err.message })
        })
})
  
router.post("/", (req, res) => {
    Item.add(req.body)
      .then(item => {
        res.status(201).json(req.body);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  router.put('/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body

    Item.update(id, changes)
        .then(item => {
            if(req.body.name && req.body.description && req.body.price){
                res.status(200).json(req.body)
            }else{
                res.status(400).json({ errorMessage: 'requires name, description,AND price'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(400).json({ error: err.message })
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
   Item.remove(id)
    .then(item => {
        if(item){
            res.status(200).json({ message: "item lost to the void"})
        }else{
            res.status(404).json({ message: 'im gonna need to see some id'})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'item resisted delete'})
    })
})

 
module.exports = router;