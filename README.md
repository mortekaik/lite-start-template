# lite-start-template
Simple lite template with gulp

## Installation
1. Install [NodeJS](https://nodejs.org/en/) and [Git](https://git-scm.com/downloads) (if it is not installed)
3. Clone template in project folder: ```git clone https://github.com/mortekaik/lite-start-template.git project-name```
4. Go to created folder: ```cd project-name```
5. Install ```gulp``` globally: ```npm i -g gulp-cli```
6. Install dependencies: ```npm i```
7. Libs and plugins are installing via bower:

	* ```npm i -g bower``` (if it is not)
	
	* ```bower install``` (jquery & normalize will be installed by default). Dependencies are located in the *bower.json* file.
	Libs are installed in the "app/libs" folder (the path is set in the *.bowerrc* file).

8. dev-mode: ```npm run dev``` or ```gulp``` (development is in the "app" folder)
9. build: ```npm run build``` (production version of project is building to "dist" folder)
