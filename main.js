function initMap() {

    /**
     * Location Markers
     */
    const markers = [
        {
            locationName: 'E-Quad',
            lat:40.350899822767616,
            lng:-74.65048744582154,
            address:'Princeton, NJ 08540'
        },
        {
            locationName: 'Prospect Gardens',
            lat:40.346768,
            lng:-74.656597,
            address:'Washington St, <br>Princeton, NJ 08544'
        },
    ];

    markerIcon = "fox-face.png";

    const centerMap = { lat: 40.3430942, lng:-74.6550739}

    const mapOptions = {
        center: centerMap,
        zoom:14.9,
        disableDefaultUI:true,
        styles: [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#ff8900"
                    },
                    {
                        "weight": "0.81"
                    },
                    {
                        "visibility": "on"
                    },
                    {
                        "saturation": "-7"
                    },
                    {
                        "lightness": "10"
                    },
                    {
                        "gamma": "1.02"
                    }
                ]
            }
        ]
    }

    const map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

    const infoWindow = new google.maps.InfoWindow({
        minWidth:200,
        maxWidth:200,
    });

    for(let i = 0; i < markers.length; i++){
        const marker = new google.maps.Marker({
            position: { lat: markers[i]['lat'], lng: markers[i]['lng']},
            map: map,
            icon: {
                url: "fox-face.png", // Path to your file
                scaledSize: new google.maps.Size(40, 40), // Resizes the image to 40x40 pixels
                size: new google.maps.Size(40, 40), // Dimensions of the source graphic
                origin: new google.maps.Point(0, 0), // Coordinates tracking top-left of the image
                anchor: new google.maps.Point(20, 40) // Anchors the bottom-middle of the pin to the map coordinate
            }
        });

        function createInfoWindow(){
            const infoWindowContent = `
                <div class="info-window-content">
                    <h3>${markers[i]['locationName']}</h3>
                    <address>
                        <p>${markers[i]['address']}</p>
                    </address>
                </div>
            `;

            google.maps.event.addListener(marker, 'click', function() {
                infoWindow.setContent(infoWindowContent);
                infoWindow.open(map, marker);
            });
        }

        createInfoWindow();
    }

    
}