<p align="center">
  <a href="https://juandav.github.io/" target="blank"><img src="https://svgshare.com/i/GyK.svg" width="180" alt="Next-init Logo" /></a>
</p>
<p align="center">A next init project made for <a href="https://github.com/reactjs-hispano" target="_blank">ReactJS Hispano</a></p>

## Description

Next-init

## Environments
Create file .env.build and add:

| KEY               | VALUE                                                                                                                                          |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| META_ENVIRONMENT_EXAMPLE    | NEXT-INIT |

## Run development app

```bash
yarn dev
# or
now dev
```

## Run production app

Build it with docker:

```bash
# build
yarn docker-build
# or, use multi-stage builds to build a smaller docker image
yarn docker-build-ms
```

Run it:

```bash
yarn docker-run
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
yarn deploy
```