import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Dialog } from "radix-ui";

type Doctor = {
  name: string;
  address?: string;
  lat: number; // دائرة العرض
  lng: number; // خط الطول
};

export default function DoctorMap({ doctor }: { doctor: Doctor }) {
  const center: [number, number] = [doctor.lat, doctor.lng];

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/40" />

      <Dialog.Content className="fixed top-1/2 left-1/2 w-[85%] sm:w-110 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-lg flex flex-col">
        <div className="w-full h-80">
          <MapContainer center={center} zoom={15} scrollWheelZoom={false}>
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={center}>
              <Popup>
                <strong>{doctor.name}</strong>
                {doctor.address ? <div>{doctor.address}</div> : null}
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        <Dialog.Close className="mt-4 bg-(--primary-color) hover:bg-(--primary-color)/80 transition duration-300 cursor-pointer text-(--white-text-color) px-4 py-2 rounded ">
          Close
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
