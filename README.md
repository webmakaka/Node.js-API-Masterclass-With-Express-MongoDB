# [Brad Traversy] Node.js API Masterclass With Express &amp; MongoDB [2019, ENG]

**Original src:**  
https://github.com/bradtraversy/devcamper-api

---

<br/>

## 2. HTTP Intro - Headers, Body, Status Codes, etc

<br/>

## 3. Starting Our DevCamper Project

<br/>

### 2. Basic Express Server, dotenv & Git

    $ cd api
    $ npm init -y

    $ npm install --save express dotenv
    $ npm install --save-dev nodemon

    $ npm run dev

<br/>

### 3. Creating Routes & Responses In Express

<br/>

![Application](/img/pic-02-01.png?raw=true)

<br/>

### 4. Using The Express Router

<br/>

### 5. Creating Controller Methods

<br/>

### 6. Intro To Middleware

    $ npm install --save-dev morgan

<br/>

### 7. Postman Environment & Collections

<br/>

## 4. Getting Started With MongoDB & Bootcamps Resource

<br/>

### 1. MongoDB Atlas & Compass Setup

We made an account on mongodb.com

<br/>

### 2. Connecting To The Database With Mongoose

    $ npm install --save mongoose

<br/>

    MongoDB Connected: traversy-node-js-api-masterclass-shard-00-02-9n706.mongodb.net

<br/>

### 3. Colors In The Console

    $ npm install --save colors

<br/>

### 4. Creating Our First Model

<br/>

### 5. Create Bootcamp - POST

    $ curl -d '{
      "user": "5d7a514b5d2c12c7449be045",
    	"name": "Devworks Bootcamp",
    	"description": "Devworks is a full stack JavaScript Bootcamp located in the heart of Boston that focuses on the technologies you need to get a high paying job as a web developer",
    	"website": "https://devworks.com",
    	"phone": "(111) 111-1111",
    	"email": "enroll@devworks.com",
    	"address": "233 Bay State Rd Boston MA 02215",
    	"careers": ["Web Development", "UI/UX", "Business"],
    	"housing": true,
    	"jobAssistance": true,
    	"jobGuarantee": false,
    	"acceptGi": true
    }' \
    -H "Content-Type: application/json" \
    -X POST localhost:5000/api/v1/bootcamps \
    | python -m json.tool

<br/>

    $ curl -d '{
      "user": "5d7a514b5d2c12c7449be046",
    	"name": "ModernTech Bootcamp",
      "description": "ModernTech has one goal, and that is to make you a rockstar developer and/or designer with a six figure salary. We teach both development and UI/UX",
      "website": "https://moderntech.com",
      "phone": "(222) 222-2222",
      "email": "enroll@moderntech.com",
      "address": "220 Pawtucket St, Lowell, MA 01854",
      "careers": ["Web Development", "UI/UX", "Mobile Development"],
      "housing": false,
      "jobAssistance": true,
      "jobGuarantee": false,
      "acceptGi": true
    }' \
    -H "Content-Type: application/json" \
    -X POST localhost:5000/api/v1/bootcamps \
    | python -m json.tool

<br/>

    $ curl -d '{
      "user": "5c8a1d5b0190b214360dc031",
    	"name": "Codemasters",
    	"description": "Is coding your passion? Codemasters will give you the skills and the tools to become the best developer possible. We specialize in full stack web development and data science",
    	"website": "https://codemasters.com",
    	"phone": "(333) 333-3333",
    	"email": "enroll@codemasters.com",
    	"address": "85 South Prospect Street Burlington VT 05405",
    	"careers": ["Web Development", "Data Science", "Business"],
    	"housing": false,
    	"jobAssistance": false,
    	"jobGuarantee": false,
    	"acceptGi": false
    }' \
    -H "Content-Type: application/json" \
    -X POST localhost:5000/api/v1/bootcamps \
    | python -m json.tool

<br/>

    $ curl -d '{
      "user": "5c8a1d5b0190b214360dc032",
    	"name": "Devcentral Bootcamp",
    	"description": "Is coding your passion? Codemasters will give you the skills and the tools to become the best developer possible. We specialize in front end and full stack web development",
    	"website": "https://devcentral.com",
    	"phone": "(444) 444-4444",
    	"email": "enroll@devcentral.com",
    	"address": "45 Upper College Rd Kingston RI 02881",
    	"careers": [
        "Mobile Development",
        "Web Development",
        "Data Science",
        "Business"
      ],
    	"housing": false,
    	"jobAssistance": true,
    	"jobGuarantee": true,
    	"acceptGi": true
    }' \
    -H "Content-Type: application/json" \
    -X POST localhost:5000/api/v1/bootcamps \
    | python -m json.tool

<br/>

### 6. Fetching Bootcamps - GET

    $ curl \
      -H "Content-Type: application/json" \
      -X GET localhost:5000/api/v1/bootcamps \
      | python -m json.tool

<br/>

    $ curl \
    -H "Content-Type: application/json" \
    -X GET localhost:5000/api/v1/bootcamps/5db62fd567c1170dd52c2c34 \
    | python -m json.tool

<br/>

### 7. Updating & Deleting Bootcamps - PUT & DELETE

    $ curl -d '{
    	"housing": true
    }' \
    -H "Content-Type: application/json" \
    -X PUT localhost:5000/api/v1/bootcamps/5db62fd567c1170dd52c2c34 \
    | python -m json.tool

<br/>

    $ curl -d '{
    	"careers": ["UI/UX"]
    }' \
    -H "Content-Type: application/json" \
    -X PUT localhost:5000/api/v1/bootcamps/5db62fd567c1170dd52c2c34 \
    | python -m json.tool

<br/>

    $ curl \
    -H "Content-Type: application/json" \
    -X DELETE localhost:5000/api/v1/bootcamps/5db62fd567c1170dd52c2c34 \
    | python -m json.tool

<br/>

## 5. Custom Error Handling & Mongoose Middleware

<br/>

### 1. Error Handler Middleware

<br/>

### 2. Custom ErrorResponse Class

<br/>

### 3. Mongoose Error Handling [1]

<br/>

### 4. Mongoose Error Handling [2]

    $ curl \
    -H "Content-Type: application/json" \
    -X POST localhost:5000/api/v1/bootcamps \
    | python -m json.tool

---

**Marley**

<a href="https://jsdev.org">jsdev.org</a>

Any questions on eng: https://t.me/jsdev_org  
Любые вопросы на русском: https://t.me/jsdev_ru
