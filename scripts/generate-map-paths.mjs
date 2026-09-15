import fs from 'fs';

const geo = JSON.parse(fs.readFileSync('public/assets/data/syria_provinces_opt.geojson', 'utf8'));

const minLon = 35.6133;
const maxLon = 42.3746;
const minLat = 32.3118;
const maxLat = 37.3187;

// Dimensions for SVG viewBox (0 0 800 700)
const width = 800;
const height = 700;
const padding = 20;

// Mercator-like projection
const midLatRad = (34.8 * Math.PI) / 180;
const cosMidLat = Math.cos(midLatRad);

function project([lon, lat]) {
  const x = padding + ((lon - minLon) / (maxLon - minLon)) * (width - 2 * padding);
  // Invert Y because latitude goes up but SVG Y goes down
  const y = padding + ((maxLat - lat) / (maxLat - minLat)) * (height - 2 * padding);
  return [Number(x.toFixed(1)), Number(y.toFixed(1))];
}

function ringToPath(ring) {
  return ring
    .map((pt, idx) => {
      const [x, y] = project(pt);
      return `${idx === 0 ? 'M' : 'L'}${x},${y}`;
    })
    .join(' ') + ' Z';
}

function geometryToD(geometry) {
  if (geometry.type === 'Polygon') {
    return geometry.coordinates.map(ringToPath).join(' ');
  } else if (geometry.type === 'MultiPolygon') {
    return geometry.coordinates.map(poly => poly.map(ringToPath).join(' ')).join(' ');
  }
  return '';
}

// Map English GeoJSON province names to our governoratesData IDs
const nameToId = {
  'Damascus': 'damascus',
  'Rif Dimashq': 'rif-dimashq',
  'Aleppo': 'aleppo',
  'Homs': 'homs',
  'Hamah': 'hama',
  'Lattakia': 'latakia',
  'Tartus': 'tartus',
  'Idlib': 'idlib',
  'Dayr Az Zawr': 'deir-ez-zor',
  'Ar Raqqah': 'raqqa',
  'Al Ḥasakah': 'hasakah',
  'Dar`a': 'daraa',
  'As Suwayda': 'sweida',
  'Quneitra': 'quneitra'
};

const provincesData = geo.features.map(f => {
  const name = f.properties.province_name;
  const id = nameToId[name] || name.toLowerCase().replace(/\s+/g, '-');
  const pathD = geometryToD(f.geometry);
  
  // Approximate centroid
  let sumX = 0, sumY = 0, count = 0;
  function addPts(pts) {
    if (typeof pts[0] === 'number') {
      const [px, py] = project(pts);
      sumX += px;
      sumY += py;
      count++;
    } else {
      pts.forEach(addPts);
    }
  }
  addPts(f.geometry.coordinates);
  const cx = Number((sumX / count).toFixed(1));
  const cy = Number((sumY / count).toFixed(1));

  return {
    id,
    geoName: name,
    pathD,
    center: [cx, cy]
  };
});

fs.writeFileSync('src/data/syriaMapPaths.ts', `export interface ProvincePath {
  id: string;
  geoName: string;
  pathD: string;
  center: [number, number];
}

export const syriaMapProvinces: ProvincePath[] = ${JSON.stringify(provincesData, null, 2)};
`);

console.log('Successfully generated syriaMapPaths.ts with 14 provinces!');
