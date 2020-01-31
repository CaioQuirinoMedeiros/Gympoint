# Gympoint - API

[POSTMAN Documentation](https://documenter.getpostman.com/view/7189884/SWLb9pCR?version=latest)

## Test it out

It's deployed on heroku, check it out:
[gympoint-api-caio.herokuapp.com](http://gympoint-api-caio.herokuapp.com)

## Relevant libraries

- [express](https://expressjs.com/pt-br/)
- [sequelize](https://sequelize.org/) (ORM to connect with PostgreSQL database)
- [bcrypt](https://github.com/dcodeIO/bcrypt.js/) (bcrypt for javascript)
- [send-grid](https://sendgrid.com/docs/) (email service)
- [date-fns](https://github.com/date-fns/date-fns) (format dates)
- [yup](https://github.com/jquense/yup) (to validate requests)

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
