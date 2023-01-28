const fs = require("fs");

// read data from text file
fs.readFile("data.txt", "utf-8", (err, fileData) => {
  if (err) {
    console.error(err);
    return;
  }

  // parse the file data into an object
  const fileDataObj = JSON.parse(fileData);

  // handle form submit
  app.post("/submit-form", (req, res) => {
    const formData = req.body;
    
    // compare form data with data from text file
    if (formData.email === fileDataObj.email && formData.password === fileDataObj.password) {
      res.send("Form data is equal to data in text file");
    } else {
      res.send("Form data is not equal to data in text file");
    }
  });
});


