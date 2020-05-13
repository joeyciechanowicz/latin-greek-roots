# Latin and greek roots

## Setup

1. Clone the repo
1. Generate the shared data structures
 ```
 cd data && npm i && npm start
```
1. Pick one of the implementations and follow the instructions within that directory

## Project structure
This project is a monorepo with each folder representing a different implementation. Several of the folders (`data`) are shared projects which get included (via `npm` file references) into each project.

### Data
The [data](/data) project contains the code to extract the data from Wikipedia and create the search index.
