# Sber-test

[ссылка на задеплоенную версию](https://phenomenal-kringle-77759b.netlify.app/)

карточки блюд грузятся локально,ввиду отсутсвия возможности поставить сервер для раздачи статики на хост

# Функционал

- Сортировка по типам блюд
- Сортировка до дате 
- Адаптив до 320px

# Используемый стек 

- Frontend 
    - React.js
    - TypeScript
    - axios
    - SCSS
    - Eslint
    - Prettier

# Тестирование
- unit
    - vitest
    - react-testing-library
- e2e
    - cypress

# Как запусить проект
1. Перейти в папку frontend
2. `yarn dev` - инициализирует файлы для фронтенда(для этого нужно находится в папке frontend)
3. `yarn server` - запускает локальный сервер для раздачи файлов(блюд)(для этого нужно находится в папке frontend)