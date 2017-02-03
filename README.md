# ng2-quick-start
Angular2 quick start example with Just-in-Time (JIT) and Ahead-of-Time (AOT) compilation support.

This example simply follows the offcial angular AOT comlilation [guide](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html).

![](ng2-quick-start.png?raw=true | width=100)

## Getting started with Just-in-Time (JIT)
Clone the repository and run

```
npm install
npm start
```

## Ahead-of-Time (AOT) compilation
Create an AOT build and run the test server with the following command sequence
```
npm run build:aot
npm run lite:aot
```

## Running End-To-End (E2E) tests
First of all prepare the testing environment by downloading chromdriver and selenium standalone server by running
```
npm run e2e:up
```
Finally to start e2e test run
```
npm run e2e
```
