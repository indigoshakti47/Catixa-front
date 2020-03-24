import firebase from "firebaseConfig";

const databaseRef=
firebase.database().ref();

const statCardsRef=
databaseRef.child("stat-cards");

const getAllStatCardsAction=(

) => async dispatch => {
    statCardsRef.on(
        "value",
        snapshot=>{
            dispatch({
                type: "getAllStatCards",
                payload: snapshot.val() || {}
            })
        }
    )
    
};
export default getAllStatCardsAction;