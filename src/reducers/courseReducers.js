import * as types from '../actions/actionTypes';

const compareValues = (key, type='asc') => {
    // console.log(key, type);
    return function(a, b) {
        if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0; 
        }
  
        const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
  
        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }

        return (
            type === 'desc' ? comparison * -1 : comparison
        );
    };
};

const courseReducers = (state = [], action) => {
    console.log('hello reducer', action);
    switch(action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;

        case types.ADD_COURSE:
            return [
                ...state,
                {
                    id: action.id, 
                    title: action.title, 
                    watchHref: action.watchHref, 
                    authorId: action.authorId,
                    length: action.length,
                    category: action.category
                }
            ];

        case types.REMOVE_COURSE:
            return state.filter((item) => {
                return item.id !== action.id;
            });

        case types.SORT_COURSE:
            // console.log(action);
            return [...state].sort(compareValues(action.option, action.sorttype));

        default:
            return state;
    }
};

export default courseReducers;