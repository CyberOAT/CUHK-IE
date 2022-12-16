/**
* ECLT5830 Network and Web Programming
*
* I declare that the assignment here submitted is original
* except for source material explicitly acknowledged,
* and that the same or closely related material has not been
* previously submitted for another course.
* I also acknowledge that I am aware of University policy and
* regulations on honesty in academic work, and of the disciplinary
* guidelines and procedures applicable to breaches of such
* policy and regulations, as contained in the website.
*
* University Guideline on Academic Honesty:
* http://www.cuhk.edu.hk/policy/academichonesty/
*
* Student Name : GUO Hao
* Student ID : 1155178040
* Date : 2022/12/15
*/
const mongoose = require('mongoose');
const fs = require('fs');
const { readFileSync } = require('fs');

const messageSchema = new mongoose.Schema({
  Email: { type: String },
  Message: { type: String },
},
  {
    timestamps: { createdAt: 'created' },
  }
);

const uri = "mongodb+srv://s1155178040:1qaz2wsx@eclt5830.jmpola9.mongodb.net/?retryWrites=true&w=majority";
const options = {
  dbName: 'my_asg4_db'
}
mongoose.connect(uri, options);

mongoose.connection.on("connected", () => {
  console.log("Connect successfully!")
});
mongoose.connection.on("error", (error) => {
  console.log("Connect error!", error)
});

var Message = mongoose.models.Message || mongoose.model('Message', messageSchema);

exports.handler = async function (event, context) {
  if (event.httpMethod === "POST") {
    let body = JSON.parse(event.body);
    Message.create({Email:body.Email,Message:body.Message}, (error, results) => {
      if (!error) {
        console.log("add finish!")
        Message.find({}, (error, results) => {
          if (error != null) {
            console.log(error);
          }
          results = JSON.stringify(results);
          fs.writeFileSync('user.json', results);
          console.log("JSON data is saved.");
        });
      }
      else {
        console.log(error)
      }
    })
    const mdata = JSON.parse(readFileSync('user.json').toString());
    console.log(mdata)
    return {
      statusCode: 200,
      body: JSON.stringify({ value: mdata }),
    };
  }
  else {
    return {
      statusCode: 405,
      body: JSON.stringify({ value: "Method not supported" })
    }
  }
};