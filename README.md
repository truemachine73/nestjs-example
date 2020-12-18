## Установка

```bash
$ npm install
```

## Запуск

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Тесты

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Домашнее задание

1. Развернуть NestJS приложение, в качестве БД используем PostgreSQL, в качестве ORM использовать TypeORM
1. Реализовать приложение в котором есть такие сущности как: **пользователи, товары, корзина пользователя**</br> 
   > Ниже прикрепляю схемы с полями которые должны быть обязательно в вашем приложения, можете добавлять свои по усмотрению.
   >> - У продукта обязательно есть создатель</br>
   >> - У пользователя есть список с его добавленными продуктами</br>
   >> - У пользователя есть список продуктов, которые он добавил в корзину
   1. Схема товары: 
      1. id - (number|required)
      1. title - (string|required)
      1. description - (string)
      1. price - (number|required)
      1. photo - (string)
      1. created_user_id - (number|required)
   1. Схема пользователя:
       1. id - (number|required)
       1. name - (string|required)
       1. description - (string)
       1. price - (number|required)
       1. photo - (string)
       1. products
    1. Схему корзину опишите сами
1. Пользователь может создать/редактировать свой товар и пользователь может добавить товары в корзину
1. Добавить валидацию, если не переданы обязательные параметры
1. Развернуть миграции
1. Развернуть сиды
1. Если останется время добавить авторизацию https://docs.nestjs.com/security/authorization
   | https://docs.nestjs.com/security/authentication
