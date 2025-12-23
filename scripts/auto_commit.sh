#!/bin/bash
msg=$1

if [ -z "$msg" ]; then
  msg="Auto commit from AutoGitOps"
fi

git add .
git commit -m "$msg"
git push origin main
echo "Changes committed successfully"
