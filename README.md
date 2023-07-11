# About

htmlbuilder-nodejs-bridge is serverside and client tools for uploading static sites.
It is addon for https://github.com/ArtNazarov/htmlbuilder

# О расширении

htmlbuilder-nodejs-bridge это утилита из 2 частей для сервера и клиента для загрузки статических сайтов.
Это дополнение предназначено для https://github.com/ArtNazarov/htmlbuilder


# Using of bridge from serverside

1. Set API key in index.js
2. Upload to serverside files index.js and create folder public
3. You can test receiving and unpacking with zip archive files.zip using send-files.py script

```
python3 send-files.py
```

If all right, for domain example.com, will be create page http://example.com/test_dir/test2.html


# Использование моста со стороны сервера

1. Назначьте ключ API в файле index.js
2. Выгрузите на сервер файл index.js и создайте каталог public
3. Вы можете протестировать загрузку и распаковку архива files.zip, используя скрипт send-files.py

```
python3 send-files.py
```

Если все в порядке, для домена example.com будет создана страница http://example.com/test_dir/test2.html

# Publication of zip archive from client

1. Change domain in send-files.py to own
2. Send API key corresponding to API key from the index.js
2. Call python3 script send-files.py in terminal

```
python3 send-files.py
```

# Публикация zip архива от клиента

1. Установите свой домен в send-files.py
2. Установите ключ API в соответствии со значением API из index.js
2. Запустите скрипт send-files.py в терминале

```
python3 send-files.py
```

During this action:

1. File files.zip will be uploaded to nodejs express server
2. index.js unpack zip to public folder
3. index.js remove from server archive files.zip

Во время этого действия:

1. Файл files.zip выгружается на сервер NodeJS Express
2. Мост index.js распакует содержимое архива в публичный каталог
3. Мост index.js удалит с сервера файл files.zip
