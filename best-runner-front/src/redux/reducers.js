import {GET_DATA, ADD_SESSION, DELETE_SESSION, EDIT_SESSION, FILTER_LIST, SORT_LIST} from './types';

export const initialState = {
    filterBy: 'all',
    sessions: [
        {"id": '1', "type": 'Бег', "date": '2020-01-05', "distance": "2", "comment": 'устал'},
        {"id": '2', "type": 'Ходьба', "date": '2019-12-23', "distance": "10", "comment": 'уфф'},
        {"id": '3', "type": 'Велосипед', "date": '2020-12-04', "distance": "6", "comment": ''},
        {"id": '4', "type": 'Лыжи', "date": '2020-12-24', "distance": 45, "comment": 'неплохой результат!'},
        
    ]
    
}
let newStore
export function rootReducer(store = initialState, action) {
    switch (action.type) {
        //получить данные с сервера
        case GET_DATA:
            return { ...store, sessions: action.payload }
        
        //добавить тренировку
        case ADD_SESSION:
          return { ...store, sessions: action.payload }

        // удалить тренировку
        case DELETE_SESSION:
            newStore = store.sessions.filter((item) => {
                return item.id !== action.payload
            })
            return { ...store, sessions: newStore}

        //изменить тренировку
        case EDIT_SESSION:
            newStore = store.sessions.filter((item) => {
                return item.id !== action.payload.id
            })
            return { ...store, sessions: [...newStore, action.payload]}

        //сортировка столбцов
        case SORT_LIST:
            newStore = store.sessions.map(a => a);
            if (action.payload === 'distance'){ 
                return {
                ...store, sessions: newStore.sort((a, b) => (a.distance > b.distance ? 1 : -1))
              }
            }
            else if (action.payload === 'date'){ 
                return {
                ...store, sessions: newStore.sort((a, b) => (a.date > b.date ? 1 : -1))
              }
            }
        // фильтрация данных
        case FILTER_LIST:
            return { ...store, filterBy: action.payload}
        
            default:
          return store
    }
}