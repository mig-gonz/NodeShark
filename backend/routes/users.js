const users = require('express').Router();
const db = require('../models');
const { User } = db;
const { Op } = require ('sequelize');

users.get('/', (req, res) => {
    
})