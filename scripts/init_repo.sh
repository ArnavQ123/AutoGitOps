
read -p "Enter GitHub repository name: " repo
gh repo create $repo --public --confirm
git remote add origin https://github.com/$(gh api user -q .login)/$repo.git
echo "Repository created successfully"
