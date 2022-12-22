const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


// Loading Data
const catagories = require('./data/catagories.json');

const courses = require('./data/courses.json');


app.get('/', (req, res) => {
    res.send('News API Running');
});

// Loading catagories
app.get('/catagories', (req, res) => {
    res.send(catagories);
});


// Loading catagories by ID
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find(c => c._id === id);

    res.send(selectedCourses);
});


app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const CourseDetails = courses.filter(c => c.category_id == id);

    res.send(CourseDetails);
});

// Checkout page as per user login
app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const CourseDetails = courses.filter(c => c.category_id == id);

    res.send(CourseDetails);
});

app.listen(port, () => {
    console.log('seekWisdom server running on port', port);
})