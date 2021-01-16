# Software Bastards JS Test

This is my js-test for Software Bastards, the main goal of this test is to write a validator who compares API responses. Learn more about the test on https://github.com/softwarebastards/js-test.

# Getting started

Clone this project and run the following command:

```
npm install
```

To see the validator running, run 'npm run start'. This will show a log in the console with the validity of the given example. You could run 'npm run watch' and make changes on the fly. You can change the examples in the index.js file.

# Test

To test the Validator, run the following command

```
npm run test
```

#### Watch for test changes

```
npm run test:watch
```

#### View test coverage

```
npm run test:coverage
```

# Background info

I created two functions in the beginning and just exported those, however I found it beter maintainable to wrap them inside a Validator class. That
way you can extend the validator more easily with other methods or properties. A nice addition for example would be a JSON checker/parser to check whether the incoming data is already parsed or not and parses if not. I tried to make the methods readable and understandable for future developers.
