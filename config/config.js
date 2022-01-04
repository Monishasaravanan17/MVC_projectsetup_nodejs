// const nconf = require('nconf');

// module.exports = async (app, fileName) => {
//     const env = __dirname  + fileName;
//     nconf.file('file', {file: fileName,dir: __dirname  , search: true  });
//     try{
//         app.locals = nconf.get().settings;
//         console.log('App Locals Success');
//         return require(env);

//     }
//     catch (error) {
//         console.error("Error in configuration manager" + error.code + " " + " " + error.message);
//     }
// }
