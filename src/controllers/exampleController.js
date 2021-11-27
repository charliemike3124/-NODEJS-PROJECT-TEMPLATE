const NodeCache = require( "node-cache" )
const CacheConstants = require("../resources/constants/cacheConstants")
const exampleService = require("../services/exampleService")

const cache = new NodeCache();

const getExampleRequest = async (req, res) => {
    try{        
        //check for cached value
        const cacheKey = `${getExampleRequest}-${req.params.exampleParam}`;
        const cachedVal = cache.get(cacheKey);
        let result = cachedVal;
        if(!cachedVal){
            //call api if cached value does not exist and set value to cache.
            const helloString = await exampleService.constructHelloString(req.params.exampleParam); 
            cache.set(`${cacheKey}`, helloString, CacheConstants.ALIVE_TIMES.MEDIUM);
            result = helloString;
        }
        res.send(result);
    }
    catch(err){
        console.log(`An error has ocurred at ${this.name}: ` + err);
        res.status(500).send();
    }
};

module.exports = {
    getExampleRequest,
}