const { default: mongoose } = require('mongoose');
const Order = require ('../models/order');

module.exports = {
    getOrders : (req,res) => {
        Order.find({})
        .then(data => res.json(data))
        .catch(e => res.status(500).json({error: e}));
    },

    addOrder : (req,res) =>{
        try{
            const newOrder = new Order({
                customer : mongoose.Types.ObjectId(req.body.customer),
                foods : mongoose.Types.ObjectId(req.body.foods),
                totalPrice : req.body.totalPrice,
                orderDate : new Date(),
                paymentMethod : req.body.paymentMethod
            });
            newOrder.save()
            .then(() => res.json('Nuovo ordine effettuato'))
        }
        catch(e){
            res.status(500).json({error: e});
        }        
    },

    changeState : (req, res) => {
        Order.findById(req.params.id)
            .then(data => {
                if (data.isAccepted){
                   data.isAccepted = false;
                }else{
                    data.isAccepted = true;
                }
                data.save();
                res.json(data);
            })
            .catch(err => res.status(400).json('Error: ' + err))           
    },

    acceptedOrders : (req,res) => {
        Order.find({isAccepted :  true})
            .then(data => res.json(data))
            .catch(e => res.status(500).json({error: e}))
    },

    orderState : (req,res) => {
        Order.findById(req.params.id)
            .then(data =>{
                if(data.isAccepted){
                    res.json({message : "L'ordine è stato accettato"})
                }else{
                    res.json({message : "L'ordine deve essere ancora accettato"})
                }
            })
            .catch(e => res.status(500).json({error: e}))
    },

    endOrder : (req,res) =>{
        Order.findById(req.params.id)
            .then(data => {
                data.isEnded = true;
                data.save();
                res.json({message : "Ordine concluso"});
            })
            .catch(e => res.status(500).json({error: e}));
    },
    getTransactions : (req,res) => {
        Order.find({}).select('_id paymentMethod totalPrice')
        .then(data => res.json(data))
        .catch(e => res.status(500).json({error: e}));
    },
}