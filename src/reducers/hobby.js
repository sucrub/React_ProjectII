const initState = {
    list: [],
    activeId: null,
}

const hobbyReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_HOBBY': {
            const newList = [...state.list, action.payload];
            return {
                ...state,
                list: newList,
            }
        }
        case 'SET_ACTIVE_HOBBY': {
            const newActiveId = action.payload.id;
            return {
                ...state,
                activeId: newActiveId,
            }
        }
        default: {
            return state;
        }
    }
}

export default hobbyReducer