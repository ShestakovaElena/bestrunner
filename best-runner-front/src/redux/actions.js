import {GET_DATA, ADD_SESSION, DELETE_SESSION, EDIT_SESSION, FILTER_LIST, SORT_LIST} from './types';
import axios from '../axios/axios';

const _getData = (sessions) => ({
  type: GET_DATA,
  payload: sessions
});

export const getData = () => {
  return (dispatch) => {
      return axios.get('/data').then(result => {
          const sessions = result.data.map(a => a);
          dispatch(_getData(sessions));
      });
  };
};

const _addSession = (session) => ({
  type: ADD_SESSION,
  payload: session,
})

export const addSession = (session) => {
    return (dispatch) => {
        const newBook = {
          id: session.id,
          type: session.type,
          date: session.date,
          distance: session.distance, 
          comment: session.comment
        };
         return axios.post('/data', newBook).then(result => {
          dispatch(_addSession(result.data));
        });
    };
};


const _editSession = (session) => ({
  type: EDIT_SESSION,
  payload: session,
})

export const editSession = (session) => {
    return (dispatch) => {
        return axios.post(`data/${session.id}`, session).then(() => {
            dispatch(_editSession(session));
        });
    }
};

const _deleteSession = (id) => ({
  type: DELETE_SESSION,
  payload: id,
})

export const deleteSession = (id) => {
  return (dispatch) => {
      return axios.delete(`data/${id}`).then(() => {
        dispatch(_deleteSession(id));
      })
  }
};

export function sortList(sortBy) {
  return {
    type: SORT_LIST,
    payload: sortBy,
  }
}

export function filterList(type) {
  return {
    type: FILTER_LIST,
    payload: type,
  }
}

