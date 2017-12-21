export interface Fireplace {
  name: string;
  icon: string;
  location: Coordinates;
  type: string;
  tags?: Array<Tag>;
  parentFireplace?: number;
  relationships?: Array<Relationship>;
}

export interface Coordinates {
  accuracy: number;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number;
  longitude: number;
  speed: number | null;
}

export interface Tag {
  name: string;
  description: string;
}

export interface Relationship {
  fireplace: string;
  fireplaceLocation?: Coordinates;
  description?: string;
  relationTag?: Tag;
}
