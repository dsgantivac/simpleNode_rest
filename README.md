# Deploy test

## Tools used

- __node v10.16.0__
- __express v4.17.1__
- __npm v6.9.0__
- __mysql v8.0.17__

## Enviroment variables

modify the .env file, to change the environment variables.

- PORT: app port
- DB_NAME: database name
- DB_USER: database user
- DB_PASSWORD: database password
- DB_HOST: database host
- DB_LOGGING: show queries on console (if it's not "true", the application assumes that it is false)
- SEQUELIZE_FORCE: drop and create all tables in the database (if it's not "true", the application assumes that it is false)
- SEQUELIZE_LOGGING: show access queries in console (if it's not "true", the application assumes that it is false)


## Running
__npm install__ install node modules.

__npm start__ to run the app

__npm run dev__ to run in develop mode

__npm run test__ to run the test in the app



## Request examples

## get users

http://localhost:3000/users with get method


## create user

http://localhost:3000/users with post method

```javascript
{
    "name": "prueba",
    "email": "prueba@gmail.com",
    "password": "123456"
}
```

## delete user

http://localhost:3000/users with delete method


```javascript
{
    "id": 1
}
```

## login

http://localhost:3000/login with post method

```javascript
{
	"email": "prueba@gmail.com",
	"password": "123456"
}
```




