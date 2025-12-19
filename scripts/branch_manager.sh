
read -p "Enter new branch name: " branch
git checkout -b $branch
git push origin $branch
