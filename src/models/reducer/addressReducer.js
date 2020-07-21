const initialState = {};

export default (state = initialState, action = {}) => {
  const { type = '', payload = {} } = action;
  switch (type) {
    case 'addressSave':
      return {
        ...state,
        ...payload,
      }
    default:
      return state;
  }
}