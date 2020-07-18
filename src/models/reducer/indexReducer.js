const initialState = {}

export default (state = initialState, action = {}) => {
  const { type = '', payload = {} } = action;
  switch (type) {
    case 'indexSave':
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}