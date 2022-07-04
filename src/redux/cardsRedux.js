import shortid from "shortid";

//selectors
export const getFavoriteCards = state => state.cards.filter(card => card.isFavorite === true);

//action 
const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const UPDATE_FAVORITE = createActionName('UPDATE_FAVORITE');

// action creators
export const addCard = payload => ({ type: ADD_CARD, payload });
export const updateFavorite = payload => ({ type: UPDATE_FAVORITE, payload });

const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case UPDATE_FAVORITE:
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    default:
      return statePart;
  };
};

export default cardsReducer;