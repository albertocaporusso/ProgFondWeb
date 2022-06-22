const Food = require ('../models/food');

module.exports = {
    addFood :  (req,res) =>{
        try{
            const newFood = new Food({
                name : req.body.name,
                category : req.body.category,
                price : req.body.price
            });
            newFood.save()
            .then(() => res.json('Cibo inserito nel menu'))
            .catch(err => res.status(400).json('Error: ' + err));
        }
        catch(e){
            res.status(500).json({error: e});
        }        
    },

    getMenu : (req,res) => {
        Food.find({}).sort({name : 1})
            .then(data => res.json(data))
            .catch(e => res.status(500).json({error: e}));
    },

    deleteFood: (req,res) => {
        Food.findByIdAndDelete(req.params.id)
            .then(() => res.json('Cibo rimosso'))
            .catch(err => res.status(400).json('Error: ' + err));
    },

    updateFood : (req,res) => {
        Food.findByIdAndUpdate(req.params.id,req.body, {new:true})
            .then(data => res.json(data))
            .catch(e => res.status(500).json({error: e}));
    }

}