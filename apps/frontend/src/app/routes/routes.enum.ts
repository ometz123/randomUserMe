const ROUTES = {
  HOME: '/',//screen 0
  NEW_USERS: '/new-users', //screen 1
  SAVED_USERS: '/saved-users', //screen 2
  USER_PROFILE: '/user-profile', //screen 3
};
export default ROUTES;

/*
* Screen 0
This screen will have only two buttons:
▪ “Fetch” button to get the data from random user API and will open Screen 1
▪ “History” button to get saved users from backend and will open Screen 2
* */

/*
* Screen 1
This is a list-based screen, each person will have its own row
▪ Each row will include:
o Thumbnail of the profile picture
o Name: title+first+last
o Gender
o Country
o Phone number
o Email
▪ There will be an option to filter by name and country
▪ Clicking on a row will open full profile screen (Screen 3)
* */

/*
* Screen 2
Identical to screen 1 but displays the saved profiles from the server
* */

/*
* Screen 3
This is will display more information for a profile. It can be opened from Screen 1 or Screen 2
▪ Large image of the person
▪ All the data laid as info form
o Gender
o Editable Name (see below)
o Age + year of birth
o Address:
▪ Street number + name
▪ City
▪ State
o Contact:
▪ Email
▪ Phone
▪ Four buttons:
o “Save” - If the profile is NOT saved in the backend (the previous screen is 1, from
random user API), “Save” button will send the profile info to the backend where
it will be kept in a DB
o “Delete” - If the profile is saved in the DB (the previous screen is 2, from our
server), “Delete” button will remove it from the DB
o “Update” - Name field is editable. The user will be able to modify the name of
the person and click on update button
▪ If this is a DB saved profile, the server will be updated
▪ If the profile is not saved, it will be modified in Screen 1 (list)
o “Back” - navigates back to the previous screen
* */