const activities = [];
// const today = new Date()
const automaticDate = new Date().toLocaleDateString('da-DK');
function addActivity(date, activity, duration) {
if(typeof(date) == 'string' && typeof(activity) == 'string' && typeof(duration) == 'number') {
activities.push({'date':date || automaticDate,
'activity':activity,
'duration':duration
});
}
}
addActivity('2/18/2019', 'News Channels', 45);
addActivity('09/19/2019', 'facebook', 30);
addActivity('09/19/2019', 'slack', 15);
addActivity('09/19/2019', 'youtube', 40);
addActivity('09/19/2019', 'News Channels', 50);
addActivity('', 'facebook', 40);
addActivity('', 'slack', 15);
console.log(activities);

// Show status for the activity

function showStatus() {
    let sumOfDuration = 0;
    if(activities.length == 0) {
        return 'Add some activities before calling showStatus.'
    } else { 
    for (let i = 0; i < activities.length; i++) {
        sumOfDuration += activities[i].duration;
    }  
    return `You have added ${activities.length} activities. They amount ${sumOfDuration} min. of usage.`  
}
}
console.log(showStatus());

// usage limitation


function showMyLimit(limit) {
    let sumOfDuration = 0;
    for (let i = 0; i < activities.length; i++) {
        sumOfDuration += activities[i].duration;
    }  
        if(sumOfDuration >= limit) {
    return `You have reached your limit, no more smartphoning for you!`;
    }
    return `You have not reched your limits yet. `
}
console.log(showMyLimit(100));








