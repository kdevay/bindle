interface Checkpoint {
  id: number;
  state: string;
  highway: string;
  location: string;
  mileMarkers?: string;
  coordinates: string;
  lat: number;
  lng: number;
}

export default Checkpoint;
