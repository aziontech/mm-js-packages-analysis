# Winston and Simple logger Analysis

In this example (test), tried to create a example with Winston and Simple logger, but this lib are not compatible with Web Api, it have some dependencies with NodeJs.


## Problems found

- In both cases, the built occurs without problems with the rutime edge tag, but at the time of execution the error appears.

- Winston have dependencie of process.nextTick

- Simple Logger - The dependency that makes execution impossible is not clear, an internal error occurs when we try to run the project with the production build.