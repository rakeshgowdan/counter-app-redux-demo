# Getting Started with  App

## fork or clone and run 

```
npm install
```

## INSTALL REDUX
## After successful installation of React, install redux package inside your project.

```
npm i redux
```
## INSTALL REACT-REDUX
## Now install react-redux, which is the official react binding for redux.
```
npm i react-redux
```
## INSTALL REDUX-LOGGER
## This package can show us the logs of our redux project.
```
npm i redux-logger
```
# file structure details
## actions: It contains files where all the actions are defined.
## components: components directory contains all the stateless components (components which do not have state) in our project.
## containers: It contains the stateful components(components which have the state) in our project.
## reducers: Reducers decide how the state can be updated corresponding to a particular action.
## store: This directory deals with the store creation.


# src/containers

## counterComponent.jsx


## import all components. The connect is a component helps to connect mapStateToProps and mapDispatchToProps functions with the component. The incrementCount and decrementCount are actions defined under actions.
## handleBtnActionIncrement and handleBtnActionDecrement are functions which executes with the button clicks. These functions call the corresponding actions. mapStateToProps and mapDispatchToProps will map all states and all the actions to props correspondingly.


# src/Components

## buttons.jsx
## Button onClick function and title are passed as props from CounterComponent.js to this component.

# src/actions
## index.js
## Now we need to declare an action for corresponding functions of the button clicks.

## INCREMENT_COUNT is the action which triggers by clicking the “+” button. Here the count becomes count + 1.
## DECREMENT_COUNT is the action which triggers by clicking the “-” button. Here the count becomes count – 1.

# src/reducers

## index.js
## We need to create and index.js file under ./reducers directory which is used when more than two reducers are present in our project.

## Now, we need to create a CounterReducer.js file in the same directory to trigger the action according to the type.

## Here we initialize the default value of count as 0.
## Switching statements set the state according to the action type


# src/store
## index.js
## At last, we need to create a file named index.js inside ./store directory. This is to store the changed states. Container components read states from here.