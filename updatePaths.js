const fs = require("fs");
const path = require("path");

const directory = "./src";

// Function to update file paths
const updateFilePaths = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);

    if (fs.lstatSync(fullPath).isDirectory()) {
      updateFilePaths(fullPath); // recursive call for directories
    } else {
      let content = fs.readFileSync(fullPath, "utf8");

      // Replace paths for src and public folders (modify the patterns as needed)
      content = content.replace(/src="src\//g, 'src="');
      content = content.replace(/href="public\//g, 'href="');

      // Update import statements
      content = content.replace(
        /import (.+) from ['"]\.\/src\//g,
        "import $1 from './"
      );

      fs.writeFileSync(fullPath, content, "utf8");
    }
  });
};

// Run the function
updateFilePaths(directory);
