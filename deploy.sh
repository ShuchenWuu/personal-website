echo "Switching to branch masters"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* athena@andopi.com:/var/www/www.shuchen-wu.com

echo "Done!"