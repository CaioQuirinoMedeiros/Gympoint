# GYMPOINT

- [API](./gympoint-api/README.md)
- [Web](./gympoint-web/README.md)
- [Mobile](./gympoint-app/README.md)

### About

This project is the [challenge 09](https://github.com/Rocketseat/bootcamp-gostack-desafio-09) of [Rocketseat bootcamp course](https://rocketseat.com.br/bootcamp). It's a gym management application.

### What it does?

This application allows the manager to register students, plans and enrollments through the web platform. The student, through the mobile application, can check in and open help orders, which managers can also respond through the web application.

### Integration

Both web and mobile application consumes the same API, to see all the parts working together clone the repository and follow the steps below to setup each project.

## API

[API Documentation](https://documenter.getpostman.com/view/7189884/SWLb9pCR?version=latest)

### :arrow_down: Installing

**Install the dependencies**

```shell
yarn install
```

### :wrench: Setting up

**Set the environment variables in a _.env_ file as exemplified in the _.env.example_**

**Run the migrations to create the database**

```shell
yarn sequelize db:migrate
```

**Run the seeds to populate the database**

```shell
yarn sequelize db:seed:all
```

### :runner: Running

**Just start the server**

```shell
yarn dev
```

## WEB

### :arrow_down: Installing

**Install the dependencies**

```shell
yarn install
```

### :satellite: Connecting with the API

2. Create a _.env_ file and set a variable `REACT_APP_API_URL` with the value of your server url

- It should looks like this: `CREATE_APP_API_URL=http://127.0.0.1:3333`

### :runner: Running
run in development mode
```shell
yarn start
```

## APP

### :arrow_down: Installing

**Clone the repo and enter the app folder**

```shell
git clone https://github.com/CaioQuirinoMedeiros/Gympoint.git

cd Gympoint/gympoint_app
```

**Install expo-cli**

```shell
npm i -g expo-cli
```

[reference to expo official documentation](https://docs.expo.io/versions/v36.0.0/get-started/installation)

**Install dependencies**

```shell
expo install
```

### Running

**Set the API_URL on `src/config/api-config`**

**Run the app**

```shell
expo start
```

