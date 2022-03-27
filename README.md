## API к 3му заданию для домашнего задания

Как запустить:
```
yarn install //если вы впервые скачали проект
yarn run start //запускает сервер с api
```

GET-запрос: http://localhost:5000/?name=<your_name>&description=<your_description>&price=<your_price>

Любой из параметров может быть пустым

Вернет массив JSON вида:
```
[
    {
        "id": 1,
        "name": "YARD Residence Apart-hotel",
        "description": "Комфортный апарт-отель в самом сердце Санкт-Петербрга. К услугам гостей номера с видом на город и бесплатный Wi-Fi.",
        "image": "http://localhost:3030/img/1.png",
        "remoteness": 2.5,
        "bookedDates": [],
        "price": 2800
    }
]
```