import doenv from 'dotenv'
import mongoose from 'mongoose'

// Config env 
doenv.config()


// Mongodb all options if you want pass any 
const MongodbAllOptions = {
    // Connection Options
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000,
    retryWrites: true,
  
    // Database Options
    readPreference: "primary", // options: 'primary', 'secondary', 'nearest'
    writeConcern: { 
      w: "majority", 
      j: true, 
      wtimeout: 1000 
    },
    maxPoolSize: 50,
  
    // Mongoose-Specific Options
    useFindAndModify: false,
    useCreateIndex: true,
    autoIndex: false, // Disable auto-creation of indexes in production
  
    // Collection Options (when creating a collection programmatically)
    collectionOptions: {
      capped: true,
      size: 10000,
      validator: { 
        $jsonSchema: { 
          bsonType: "object", 
          required: ["name", "age"] 
        } 
      },
      timeseries: { 
        timeField: "timestamp" 
      }
    },
  
    // Index Options (used during index creation)
    indexOptions: {
      unique: true,
      sparse: true,
      expireAfterSeconds: 3600 // TTL index
    }
  };


// Defind all Ver 
let dbname = process.env.dbname || 'backcraft'
let dburl = process.env.mongodbURL || `mongodb://127.0.0.1:27017`

const ConnectMongodb = (options)=>{
    try {
    mongoose.connect(`${dburl}/${dbname}`, {...options}).then((msg)=>{
        console.log(`Mongodb Connect ${{...msg}}`)
    }).catch((err)=>{
        console.log(`Mongodb Connect error ${msg}`)
    })
        
    } catch (error) {
        console.log(error)
    }
}

export default ConnectMongodb