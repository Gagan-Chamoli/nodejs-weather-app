const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

if(process.argv[2]){
    geoCode(process.argv[2], (error, { latitude, longitude, location } = {})=>{
    if(error){
        return console.log(error);
    }
    
    forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log(error);
            }
            
            console.log(location)
            console.log(forecastData);
        
    });    
});
}
else{
    console.log('Please prove a valid location.');
}