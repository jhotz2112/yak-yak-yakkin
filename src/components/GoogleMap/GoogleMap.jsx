import { useRef, useEffect } from "react";
export default function GoogleMap({ address, className }) {
    const mapRef = useRef();
    
    useEffect(() => {
        console.log(address);
        console.log(window.myKey);
        const geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${window.myKey}`;
        let geoResults, validAddress;
        fetch(geoUrl).then(res => res.json())
        .then(data => {
            validAddress = data.status === "OK";
            if (validAddress) geoResults = data.results[0];
            console.log(geoResults, validAddress)
        })
        .then(() => {
            if (validAddress) {
                let location = geoResults.geometry.location;
                const map = new window.google.maps.Map(
                    mapRef.current,
                    {
                        center: location,
                        zoom: 12,
                        mapId: "2a654215f91e0f34"
                    }
                    );
                    const marker = new window.google.maps.Marker({
                        position: location,
                        map: map,
                    });
                }
            })       
    }, [address]);

    return (
        <div ref={mapRef} className={className} />
    )
}