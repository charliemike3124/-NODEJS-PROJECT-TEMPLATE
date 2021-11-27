const express = require("express");
const exampleRoute = require("./exampleRoute");

const router = express.Router();

const defaultRoutes = [
    {
      path: '/example',
      route: exampleRoute,
    },
];

defaultRoutes.forEach( (route) => {
    router.use(route.path, route.route);
});

module.exports = router;