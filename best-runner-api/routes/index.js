const router = require('express').Router();
const fs = require("fs");
const path = require("path");

let data = {
    "sessions": [
      {id: '1', type: 'Бег', date: '2020-01-05', distance: 2, comment: 'устал'},
      {id: '2', type: 'Ходьба', date: '2019-12-23', distance: 10, comment: 'уфф'},
      {id: '3', type: 'Велосипед', date: '2020-12-04', distance: 6, comment: ''},
      {id: '4', type: 'Лыжи', date: '2020-12-24', distance: 45, comment: 'неплохой результат!'},
    ]
}
//получить данные
router.get('/', (req, res) => {
    res.send(data.sessions);
});

//добавить тренировку
router.post('/', (req, res) => {
    data.sessions = data.sessions.concat(req.body)
    res.send(data.sessions)
});

//удалить тренировку
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const session = data.sessions.find((item) => item.id === id);

    if (session) {
      data.sessions = data.sessions.filter((item) => item.id !== id)
      res.send(data);
    } else {
      res.status(404).send({ message: 'Нет такой тренировки' });
    }
});

//редактирование тренировки
router.post('/:id', (req, res) => {
    const { id } = req.params;
    const session = data.sessions.find((item) => item.id === id);

    if (session) {
      data.sessions = data.sessions.filter((item) => item.id !== id).concat(req.body)
      res.send(data);
    } else {
      res.status(404).send({ message: 'Нет такой тренировки' });
    }
});

module.exports = router;

