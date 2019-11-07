# BiteBody.io

BiteBody.io is a full-stack web application that functions as a fitness initiative for people all experience levels, body types, ages, and lifestyle.

## Prerequisites

### Specifications & Tools
* 64-bit environment (Trying to make it system agnostic)
* [Git](https://git-scm.com/downloads)

### Back-end
* [Python 3.7.x](https://www.python.org/downloads/)
* [Pip](https://pip.pypa.io/en/stable/installing/)

### Front-end
* [Node.js](https://nodejs.org/en/)

## Downloading Application

1. Ensure git is installed on computer. You can verify by running the following command on your terminal.
```
git --version
```
2. Clone the GitHub repository.
```
git clone https://github.com/Project-RHR/Apollo.git
```

##  Verify Prerequisites

1. Verify you have Python 3.7.x, open up terminal and run the following command.
```
python -V
```
2. Verify Node.js is installed.
```
npm -version
```

## Running Application

Open two different terminals, one for the back-end and the other for the front-end. **Make sure both applications are running simultaneously.**

### Back-end
1. Change directory (cd) into the project folder.
```
cd Apollo
```
2. Change directory (cd) into the back-end folder.
```
cd back-end
```
3. Install Python dependencies.
```
py -m pip install -r requirements.txt
```
4. Running the API server.
```
python manage.py
```

### Front-end
1. Change directory (cd) into the project folder.
```
cd Apollo
```
2. Change directory (cd) into the back-end folder.
```
cd front-end
```
3. Install Node.js dependencies. 
```
npm install
```
4. Running front-end client.
```
npm run start
```

## Contributing

0. Ensure the repository is cloned and you can change directory (cd) where it is located.
```
git clone https://github.com/Project-RHR/Apollo.git
cd Apollo
```
1. Pull the latest version from GitHub
```
git pull
```
2. Create a branch for your changes. The name of the branch should be relevant to the work/changes being done.
```
git checkout -b "Bug-Fix"
```
3. Add changes to your branch via git add command. "." character can be replace with a specific file if you don't want to add all changed files.
```
git add .
```
4. Commit changes with a relevant message.
```
git commit -m "Bug-Fix: Fixed issue with login."
```
5. Push changes to GitHub
```
git push origin HEAD
```
6. Create Pull Request

7. Send pull request to CECS 491A Discord Group Chat

8. Wait for code review and someone else to approve your changes.

9. Merge changes to master branch.

## Support From Developers

### Contact Information
* System Architect: Bryan Rojas - bryanrojascs@gmail.com

* Scrum Master: Hector Mendoza - mendozahector555@gmail.com

* Documenation lead: David Ibarra - iDavid9764@gmail.com

* Team lead: Malik Coleman - malikai711@gmail.com

## Application Features

1. Login

2. Forgot Password

3. User selection UI for body part selection

4. User Profile

5. Create workout routines

6. Educate users on exercises they can perform 

7. Allow users to follow other members accounts to see their workouts

8. Keep track of fitness goals

9. Alternative options for members going through physical rehabilitation

10. Admin Panel 

11. Workout search engine

12. Meal planner

13. Weight loss program

14. Option to log macros derived from food

15. Food logger to keep track of meals
