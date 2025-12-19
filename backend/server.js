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
  exec(`${BASH_PATH} ${SCRIPT_PATH}/init_repo.sh`, (err, stdout, stderr) => {
    if (err) return res.status(500).send(stderr);
    res.send(stdout);
  });
});

// Create Branch
app.post("/create-branch", (req, res) => {
  exec(`${BASH_PATH} ${SCRIPT_PATH}/branch_manager.sh`, (err, stdout, stderr) => {
    if (err) return res.status(500).send(stderr);
    res.send(stdout);
  });
});

// Auto Commit
app.post("/auto-commit", (req, res) => {
  exec(`${BASH_PATH} ${SCRIPT_PATH}/auto_commit.sh`, (err, stdout, stderr) => {
    if (err) return res.status(500).send(stderr);
    res.send(stdout);
  });
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
