//API ENDPOINTS
const router = require('express').Router();
let Exercise = require('../models/exercise.model');

//get exercises from database
router.route('/').get((req, res) => {
    Exercise.find()
        .then( exercise => res.json(exercise))
        .catch( err => res.satus(400).json('Error : ' + err))
});

//adding new exercise
router.route('/add').post((req, res) => {
    const username = req.body.username
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    
    const newExercise = new Exercise({
        username, description, duration, date,
    });

    //saving the data 
    newExercise.save()
        .then( () => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error :' +err))

});

//get exercise by id 
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
     .then(exercise => res.json(exercise))
     .catch(err => res.status(400).json("Error : " + err));
} );

//delete data from particular id 
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise Deleted'))
        .catch(err => res.status(400).json('Error : ' + err))
});

//update data using id
router.route('/update/:id').post((req ,res) => {
    Exercise.findById(req.params.id) 
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);


            exercise.save()
                .then(() => res.json("Exercise updated!"))
                .catch(err => res.status(400).json("Error : " + err));
        })
        .catch(err => res.status(400).json("Error : " + err));
});


module.exports = router;