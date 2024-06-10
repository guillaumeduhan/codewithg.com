gt:
	git add .
	git commit -m "commit"
	git push

gm:
	git pull
	yarn && yarn dev

dev:
	npm run dev:prepare