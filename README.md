# Spacetraveling
<br />
<br />
<p align="center">
<img src="./PrtScn/logo.svg" alt="spacetraveling" width="400px"/>
</p>
<br />
Note:
<p>SpaceTraveling is a blog made with Next.js and integrated with Prismic  CMS⚛️  developed in the Ignite Bootcamp by RocketSeat.</p>
<br />

# Screenshots

## Home
<p align="center">
  <img src="./PrtScn/home.png" />
</p>

## Post
<p align="center">
<strong>Post top</strong>
  <img src="./PrtScn/post-top.png" />
</p>

<p align="center">
<strong>Post main</strong>
  <img src="./PrtScn/post-main.png" />
</p>

<p align="center">
<strong>Post footer</strong>
  <img src="./PrtScn/post-footer.png" />
</p>
<br />

# Getting Started

These instructions will get you a copy of the full project up and running on your local machine for development and testing purposes.

The project must be built with npm, so download it below if you don't have any installed on your system.

* **Npm** is distributed with Node.js which means that when you download Node.js, you automatically get npm installed on your computer. [Download Node.js](https://nodejs.org/en/download/)

* **Yarn** is a package manager built by Facebook Team and seems to be faster than npm in general. [Download Yarn](https://yarnpkg.com/en/docs/install)


To run this server you will need a node version 12.0.0 (minimum)

## Prismic

[Prismic](https://prismic.io) is a Content Management System, a tool for editing online content.

You must create a account and a new Type `Posts` whith this format:

![](./PrtScn/prismic.png)

Finally you must add this line to `.env.local` file: (_`example in .env.example file`_)

```ts
PRISMIC_API_ENDPOINT= // Api endpoint
PRISMIC_ACCESS_TOKEN= // Access token
```


# How to Install

* To download the project follow the instructions bellow:


1. Clone project

HTTPS:
```bash
git clone https://github.com/andrelinos/ignite-reactjs-criando-um-projeto-do-zero.git
```
SSH:
```bash
git@github.com:andrelinos/ignite-reactjs-criando-um-projeto-do-zero.git
```

2. Enter folder project
```bash
cd spacetraveling
```

3. Install the dependencies and start the server:

3. `yarn install`

4. `yarn dev`

<br />

___

<br />
<h2> Tecnologias utilizadas: </h2>

- <a href="https://nextjs.org" > Next.js </a>
- <a href="https://www.typescriptlang.org/"> TypeScript </a>
- <a href="https://sass-lang.com"> SASS </a>
- <a href="https://prismic.io"> Prismic CMS </a>

<br />
<hr />
<br />

<p >Desenvolvido com ❤️ por <a href="https://github.com/andrelinos">Andrelino Silva </a>
