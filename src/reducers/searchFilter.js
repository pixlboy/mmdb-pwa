import FuzzySearch from 'fuzzy-search';

function performSearch(movies, val){
    const searcher = new FuzzySearch(
        movies,
        ['name', 'year'], {
            caseSensitive: false
        }
    );
    //store matched items
    return searcher.search(val);
}

const searchFilter = (state = [], action) => {
    switch (action.type) {
      case 'SEARCH_ITEM':
        return [
          ...state,
          performSearch(state, action.query)  
        ]
      default:
        return state
    }
  }
  
  export default searchFilter