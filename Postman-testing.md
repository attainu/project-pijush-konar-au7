## Testing with Postman

1) Registering
- POST: Local Server - http://localhost:5000/users/register
- POST: Production Server - https://tutionapp.herokuapp.com/users/register
- Body - x-www-form-urlencoded
| Key | Value
--- | ---
firstname | Pijush
lastname | Konar
email | pijush@my.com
password | Saidul#123
password2 | Saidul#123

2) Login
- POST: Local Server - http://localhost:5000/users/login
- POST: Production Server - https://tutionapp.herokuapp.com/users/login
- Body - x-www-form-urlencoded
| Key | Value
--- | ---
email | pijush@my.com
password | Saidul#123

- Result: success, JWT token: 'Bearer { JWT }'

3) Current User
- GET: Local Server - http://localhost:5000/users/current
- GET: Production Server - https://tutionapp.herokuapp.com/users/current
- Headers: Authorization - Bearer JWT Token

4) Current Profile
- GET: Local Server - http://localhost:5000/profile
- GET: Production Server - https://tutionapp.herokuapp.com/profile

5) Admin
- : Local Server - http://localhost:5000/users/admin
- : Production Server - https://tutionapp.herokuapp.com/users/admin
- 