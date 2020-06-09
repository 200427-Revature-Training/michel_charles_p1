import express from 'express';
import * as ersUserService from '../services/ersUser.service';
import {ErsUsers} from '../models/ersUsers.model';
import { ifError } from 'assert';

const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');

export const ersUserRouter = express.Router();

const key ='justakey';

const user = [];

const token = (req:any, res:any, next:any) =>{


}