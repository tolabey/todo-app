import I from 'immutable';

const initialStore = I.fromJS({
  count: 5,
  todoList: [
    {id: 1, text: 'todo 1'}
  ]
});

export default function reducer(store = initialStore, action) {

  const data = I.fromJS(action.data);
  console.log('delete', data)

  switch (action.type) {

    case 'ADD_TODO':
      return store.set('todoList', store.get('todoList', I.List()).unshift(data));

    case 'DELETE_TODO':
      return store.set('todoList', store.get('todoList', I.List()).delete(action.data));

    default:
      return store;
  }
}
