export const filterByUser = (object, currentUserId) => {
    let preferenceArray = Object.values(object);
    for(let i = 0; i < preferenceArray.length; i++){
        let preference = preferenceArray[i];
        if(preference.userId === currentUserId){
        return preference;
        }
    }
    return {};
}

//takes in an object {random: true, sports: false, etc..}
//pushes all the true values into categories array
export const getPreference = (res) => {
    let categories = [];
    let keyPreferences = Object.keys(res); 
    keyPreferences.forEach((preference) => {
        if (res[preference] === true) {
            categories.push(preference);
        }
    })
    return categories;
}
