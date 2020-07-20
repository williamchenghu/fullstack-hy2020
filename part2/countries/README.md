_This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)._

## Exercises 2.12.-2.14.

Run the exercise with:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Step 1

The API https://restcountries.eu provides a data for different countries in a machine readable format, a so-called REST API.

Create an application, in which one can look at data of various countries. The application should probably get the data from the endpoint [all](https://restcountries.eu/rest/v2/all).

The user interface is very simple. The country to be shown is found by typing a search query into the search field.

If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific

If there are ten or fewer countries, but more than one, then all countries matching the query are shown

When there is only one country matching the query, then the basic data of the country, its flag and the languages spoken there, are shown

## Step 2

Improve the application so that when the names of multiple countries are shown on the page there is a button next to the name of the country, which when pressed shows the view for that country
