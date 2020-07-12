import I from 'immutable';

const initialStore = I.fromJS({
  count: 5,
  todoList: [
    {id: 1, text: 'body 1'}
  ]
});

export default function reducer(store = initialStore, action) {

  const data = I.fromJS(action.data);

  switch (action.type) {

    case 'ADD_TODO':
      return store.set('todoList', store.get('todoList', I.List()).unshift(data));

    case 'DELETE_TODO':
      return store.set('todoList', store.get('todoList', I.List()).delete(action.data));

    case 'TOGGLE_IS_TODO_PAGE':
      return store.set('isTodoPage', !store.get('isTodoPage', true));

    case 'SET_USERS':
      return store.set('users', action.data)

    default:
      return store;
  }
}
