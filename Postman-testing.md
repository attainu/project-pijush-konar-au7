## Testing with Postman

1) Registering
- POST: http://localhost:5000/users/register
- Body - x-www-form-urlencoded
| Key | Value
--- | ---
firstname | Pijush
lastname | Konar
email | pjk612@gmail.com
password | password123
password2 | password123

2) Login
- POST: http://localhost:5000/users/login
- Body - x-www-form-urlencoded
| Key | Value
--- | ---
email | pjk612@gmail.com
password | password123

- Result: success, JWT token: 'Bearer { JWT }'

3) Current User
- GET: http://localhost:5000/users/current
- Headers: Authorization - Bearer JWT Token

4) Current Profile
- GET: http://localhost:5000/profile

5) Admin
- : http://localhost:5000/users/admin
- 