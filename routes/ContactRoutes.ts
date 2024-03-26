const express = require('express');

const router = express.Router();


router.route("/").get((req: any, res: any) => {
    console.log(req);
    res.json({message:"GET /api/contacts"}).status(200);
});

router.route("/:id").get((req: any, res: any) => {
    console.log(req);
    res.json({message:`GET /api/contacts for ${req.params.id}`}).status(200);
});

router.route("/").post((req: any, res: any) => {
    console.log(req);
    res.json({message:"POST /api/contacts"}).status(200);
});

router.route("/:id").put((req: any, res: any) => {
    console.log(req);
    res.json({message:`PUT /api/contacts for ${req.params.id}`}).status(200);
});

router.route("/").delete((req: any, res: any) => {
    console.log(req);
    res.json({message:`DELETE /api/contacts for  ${req.params}`}).status(200);
});

router.route("/").get((req: any, res: any) => {
    console.log(req);
    res.json({message:"GET /api/contacts"}).status(200);
});


module.exports = router;