  react-router-dom
             material UI
             mediaqueries
               axios
             fontawesome                 
              emailjs-com
             react-datetime-picker
Backend

Packages used

        Express Generator
            nodemon
             mongoose
             colors
             morgan
Testing

       jest
     jest-coverage
Database
     Mongodb
Container

      Docker-compose

  Built 3 containers for 
    frontend,sever,Database 
Docker-compose files 2 files are there we can run server alone and the project as a whole.

Thae outer docker-compose file is 

version: '3.7'

services:

    frontend:
        build:
            context: ./frontend
        depends_on:
            - server
        command: ["npm", "start"]
        ports:
            - "3000:3000"
        volumes:
            - ./frontend:/home/node/app:delegated
            - react_node_modules:/home/node/app/node_modules
        environment:
            - CHOKIDAR_USEPOLLING=true
        tty: true
        stdin_open: true

    server:
        build:
            context: ./server
        depends_on:
            - mongodb
        command: ["./node_modules/.bin/nodemon", "./bin/www"]
        ports:
            - "4000:4000"
        volumes:
            - ./server:/home/node/app:delegated
            - node_modules:/home/node/app/node_modules
        environment:
            - PORT=4000
        healthcheck:
            test: ["CMD-SHELL", "curl -f http://localhost:4000 || exit 1"]
            interval: 5s
            timeout: 2s
            retries: 10

    mongodb:
        image: mongo
        environment:
            - MONGO_INITDB_DATABASE=mission5
        volumes:
            - mongo_data:/data/db

volumes:
    react_node_modules:
    node_modules:
    mongo_data:
