# ng2-quick-start
Angular2 quick start example with Just-in-Time (JiT) and Ahead-of-Time (AoT) compilation support.

This example simply follows the offcial angular AoT comlilation [guide](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html).

![](ng2-quick-start.png?raw=true | width=100)

## Getting started with Just-in-Time (JiT)
Clone the repository and run

```
npm install
npm start
```

## Ahead-of-Time (AoT) compilation
Create an AoT build and run the test server with the following command sequence
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
