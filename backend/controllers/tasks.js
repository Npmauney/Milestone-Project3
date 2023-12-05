const router = require('express').Router();
//const { CurrentUser } = require('../../frontend/src/contexts/CurrentUser');
const db = require('../models');

const { Task, User } = db;

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.findAll({
      include: 'author', // Using the alias 'author' to include the associated user
   //   where: {
   //     author_id: CurrentUser.userId
   //   }
    });
    console.log(req.body)
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  //try {
    const task = await Task.create(req.body);
    console.log(req.body)
    console.log('%$#^#$^#&$&')
    res.json(task);
  //} catch (error) {
//    console.error(error);
 //   res.status(500).json({ error: 'Internal Server Error' });
 // }
});

module.exports = router;
