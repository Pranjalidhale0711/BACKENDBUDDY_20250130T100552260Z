const express = require("express");
const router = express.Router();

// auth routes
const { register, login } = require("../controllers/auth");
const { checkAuthorizationHeaders, authorizeUser } = require("../middlewares/authenticate");


router.post("/register", register);
router.post("/login", checkAuthorizationHeaders, login);

    
// student routes
const { createStudent, updateStudent, deleteStudent, getStudent, getAllStudent } = require('../controllers/student');
// 
router.post("/student/create", checkAuthorizationHeaders,authorizeUser("createstudent") ,createStudent);
router.put("/student/update/:id", checkAuthorizationHeaders,authorizeUser("updatestudent"), updateStudent);
router.delete("/student/delete/:id", checkAuthorizationHeaders, authorizeUser("deletestudent"), deleteStudent);
router.get("/student/get/:id", checkAuthorizationHeaders, authorizeUser("readstudent"), getStudent);
router.get("/student/getAll", checkAuthorizationHeaders, authorizeUser("readstudent"), getAllStudent);

  
module.exports = router;
