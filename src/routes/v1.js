import express from 'express';
const router = express.Router();

import todoModule from './modules/todo.module'
router.use('/todos', todoModule)

import deleteAll from './modules/deleteAll.module'
router.use('/deleteall', deleteAll)


module.exports = router;