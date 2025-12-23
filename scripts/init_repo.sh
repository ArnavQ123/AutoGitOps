#!/bin/bash
repo=$1

if [ -z "$repo" ]; then
  echo "Repository name missing"
  exit 1
fi

gh repo create "$repo" --public --confirm
git remote add origin https://github.com/$(gh api user -q .login)/"$repo".git
echo "Repository $repo created successfully"
