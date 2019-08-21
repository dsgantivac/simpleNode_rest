# Deploy test

## Tools used

- __node v10.16.0__
- __express v4.17.1__
- __npm v6.9.0__
- __mysql v8.0.17__

## Enviroment variables

modify the .env file, to change the environment variables.

- PORT
- DB_NAME
- DB_USER
- DB_PASSWORD
- DB_HOST
- DB_LOGGING

## Testing

__npm start__ to run the app

__npm run dev__ to run in develop mode

__npm run test__ to run test



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




