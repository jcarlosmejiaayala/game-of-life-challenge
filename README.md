# Game of life challenge

## Notes to run the project

The project uses Docker as tool to isolate the application as a service so the usage of it is encouraged to run the app.

## How to run it

The easiest way to run the project is with Docker by running the command below.

```
docker-compose up
```

then, open the browser and go to `localhost:3000`.


If the Docker mode doesn't work for you, first install yarn globally by npm or any package manager of your choice, then rename `.env_example` to `.env`, in case that modules aren't installed you will need to run the command below, otherwise, so skip the installation and go to the next step below.

```
yarn install

```

Run the command below to initiliaze the project

```
yarn dev

```

As with docker, you will have the app running in you local and to see it you should go to `localhost:3000`
