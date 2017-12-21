
export interface Fireplace {
    name: string;
    icon: string;
    location: Location;
    type: string;
    tags?: Array<Tag>;
    parentFireplace?: number;
    relationships?: Array<Relationship>;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Tag {
  name: string;
  description: string;
}

export interface Relationship {
    fireplace: string;
    fireplaceLocation?: Location;
    description?: string;
    relationTag?: Tag;
}
