import React, { useState } from 'react';
import axios from 'axios';


const myContext = React.createContext();

function ContextProvider({ children }) {
    const [pickLocation, setPickLocation] = useState(null);
    const [deliverLocation, setDeliverLocation] = useState(null);
    const [isBooked, setIsBooked] = useState(false);
    const [vehicle, setVehicle] = useState('');
    const [distance, setDistance] = useState('');
    const [pickAddress, setPickAddress] = useState('');
    const [deliverAddress, setDeliverAddress] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');



    //this use used for current location
    const reverseGeocode = async (lat, lng) => {
        try {
          const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
          return response.data.display_name;
        } catch (error) {
          console.error("Error reverse geocoding:", error);
          setErrorMessage("Failed to fetch address. Please try again.");
          return null;
        }
      };     
    
      // this is used to set up the current pick up location
            const handleSetPickupLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            setPickLocation({ lat, lng });
    
            const address = await reverseGeocode(lat, lng);
            if (address) {
              setPickAddress(address);
            }
          });
        } else {
          alert("Current location is not supported by your device, buy a new device.");
        }
      };
    
      //this is used to set up current delovery location
      const handleSetDeliveryocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            setDeliverLocation({ lat, lng });
    
            const address = await reverseGeocode(lat, lng);
            if (address) {
              setDeliverAddress(address);
            }
          });
        } else {
          alert("Current location is not supported by your device, buy a new device.");
        }
      };
    



   
   
   
   
    const context = {
        pickLocation,
        setPickLocation,
        deliverLocation,
        setDeliverLocation,
        isBooked,
        setIsBooked,
        vehicle,
        setVehicle,
        distance,
        setDistance,
        pickAddress,
        setPickAddress,
        deliverAddress,
        setDeliverAddress,
        handleSetPickupLocation,
        handleSetDeliveryocation,
        errorMessage,
        setErrorMessage,
        pickupDate,
        setPickupDate,
        pickupTime,
        setPickupTime,
        deliveryDate,
        setDeliveryDate,
        deliveryTime,
        setDeliveryTime,
    };

    return (
        <myContext.Provider value={context}>
            {children}
        </myContext.Provider>
    );
}

export { myContext, ContextProvider };