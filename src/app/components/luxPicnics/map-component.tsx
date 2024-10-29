'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapPin } from 'lucide-react'
import { renderToString } from 'react-dom/server'
import { locations } from './picnic-locationsl'

const MapComponent = ({ selectedLocation, setSelectedLocation }: {
  selectedLocation: number | null,
  setSelectedLocation: (location: number | null) => void
}) => {
  useEffect(() => {
    // Create custom icon using Lucide MapPin
    const customIcon = L.divIcon({
      html: renderToString(
        <MapPin
          size={32}
          color="#0A4B5E" // Lux.Fino gold color
          fill="#0A4B5E"
          strokeWidth={2}
        />
      ),
      className: 'custom-icon',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    })

    // Set custom icon as default for all markers
    L.Marker.prototype.options.icon = customIcon
  }, [])

  return (
    <MapContainer center={[49.1529, -125.9066]} zoom={12} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={[location.lat, location.lng]}
          eventHandlers={{
            click: () => setSelectedLocation(location.id),
          }}
        >
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default MapComponent