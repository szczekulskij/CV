### Improvements to be made : 
* Have the site in English, Polish & Spanish
* Add pdf for Your resume 
* Add projects - have a better connection with github
* Add more subsites - add a blog and make it a habit to add a post on bi-weekly basis (Starting after America Applications)





### Self notes:
* Runs on AWS lightsail server - https://lightsail.aws.amazon.com/ls/webapp/home/instances
* You've cloned your report under `/var/www/html`. To update repo:
    1. just cd to correct directory and git fetch/pull. Make sure index.html included in the directory (default read file for apache)
    2. run `sudo systemctl restart httpd` - to restart apache and make server fetch updated index file.
