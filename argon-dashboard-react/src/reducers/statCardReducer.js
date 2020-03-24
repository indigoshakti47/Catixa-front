export default(
    state={},
    action
) => {
    switch(action.type){
        case "addStatCard":
            console.log("adding ",
            action.payload);
            return state;

        case "getAllStatCards":
                console.log("getting ",
                action.payload);
                return{
                    ...state,
                    statCardState:
                    Object.values(action.payload)
                };
        default:
            return state;
    }
};