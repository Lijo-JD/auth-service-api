# Auth Service API

  

A secure authentication and authorization backend built with **Node.js**, **Express**, **MongoDB** and **TypeScript** — designed to provide a robust authentication layer for web and mobile applications.

  

## 🚀 Features

  

-  **User Registration & Login**

-  **JWT-based Authentication**

-  **Secure Password Hashing**

-  **Middleware for Protecting Routes**

- Modular and TypeScript-friendly architecture

- Environment-based configuration

  

## 🧱 Tech Stack

  

| Technology | Purpose |

|------------|---------|

| **Node.js** | Server runtime |

| **Express** | Web framework |

| **TypeScript** | Type safety |

| **JWT** | Token-based authentication |

| **bcrypt** | Password hashing |

| **dotenv** | Environment variable management |

  

## 📦 Installation

  

1.  **Clone the repository**

  

```bash

git  clone  https://github.com/Lijo-JD/auth-service-api.git

cd  auth-service-api

```

  

2.  **Install depedencies**

  

```bash

npm  install

```

  

3.  **Create a .env file in the root directory**

  

```bash

PORT=<your_port>

MONGO_CONNECTION_URI=<your_database_connection_string>

JWT_SECRET=<your_jwt_secret>

```

  

⚠️ Replace the placeholder values with your own secure secrets and connection strings.

  

4.  **Available Scripts***

  

```bash

npm  run  dev  #Start the dev server with hot reload

npm  run  build  #Compile TypeScript

npm  start  #Start production server

```

  

## 📡 API Endpoints

  

| Method | Path | Description |

|--------|------|-------------|

| POST | /user/register | Registers User, accepts email, password, confirmPassword |

| POST | /user/login | Login functionality, accepts email, password |

| PUT | /user/change-password | Changes password, protected route, accepts oldPassword, newPassword |

| GET | /post/?search= | Protected, Fetches posts for logged-in user, accepts search query |

| POST | /post/create | Protected, Creates post, accepts title, post |

| PUT | /post/update/:id | Protected, Updates post by id, accepts title, post |

| DELETE | /post/delete/:id | Protected, Deletes post by id |

## 🛡 Security Considerations

-   Store JWTs securely (e.g., HTTP-only cookies or client memory depending on your frontend)
    
-   Use HTTPS for production environments
    
-   Apply rate limiting and validation middleware where applicable

## 🧠 Best Practices

Consider adding:

-   Refresh token mechanism
    
-   Role-based access controls
    
-   Token expiry and secret rotation
    
-   Input validation (schema validation, etc.)

## 🤝 Contribution

1.  Fork this repository
    
2.  Create your feature branch
    
3.  Commit your changes
    
4.  Open a pull request

## 📜 License

This project is licensed under the **MIT License**.