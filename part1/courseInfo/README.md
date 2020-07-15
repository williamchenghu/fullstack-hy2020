_This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)._

## Exercises 1.1.-1.2. & 2.1.-2.5.

Run the exercise with:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Step 1

Break component _App_ into three new components: _Header_, _Content_, and _Total_.

All data still resides in the _App_ component, which passes the necessary data to each component using _props_.

## Step 2

Refactor the _Content_ component so that it does not render any names of parts or their number of exercises by itself. Instead it only renders three _Part_ components of which each renders the name and number of exercises of one part.

## Step 6

Refactor the _App_ component, define a component responsible for formatting a single course called _Course_.

The component structure of the application can be, for example, the following:

    App
    Course
        Header
        Content
        Part
        Part
        ...

Hence, the _Course_ component contains the components defined in the previous part, which are responsible for rendering the course name and its parts.

The application must work _regardless of the number of parts a course has_, so make sure the application works if you add or remove parts of a course.

Ensure that the console shows no errors!

## Step 7

Show also the sum of the exercises of the course.

## Step 8

Calculate the sum of exercises with the array method _reduce_.

## Step 9

Extend the application to allow for an arbitrary number of courses:

    const courses = [
        {
        name: 'Half Stack application development',
        id: 1,
        parts: [
            {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
            },
            {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
            },
            {
            name: 'State of a component',
            exercises: 14,
            id: 3
            },
            {
            name: 'Redux',
            exercises: 11,
            id: 4
            }
        ]
        },
        {
        name: 'Node.js',
        id: 2,
        parts: [
            {
            name: 'Routing',
            exercises: 3,
            id: 1
            },
            {
            name: 'Middlewares',
            exercises: 7,
            id: 2
            }
        ]
        }
    ]

## Exercise 2.5.

Declare the _Course_ component as a separate module, which is imported by the _App_ component. Include all subcomponents of the course into the same module.
