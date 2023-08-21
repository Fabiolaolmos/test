const {MongoClient} = require("mongodb");
const uri = require ("./atlas_uri")

console.log(uri)

const client = new MongoClient(uri)
const dbname ="bank"

const connectToDatabase = async () => {
    try{
        await client.connect();
    console.log( `connect to the ${dbname} database `);
    }catch (err){
        console.error( `Error connecting to the data base: ${err} `);
   
    }
};
const main = async () => {
    try {
        await connectToDatabase();
    }catch (err){
        console.error( `Error connecting to the data base: ${err} `);

    }finally {
        await client.close();

    
    }
};
// Run the main function

main();