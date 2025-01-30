// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const Student = require('../models/studentSchema');

// CRUD operations for student
// Create Controller 
const createStudent = async (req, res) => { 
    const { name } = req.body;
    try {
        const student = await Student.create({ name }) 
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        res.status(500).json({'Server Error ': error.message});
    }
};

// Update Controller 
const updateStudent = async (req, res) => { 
    const _id=req.params.id;
    const { name } = req.body;
    try {
        const student = await Student.findByIdAndUpdate( _id, { name },{new:true}) 
        if (!student) {
            return res.status(404).send('student not found');
        }
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// Delete Controller 
const deleteStudent = async (req, res) => { 
    const _id=req.params.id;
    try {
        const student = await Student.findById(_id)
        if (!student) {
            return res.status(404).send('student not found');
        }
        await Student.deleteOne({_id: _id})
        await student.save();
        res.status(201).json({message: "Deleted Successfully"});
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// get by Id Controller 
const getStudent = async (req, res) => { 
    const _id=req.params.id;
    try {
        const student = await Student.findById(_id)
        if (!student) {
            return res.status(404).send('student not found');
        }
        res.status(201).json(student);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// getAll Controller 
const getAllStudent = async (req, res) => { 
    try {
        const student = await Student.find({})
        if (!student) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(student);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

module.exports = {
    createStudent,
    updateStudent,
    deleteStudent,
    getStudent,
    getAllStudent
}