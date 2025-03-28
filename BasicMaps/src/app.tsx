import { Map } from '@vis.gl/react-maplibre';
// import { middleOfUSA } from './lib/constants';
import YouAreHere from './components/you-are-here';

export default function App() {
  return (
    <Map
      initialViewState={{
        longitude: 80.2331,
        latitude:  26.51,
        zoom: 17
      }}
      // mapStyle="/styles/dark.json"
      mapStyle="https://tiles.openfreemap.org/styles/liberty"
    >
      <YouAreHere />
    </Map>
  );
}