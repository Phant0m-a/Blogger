const express = require('express');
const { database } = require('firebase-admin');
const router = express.Router()
const firebase = require('../firebase.js');
//firebase.auth.Auth.Persistence;
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)

const db = firebase.firestore();
db.settings({ timestampsInSnapshot: true });


router.get('/', async (req, res) => {
    let data = await db.collection('Blog').orderBy("date", "desc").get();
    let headlines = await db.collection('Blog').orderBy("date", "desc").limit(2).get();
    res.render('index', { blogData: data, heads: headlines });
})

router.get('/article/:id', async (req, res) => {
    let id = req.params.id;
    let data = await db.collection('Blog').doc(id).get();
    console.log(data.data().author);
    res.render('Blogviews/article', { data: data });
});


module.exports = router
