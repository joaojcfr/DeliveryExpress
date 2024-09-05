



import { useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { myContext } from "../Context";
import CenterMap from "./MapCenter";
import styles from './Map.module.css'



const Map = () => {
  const { pickLocation, deliverLocation, pickAddress, deliverAddress ,distance } = useContext(myContext);

  return (
    <div>
    <div className={styles.map} >

   

    <MapContainer className={styles.container} center={[38.722, -9.123]} zoom={13} style={{ height: "390px", width: "100%"  }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <CenterMap pickLocation={pickLocation} deliverLocation={deliverLocation} />
      {pickLocation && (
        <Marker position={[pickLocation.lat, pickLocation.lng]}>
          <Popup>{pickAddress}</Popup>
        </Marker>
      )}
      {deliverLocation && (
        <Marker position={[deliverLocation.lat, deliverLocation.lng]}>
          <Popup>{deliverAddress}</Popup>
        </Marker>
      )}
      {pickLocation && deliverLocation && (
          <Polyline
            positions={[
              [pickLocation.lat, pickLocation.lng],
              [deliverLocation.lat, deliverLocation.lng]
            ]}
            color="blue"
          />
        )}
    </MapContainer> </div>
    <div>
    {distance && <div className={styles.distance} >Distance: {distance.toFixed(2)} km</div>}
    </div>
    

    </div>

  );
};

export default Map;