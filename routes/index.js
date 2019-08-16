var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Dharmik Patel' });
});

router.get('/home', (req, res, next) => {
  res.render('home', { title: 'Dharmik Patel' });
});

/* GET About page. */
router.get('/about', (req, res, next) => {
  res.render('about', {title: 'About'} );
});

/* GET Projects page. */
router.get('/projects', (req, res, next) => {
  res.render('projects', {title: 'My Projects'});
});

/* GET Serives page. */
router.get('/services', (req, res, next) => {
  res.render('services', {title: 'Services'});
});

/* GET Contact page. */
router.get('/contact', (req, res, next) => {
  res.render('contact', {title: 'Contact Me'});
});
















// const persons = [
//   {
//     route: 'chris',
//     name: 'Chris Naismith',
//     age: 24,
//     cityBorn: 'Barrie',
//     cityResiding: 'Stayner',
//     hobby: 'playing Rocket League.'
//   },
//   {
//     route: 'andrew',
//     name: 'Andrew Naismith',
//     age: 22,
//     cityBorn: 'Barrie',
//     cityResiding: 'Barrie',
//     hobby: 'watching movies.'
//   },
//   {
//     Contact
//   }
// ];

// router.get('/:route', (req, res, next) => {
//   // Find the person where their route string equals the route parameter
//   const person = persons.find(per => per.route === req.params.route);

//   // if no person - render the error page
//   if (!person) return next(new Error('Cannot find person'));

//   // Res.render - renders a view from our views folder.
//   // Pass the person we found in the array above
//   return res.render('person', person);
// });



module.exports = router;
