const fs = require("fs");

fs.readdir("my-folder", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    console.log(files);
    for (let file of files) {
      fs.unlink(`./my-folder/` + file, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("success");
        }
      });
    }
  }
});
