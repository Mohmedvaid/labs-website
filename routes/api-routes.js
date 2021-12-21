
const router = require("express").Router();

const db = require("../models/workout");



router.post("/api/workouts", ({body}, res) => {
    db.create({body})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
      });
  });

router.get("/api/workouts", (req, res)=>{
    db.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
})

router.put("/api/workouts/:id", (req, res) => {
  let id = req.params.id
  db.findOneAndUpdate({_id:id}, {$push: {exercises:req.body}}, {new: true})
  .then(dbWorkout=>{
    console.log(dbWorkout);
     function totalDuration(){
      let totalDuration =0;
      dbWorkout.exercises.forEach(exercise => {
        totalDuration+= exercise.duration
        return totalDuration;
      });
      db.findOneAndUpdate({_id:id}, {totalDuration: totalDuration})
      .then(updatedWorkout=>{
        res.json(updatedWorkout)
      })
      // dbWorkout.totalDuration = totalDuration;
      // console.log("dbWorkout Duration in the func: "+ dbWorkout.totalDuration);
    } 

    totalDuration();
    // console.log(dbWorkout)
    // .then(res.json(dbWorkout))
  })


  .catch(err=>{
    res.json(err)
  })
});

router.get("/api/workouts/range", (req, res)=>{
  db.find({})
  .then(dbWorkout=>{
    res.json(dbWorkout)
  })

})

  
module.exports = router


