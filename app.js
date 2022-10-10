const express = require('express');
const {graphqlHTTP} = require('express-graphql');

const schema = require('./server/schema/schema');
const testSchema = require('./server/schema/types_schema');
const mongoose =  require("mongoose");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;

//mongodb+srv://Revathy:<password>@grapgql-cluster.cz4xglm.mongodb.net/?retryWrites=true&w=majority


app.use(cors());
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
   
}));

//revathyramesh
mongoose.connect(`mongodb+srv://Kalidass:jW4AvaN5xRvTUmuK@kd-user.bclaf2w.mongodb.net/?retryWrites=true&w=majority`,
{useNewUrlParser:true,useUnifiedTopology:true}
).then(()=>{
    app.listen({port: port}, () => {
         //localhost:4000
        console.log('Listening for requests on my awesome port 4000');
        
    });
}).catch((e)=>console.log("Error:::"+e));


