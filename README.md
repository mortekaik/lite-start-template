# lite-start-template
Simple lite template with gulp

## Installation
1. Install [NodeJS](https://nodejs.org/en/) and [Git](https://git-scm.com/downloads) (if it is not installed)
3. Clone template in project folder: ```git clone https://github.com/mortekaik/lite-start-template.git project-name```
4. Go to downloaded folder: ```cd project-name```
5. Install ```gulp``` globally: ```npm i -g gulp-cli```
6. Install dependencies: ```npm i```
7. Libs and plugins are installed via bower:

	* ```npm i -g bower``` (if it is not)
	
	* ```bower install``` (by default, jquery & normalize will be installed). Dependencies are in file *bower.json*.
	Libs are installed in folder "app/libs" (the path is set in file *.bowerrc*).

8. dev-mode: ```npm run dev``` or ```gulp``` (development in "app" folder)
9. build: ```npm run build``` (project is built in "dist" folder)
