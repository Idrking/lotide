# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @idrking/lotide`

**Require it:**

`const _ = require('@idrking/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actualArray, expectedArray)`: Function that logs a string to the console based on the results of comparing two arrays (supports nested arrays)
* `assertEqual(actual, expected)`: Function that logs a string to the console based on the results of comparing two non-array / non-object values
* `assertObjectsEqual(actualObject, expectedObject)`: Function that logs a string to the console based on the results of comparing two objects (supports nested objects)
* `countLetters(string)`: Function that returns an object with a count of each non-space character in a string
* `countOnly(array, valuesToOmit)`: Function that returns an object with a count of each value in an array except any value specified in the valuesToOmit array
* `eqArrays(arrayOne, arrayTwo)`: Function that compares two arrays and returns true if they match, false otherwise. Supports nested arrays
* `eqObjects(objectOne, objectTwo)`: Function that compares two objects and returns true if they match, false otherwise. Supports nested objects
* `findKey(object, callback)`: Function that takes in an object and a callback, executes the callback on each value in the array and then returns the corresponding key for the first value to return true
* `findKeyByValue(object, value)`" Function that takes in an object and any other value, and returns the first key that corresponds to that value
* `flatten(array)`: Function that takes in an array and flattens it, taking nested arrays and adding their values in place to the return array.
* `head(array)`: Function that returns the first element in an array
* `letterPositions(string)`: Function that takes a string and returns an object with all the indices that each non-space character can be found at, as an object
* `map(array, callback)`: Function that takes in an array and a callback function and returns an array populated with the results of calling the callback on each element of the array
* `middle(array)`: Function that takes in an array and returns the middle element (if odd length) or middle two (if even) elements of an array
* `tail(array)`: Function that returns an array with all elements of the original array except the first
* `takeUntil(array, callback)`: Function that takes in an array and a callback, and executes the callback on each item, returning all values up until the first value on which the callback returns true
* `without(array, itemsToRemove)`: Function that takes in two arrays, and returns a copy of the first array after removed all instances of any element found in the itemsToRemove array