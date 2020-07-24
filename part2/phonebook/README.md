_This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)._

## Exercises 2.6.-2.11.

Run the exercise with:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Step 1

Let's create a simple phonebook. **_In this part we will only be adding names to the phonebook_**.

Let us start with implementing the addition of a person to phonebook.

**NB:**

- you can use the person's name as value of the _key_ property
- remember to prevent the default action of submitting HTML forms!

## Step 2

Prevent the user from being able to add names that already exist in the phonebook.

Issue a warning with the alert command when such an action is attempted.

## Step 3

Expand the application by allowing users to add phone numbers to the phone book. You will need to add a second _input_ element to the form (along with its own event handler).

## Step 4

Implement a search field that can be used to filter the list of people by name.

Implement the search field as an input element that is placed outside the HTML form. The filtering logic shown in the image is _case insensitive_, meaning that the search term arto also returns results that contain Arto with an uppercase A.

## Step 5

Refactor the application by extracting suitable parts into new components. Maintain the application's state and all event handlers in the _App_ root component. It is sufficient to extract **_three_** components from the application.

## Step 6

Store the initial state of the application in the file _db.json_, which should be placed in the root of the project.

Modify the application such that the initial state of the data is fetched from the server using the _axios_-library. Complete the fetching with an Effect hook.

## Step 7

Update the app so that the numbers that are added to the phonebook are saved to a backend server.

## Step 8

Extract the code that handles the communication with the backend into its own module (src/services/data.js)
