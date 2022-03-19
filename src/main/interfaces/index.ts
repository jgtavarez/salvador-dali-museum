export interface UseHome {
    data: HomeResp | null;
    loading: boolean
}

export interface HomeResp {
    _id:          string;
    published_at: Date;
    paragraph:    Paragraph[];
    createdAt:    Date;
    updatedAt:    Date;
    __v:          number;
    photo:        Photo;
    id:           string;
}

export interface Paragraph {
    _id:     string;
    title:   string;
    content: string;
    __v:     number;
    id:      string;
}

export interface Photo {
    _id:               string;
    name:              string;
    alternativeText:   string;
    caption:           string;
    hash:              string;
    ext:               string;
    mime:              string;
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

export interface Formats {
    thumbnail: Medium;
    medium:    Medium;
    small:     Medium;
}

export interface Medium {
    name:              string;
    hash:              string;
    ext:               string;
    mime:              string;
    width:             number;
    height:            number;
    size:              number;
    path:              null;
    url:               string;
    provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
    public_id:     string;
    resource_type: string;
}
