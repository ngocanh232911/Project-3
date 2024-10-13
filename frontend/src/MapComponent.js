import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
    // Cài đặt tọa độ của cửa hàng
    const storeLocation = { lat: 31.4816, lng: -85.9641 }; // Thay đổi tọa độ cho phù hợp

    // Cài đặt các tùy chọn cho bản đồ
    const mapContainerStyle = {
        width: '100%',
        height: '400px'
    };

    const center = {
        lat: storeLocation.lat,
        lng: storeLocation.lng
    };

    return (
        <LoadScript googleMapsApiKey="YOUR_API_KEY"> {/* Thay YOUR_API_KEY bằng API Key của bạn */}
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
            >
                <Marker position={storeLocation} title="Your Store Location" />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
