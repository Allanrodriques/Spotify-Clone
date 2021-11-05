export const initialState ={
    user: null,
    playlist:[],
    playing:false,
    item:null,
    //token:'BQCoK2gAWLqOgT-Yx1slpNN15ujUwGrfpWSUPoAjDoTdxYej7Zyd7VcLnEnAqzHofc1LxBNnazBaNj0FTFtjbBBh3dKB8NQBjcKezL-865Dhbm-RjPWVt6gL_0cHyuh1VSZg8AkDbzjig85sOUBBYFPKWLnVpFL1TGpCyPIiJXcLzgZi4Drk'

}

const reducer = (state,action) => { 
console.log(action);

    // action  -> type ,  [payload]
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            };
            
        case 'SET_TOKEN':
                return {
                  ...state,
                  token:action.token
                };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly
            }
        case "SET_PLAYING":
                return {
                  ...state,
                  playing: action.playing,
                };
        case "SET_ITEM":
                return {
                    ...state,
                    item: action.item,
                };
        case "SET_TOP_ARTISTS":
                return {
                    ...state,
                    top_artists: action.top_artists,
                    };
        case "SET_SPOTIFY":
                return {
                    ...state,
                    spotify: action.spotify,
                    };
            default:
            return state;
    }
}; 
export default reducer;