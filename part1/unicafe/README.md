_This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)._

## Exercises 1.6.-1.11.

Run the exercise with:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Step 1

Implement a web application for collecting customer feedback for Unicafe. There are only three options for feedback: _good_, _neutral_, and _bad_.

The application must display the total number of collected feedback for each category (work only during a single browser session).

## Step 2

Expand your application so that it shows more statistics about the gathered feedback: the total number of collected feedback, the average score (good: 1, neutral: 0, bad: -1) and the percentage of positive feedback.

## Step 3

Refactor the application so that displaying the statistics is extracted into its own _Statistics_ component. The state of the application should remain in the _App_ root component.

## Step 4

Change the application to display statistics only once feedback has been gathered. Show _No feedback given_ in the beginning.

## Step 5

Extract the following two components:

- _Button_ for defining the buttons used for submitting feedback
- _Statistic_ for displaying a single statistic, e.g. the average score.

To be clear: the _Statistic_ component always displays a single statistic, meaning that the application uses multiple components for rendering all of the statistics.

The application's state should still be kept in the root _App_ component.

## Step 6

Display the statistics in an _HTML table_
