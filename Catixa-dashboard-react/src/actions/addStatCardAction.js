import firebase from "firebaseConfig";

const databaseRef=
firebase.database().ref();

const statCardsRef=
databaseRef.child("stat-cards");

const addStatCardAction=(
    statName,
    statDescription,
    statIcon,
    statIconColor,
    statFooterIcon,
    statFooterIconState,
    statFooterPercentage,
    statFooterText,

) => async dispatch => {
    statCardsRef.push().set({
        statName,
        statDescription,
        statIcon,
        statIconColor,
        statFooterIcon,
        statFooterIconState,
        statFooterPercentage,
        statFooterText,
    })
    .then(()=>{
        dispatch({
            type:"addStatCard"
        })
    } )
};
export default addStatCardAction;