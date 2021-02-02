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
 
module.exports = router;