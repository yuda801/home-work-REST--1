// const express = require('express')

import express from "express";
import generalSettings from './config.js'
import { coffeeList } from "./database.js";

const app = express()
app.use(express.json())



app.get(`${generalSettings.baseUrl}/coffee`, function (req, res) {
    res.send(coffeeList)
})
app.get(`${generalSettings.baseUrl}/coffee/:id`, function (req, res) {
    const id = +req.params.id
    const requestedCooffe = coffeeList.find(coffee => coffee.id === id)
    res.send(requestedCooffe)
})
app.post(`${generalSettings.baseUrl}/books`, function (req, res) {
    const coffeeToAdd = req.body
    console.log(coffeeToAdd);
})


app.listen(5000)
console.log("Server is running on port 5000");