# React and Node Assesment

This is a Next js app build on top of React.It contains a simple data sorting UI with search filter options.
On the other portion,I have created a serverless backend routes that communicates with the mongodb cluster.
However,as Next 13 app based routing is still in beta and cant be used efficiently used in production,i have used a headless semgmented routes which creates and dies instantly when the reques comes.

#### Site is live on:

- [visit](https://react-assessment-8f0eyci3s-alannj.vercel.app/)

## Installation

First clone this repo on your local system.Then hit

```bash
  npm install --y
```

When all the dependencies are installed correcly,hit

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`

You need to add your own clusted url here

## API Reference

All the routes are serverless.

Following are the routes with Parameters they take

#### Get all resturants details

```http
  GET /api/resturants/new
```

| Parameter | Type   | Description        |
| :-------- | :----- | :----------------- |
| `none`    | `none` | retrives all items |

#### Get item

```http
  GET /api/resturants/${params.id}
```

| Parameter | Type       | Description                       |
| :-------- | :--------- | :-------------------------------- |
| `id`      | `ObjectId` | **Required**. Id of item to fetch |

#### Add Reviews

```http
  POST /api/resturants/single
```

| Parameter | Type       | body                              |
| :-------- | :--------- | :-------------------------------- |
| `id`      | `ObjectId` | **Required**. Id of item to fetch |
| `reviews` | `string`   | **Required**. actual review       |

id and reviews are passed as a request body.

#### Database Structure

| model       | Type              | name      |
| :---------- | :---------------- | :-------- |
| `resturant` | `Mongoose.Schema` | Resturant |

#### Resturant Attributes

| attributes | Type       |
| :--------- | :--------- |
| `name`     | `string`   |
| `age`      | `string`   |
| `image`    | `string`   |
| `_id`      | `ObjextId` |
| `address`  | `string`   |
| `reviews`  | `[string]` |

## Note

Login only works with following credentials:

`email`:demo@coralmango.com
`password`:demo

I havent worked on styling the components.Just cared about the required functionality.UI can me made accordingly.
