# IDS JOB-SEEKER

## Getting Started

To get started with JOB-SEEKER, follow these steps:
1. Clone the repository to your local machine using `git clone`.
2. Open Visual Studio Code and navigate to the project folder.
3. Open the terminal in Visual Studio Code.
4. Navigate to the frontEnd folder by entering the following command:
- cd ./frontEnd
- npm install
- npm start

5. Open a web browser and go to: http://localhost:5001/

That's it! You're now ready to use JOB-SEEKER to search for a job online.

## Accounts

JOB-SEEKER has the following accounts:
- Candidate:
- Email: candidate@gmail.com
- Password: P@ssw0rd
- The candidate's account has the ability to search for a job and apply for a job.
- Employer:
- Email: employer@gmail.com
- Password: P@ssw0rd
- An active Employer account has the ability to add a new job from their profile.

Note: The Guest has the ability to search for a job, login, or register a new account.

## Important Notes

- In this app, React and Redux were utilized to organize the state and CSS from scratch. Additionally, i18n (internationalization) was implemented for translation support in Arabic and English languages.
- The program is based on dummy data, so if you encounter a non-functional button, please check the console for any relevant information.
- Local storage was used to store the login user data.
- Local storage was also utilized to save information related to adding a new job by the employer. After submitting a new job, the state is reset to default, and the new job is stored locally.
- You can test the registration/Add New Account form by checking the console to view the data and each case.
- The profile page differs between the employer and the candidate.
- Upon user login, certain properties are displayed, such as the "Apply to Job" button.
- When the "Login / Register" button is clicked, a popup for the login and registration forms will appear. After a successful login, the "Login" or "Register" button will be replaced with a "Profile" button.
- Clicking the "Profile" button will take the user to their profile page, where they can view and manage their account details and perform various actions specific to their role (as an employer or candidate).
- In the profile page, there will be a "Logout" button. Clicking this button will log the user out and return all buttons to their default state.
- All the pages in the app are designed to be responsive. The responsive design ensures that the layout and content of the pages adapt and adjust based on the user's device and screen size.

## Contact

If you have any questions or concerns about JOB-SEEKER, please feel free to contact the project organizer:
- Chaker Yaakoub - Full-stack developer (chakeryb.work@hotmail.com)

They will be more than happy to assist you with any issues you may have.

Thank you for your interest in our project.
