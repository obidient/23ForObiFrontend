export const initialState = {
  total: 0,
  villages: [],
};

const villageReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_VILLAGE':
      console.log('ADD_VILLAGE', payload);
      return {
        ...state,
        villages: payload.villages,
      };
    case 'REMOVE_VILLAGE':
      console.log('ADD_VILLAGE', payload);
      return {
        ...state,
        villages: payload.villages,
      };
    default:
      throw new Error(`No case for type ${type} found in villageReducer`);
  }
};

export default villageReducer;
