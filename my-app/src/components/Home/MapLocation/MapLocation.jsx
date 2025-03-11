import { useEffect, useRef, useState } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import { Icon, Style } from "ol/style";

const OpenLayersMap = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const parisCoordinates = [2.3635, 48.8705];
    const transformedCoordinates = fromLonLat(parisCoordinates);

    const marker = new Feature({
      geometry: new Point(transformedCoordinates),
    });

    marker.setStyle(
      new Style({
        image: new Icon({
          src: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
          scale: 0.5,
        }),
      })
    );

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker],
      }),
    });

    mapInstance.current = new Map({
      target: mapRef.current,
      layers: [new TileLayer({ source: new OSM() }), vectorLayer],
      view: new View({
        center: transformedCoordinates,
        zoom: 16,
      }),
    });

    setIsMapLoaded(true);

    return () => {
      if (mapInstance.current) {
        mapInstance.current.setTarget(null);
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 bg-charcoal-900 text-center">
      <h2 className="text-3xl font-playfair text-gold-500 mb-4">
        Notre emplacement
      </h2>
      <p className="text-platinum-300 mb-6">
        Venez nous rencontrer au <strong>5 Rue de Lancry, 75010 Paris</strong>.
      </p>

      {/* Conteneur principal qui assure une bonne mise en page */}
      <div className="relative w-full mx-auto max-w-4xl px-4 sm:px-6">
        <div
          ref={mapRef}
          className="w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-lg shadow-lg border-2 border-gold-500/20 bg-gray-200"
        />
        {/* Message d'erreur si la carte ne se charge pas */}
        {!isMapLoaded && (
          <p className="text-red-500 mt-2 text-sm">
            ❌ La carte ne s&apos;est pas chargée correctement.
          </p>
        )}

        {/* Overlay avec l'adresse */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 left-4 bg-charcoal-800/90 text-platinum-300 px-4 py-2 rounded-lg text-sm font-medium">
            <span className="text-gold-500">📍</span> 5 Rue de Lancry, 75010 Paris
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenLayersMap;
