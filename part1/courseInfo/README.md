*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*

## Exercises 1.1.-1.2.

Run the exercise with:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Step 1

Break component *App* into three new components: *Header*, *Content*, and *Total*.

All data still resides in the *App* component, which passes the necessary data to each component using *props*.

## Step 2

Refactor the *Content* component so that it does not render any names of parts or their number of exercises by itself. Instead it only renders three *Part* components of which each renders the name and number of exercises of one part.