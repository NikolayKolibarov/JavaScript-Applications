/**
 * Created by NikolayNK on 3.3.2016 г..
 */


$('document').ready(function() {
var greetingDiv = $('#greeting'),
    sessionVisitsSpan =$('#sessionVisits'),
    totalVisitsSpan = $('#totalVisits');

    while(!localStorage.name) {
        localStorage.name = prompt('Enter your name:');
    }

    if(!sessionStorage.sessionVisits) {
        sessionStorage.sessionVisits = 0;
    }

    if(!localStorage.sessionVisits) {
        localStorage.sessionVisits = 0;
    }

    sessionStorage.sessionVisits++;
    localStorage.sessionVisits++;

    greetingDiv.text('Welcome, ' + localStorage.name);
    sessionVisitsSpan.text('Session visits: ' + sessionStorage.sessionVisits);
    totalVisitsSpan.text('Total visits: ' + localStorage.sessionVisits);
});