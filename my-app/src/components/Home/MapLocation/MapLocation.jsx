import { useEffect, useRef } from "react";
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

  useEffect(() => {
    // Coordonnées GPS de 5 Rue de Lancry, 75010 Paris (longitude, latitude)
    const parisCoordinates = [2.3635, 48.8705];
    const transformedCoordinates = fromLonLat(parisCoordinates);

    // Création du marqueur
    const marker = new Feature({
      geometry: new Point(transformedCoordinates),
    });

    // Style du marqueur
    marker.setStyle(
      new Style({
        image: new Icon({
          src: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png", // Icône personnalisée
          scale: 0.5, // Taille du marqueur
        }),
      })
    );

    // Couche vectorielle pour le marqueur
    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker],
      }),
    });

    // Création de la carte
    const map = new Map({
      target: mapRef.current,
      layers: [new TileLayer({ source: new OSM() }), vectorLayer],
      view: new View({
        center: transformedCoordinates,
        zoom: 16,
      }),
    });

    // Nettoyage
    return () => map.setTarget(undefined);
  }, []);

  return (
    <section className="py-12 px-6 bg-charcoal-900 text-center">
      <h2 className="text-3xl font-playfair text-gold-500 mb-4">
        Notre emplacement
      </h2>
      <p className="text-platinum-300 mb-6">
        Venez nous rencontrer au <strong>5 Rue de Lancry, 75010 Paris</strong>.
      </p>

      <div className="relative max-w-6xl mx-auto">
        <div
          ref={mapRef}
          className="w-full h-[500px] rounded-lg shadow-2xl border-2 border-gold-500/20"
        />
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