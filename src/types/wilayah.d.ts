export interface BaseRegion {
    code: string,
    name: string,
}

export interface Province extends BaseRegion {}

export interface Regency extends BaseRegion {}

export interface District extends BaseRegion {}

export interface Village extends BaseRegion {
    postal_code: string,
}

export interface Meta {
    administrative_area_level: 1 | 2 | 3 | 4,
    updated_at: string,
}

export interface WilayahResponse<T extends BaseRegion> {
    data: T[],
    meta: Meta,
}