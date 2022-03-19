export interface usePaintings {
    paintings: PaintingsResp[] | null;
    loading: boolean;
    paintingSelected?: PaintingsResp;
    showDetails: boolean;
}

export interface PaintingsResp {
    _id:               string;
    date?:             Date;
    name:              string;
    published_at:      Date;
    createdAt:         Date;
    updatedAt:         Date;
    __v:               number;
    painting:          Painting;
    year:              string;
    painting_info?:    null | string;
    painting_details?: null | string;
    painting_detail:   PaintingDetail;
    id:                string;
}

export interface Painting {
    _id:               string;
    name:              string;
    alternativeText:   string;
    caption:           string;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    width:             number;
    height:            number;
    url:               string;
    provider_metadata: ProviderMetadata;
    formats:           Formats;
    provider:          string;
    related:           string[];
    createdAt:         Date;
    updatedAt:         Date;
    __v:               number;
    id:                string;
}

export enum EXT {
    Jpg = ".jpg",
}

export interface Formats {
    thumbnail: Small;
    small:     Small;
}

export interface Small {
    name:              string;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    width:             number;
    height:            number;
    size:              number;
    path:              null;
    url:               string;
    provider_metadata: ProviderMetadata;
}

export enum MIME {
    ImageJPEG = "image/jpeg",
}

export interface ProviderMetadata {
    public_id:     string;
    resource_type: ResourceType;
}

export enum ResourceType {
    Image = "image",
}

export interface PaintingDetail {
    _id:          string;
    painting_id:  string;
    media:        string;
    dimensions:   string;
    video:        string;
    location:     string;
    history:      string;
    published_at: Date;
    createdAt:    Date;
    updatedAt:    Date;
    __v:          number;
    painting:     string;
    id:           string;
}
