import express from "express"
const app = express()
import cors from "cors"

app.use(cors())

app.get("/getdata", (req,res)=> {
    res.status(200).json({
        message : "data fetced successfully!!!",
        data : [
            {
                membername : "sammed",
                age : 23,
                role : "software developer"
            },
            {
                membername : "kavite",
                age : 17,
                role : "PUC student"
            },
            {
                membername : "Manoj",
                age : 22,
                role : "software developer"
            },

        ]
    })
})


app.listen(5000, ()=> {
    console.log(`server listening on 5000`);
})