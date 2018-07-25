# Game of life challenge

## Notes to run the project

The project uses Docker as tool to isolate the application as a service so the usage of it is encouraged to run the app.

## How to run it

The easiest way to run the project is with Docker by running the command below.

```
docker-compose up
```

then, open the browser and go to `localhost:3000`.


If the Docker way doesn't work for you, rename `.env_example` to `.env` and run the command below:

```
yarn dev

```

As same as the docker way, you'll have the app running in you local and to see it you should go to `localhost:3000`
