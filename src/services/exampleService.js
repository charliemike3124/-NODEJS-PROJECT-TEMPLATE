const Axios = require("Axios");

const constructHelloString = (name) => {
    //await Axios.get("endpoint route");
    return `Hello ${name} from ${constructHelloString.name}`;
}

module.exports = {
    constructHelloString,
}