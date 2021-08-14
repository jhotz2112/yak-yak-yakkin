import React, { Component } from 'react';
export default function GoogleMapApi() {

    return (
        <script>

            {const selectEl = document.getElementById("id_rating");
            M.FormSelect.init(selectEl);

            const address = {location.address};
            const geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key={{ api_key }}`;
            let geoResults, validAddress;
                fetch(geoUrl).then(res => res.json())
                    .then(data => {
                validAddress = data.status === "OK";
            if (validAddress) geoResults = data.results[0];
            if (validAddress) {
                let location = geoResults.geometry.location;
            let map;
            map = new google.maps.Map(
            document.getElementById("map"),
            {
                center: location,
            zoom: 12,
            }
            );
            const marker = new google.maps.Marker({
                position: location,
            map: map,
        });
      }
    })
        </script>
    )
    s
}