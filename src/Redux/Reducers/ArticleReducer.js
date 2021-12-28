const INITIAl_STATE={
    articles:[]
}

function articleReducer(state=INITIAl_STATE,action){
    switch(action.type){
        case 'ADDARTICLE':
            const newArr=[...state.articles];
            newArr.unshift(action.payload);
            return{
                ...state,
                articles : newArr
            }
        case 'LOADARTICLES':{
            return{
                ...state,
                articles:action.payload
            }
        }

    }
    return state;
}
export default articleReducer;

export async function getArticles(dispatch){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(data=>{
            dispatch({
                type:'LOADARTICLES',
                payload:data
            })
    })
}