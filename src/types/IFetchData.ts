export interface Original {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size: string;
    webp: string;
    frames: string;
    hash: string;
}
export interface Images {
    original: Original;
}

export interface Datum {
    id: string;
    slug: string;
    images: Images;
}

export interface Pagination {
    total_count : number;
    count : number;
    offset : number;
}

export interface Meta {
    status: number;
    msg: string;
    response_id: string;
}

export interface IFetchData {
    data: Datum[];
    pagination: Pagination;
    meta: Meta;
}
export interface IFetchDataId {
    data: Datum;
    pagination: Pagination;
    meta: Meta;
}
