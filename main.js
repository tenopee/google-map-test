import { Loader } from '@googlemaps/js-api-loader';

initMap(() => {
	const loader = new Loader({
		apiKey: "",
		version: "weekly",
		libraries: ["places"]
	});
	
	const mapOptions = {
		center: {
			lat: 0,
			lng: 0
		},
		zoom: 4
	};
	
	loader.load().then((google) => {
		new google.maps.Map(document.getElementById("map"), mapOptions);
	}).catch(e => {
	// do something
	});
});
