
import ReactDOM from 'react-dom/client';
import App from './components/App';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<App/>
</>
);


if('Geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(function(position){
        let lat =position.coords.latitude;
        let lon = position.coords.longitude;
        console.log(lat,lon)
    })
}
else{
    console.log('Browser is not supported Geolocation')
}