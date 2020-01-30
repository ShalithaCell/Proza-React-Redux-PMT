const initState = {
    projects : [
        {id : 1, title : 'First project', content : 'dummy content'},
        {id : 2, title : 'Second project', content : 'dummy content'},
        {id : 3, title : 'Third project', content : 'dummy content'}
    ]
}

const projectReducer = (state = initState, action) =>{

    switch(action.type){
        case 'CREATE_PROJECT' :
            console.log(action.project)
            return state;
            break;
        case 'CREATE_PROJECT_ERROR' :
            console.log('create project error', action.error)
            return state;
        default :
            return state;
    }

}

export default projectReducer