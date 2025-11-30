const express = require("express");
const router = express.Router();

// get all the todo
router.get("/", async (req, res) => {});

// get all the todo
router.get("/:id", async (req, res) => {});

// get one the todo
router.post("/", async (req, res) => {
    
});

// post the todo
router.post("/all", async (req, res) => {});

//  post multiple the todo
router.put("/:id", async (req, res) => {});

// delete the todo
router.delete("/:id", async (req, res) => {});

module.exports = router;
