function createRepo() {
  const repo = document.getElementById("repoName").value;

  fetch("http://localhost:5000/create-repo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ repo })
  })
    .then(res => res.text())
    .then(data => output(data));
}

function createBranch() {
  const branch = document.getElementById("branchName").value;

  fetch("http://localhost:5000/create-branch", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ branch })
  })
    .then(res => res.text())
    .then(data => output(data));
}

function autoCommit() {
  const message = document.getElementById("commitMsg").value;

  fetch("http://localhost:5000/auto-commit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  })
    .then(res => res.text())
    .then(data => output(data));
}

function syncRepo() {
  fetch("http://localhost:5000/sync", { method: "POST" })
    .then(res => res.text())
    .then(data => output(data));
}

function output(text) {
  document.getElementById("output").textContent = text;
}
