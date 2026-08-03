import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Description from '../../common/description/Description'
const Map = () => {
  const positions = [
    [35.766656034631175, 51.48032398534537],
    [35.81748418225857, 50.94992109451049],
  ]
  return (
    <>
      <div className="space-y-10 my-10">
        <div className="space-y-10">
          <Description
            title="مراجعه حضوری"
            desc="آدرس شعبه اول : تهران خیابان  پاسداران جنب هدیش مال"
          />
          <MapContainer
            className="w-full h-125"
            center={positions[0]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={positions[0]}>
              <Popup>دفتر شاپینو - شعبه تبریز</Popup>
            </Marker>
          </MapContainer>

          <div>
            <Description title="شعبه دوم: تبریز" />
            <div className="flex-ic gap-2 mt-5 font-bold text-neutral-600 text-xl">
              <p>تبریز، زعفرانیه، خیابان پاستور و ...</p>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <MapContainer
            className="w-full h-125"
            center={positions[1]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={positions[1]}>
              <Popup>دفتر شاپینو - شعبه تهران</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  )
}

export default Map
