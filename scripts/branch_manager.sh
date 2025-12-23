#!/bin/bash
branch=$1

if [ -z "$branch" ]; then
  echo "Branch name missing"
  exit 1
fi

git checkout -b "$branch"
git push origin "$branch"
echo "Branch '$branch' created successfully"
