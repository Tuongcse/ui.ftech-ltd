SERVER=future_tech
REPO=ui.ftech.ltd
PM2_NAME=ui.ftech.ltd

zip -r source.zip . -x "node_modules/*" "*/node_modules/*" "source.zip" "*-lock.json" ".git/*" ".github/*" ".idea/*" "deploy.sh" ".next/*" "*/.next/*" "**/*/.next/* cd /var/www/$REPO && npmp build && pm2 restart"
scp source.zip $SERVER:/root
ssh $SERVER "bash -lc 'source .bashrc; unzip -o source.zip -d /var/www/$REPO && rm source.zip"
rm source.zip
