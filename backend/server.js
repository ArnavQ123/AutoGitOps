const express = require("express");
const { exec } = require("child_process");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const SCRIPT_PATH = "../scripts";
const BASH_PATH = `"C:/Program Files/Git/bin/bash.exe"`;

// Create GitHub Repository
app.post("/create-repo", (req, res) => {
  const { repo } = req.body;

  if (!repo) {
    return res.status(400).send("Repository name required");
  }

  exec(`${BASH_PATH} ${SCRIPT_PATH}/init_repo.sh ${repo}`, (error, stdout, stderr) => {
    if (error) return res.status(500).send(stderr || error.message);
    res.send(stdout);
  });
});


// Create Branch
app.post("/create-branch", (req, res) => {
  const { branch } = req.body;

  if (!branch) {
    return res.status(400).send("Branch name required");
  }

  exec(`${BASH_PATH} ${SCRIPT_PATH}/branch_manager.sh ${branch}`, 
    (error, stdout, stderr) => {
      if (error) return res.status(500).send(stderr || error.message);
      res.send(stdout);
    }
  );
});


// Auto Commit
app.post("/auto-commit", (req, res) => {
  const { message } = req.body;

  exec(`${BASH_PATH} ${SCRIPT_PATH}/auto_commit.sh "${message}"`, 
    (error, stdout, stderr) => {
      if (error) return res.status(500).send(stderr || error.message);
      res.send(stdout);
    }
  );
});


// Sync Repository
app.post("/sync", (req, res) => {
  exec(`${BASH_PATH} ${SCRIPT_PATH}/sync_repo.sh`, (err, stdout, stderr) => {
    if (err) return res.status(500).send(stderr);
    res.send(stdout);
  });
});

app.listen(5000, () => {
  console.log("AutoGitOps Backend running on port 5000");
});
