import { District, Province, Regency, Village, WilayahResponse } from "@/types/wilayah"

export async function getProvinces(): Promise<WilayahResponse<Province>> {
    "use server"
    
    const response = await fetch("https://wilayah.id/api/provinces.json")
    
    if (!response.ok) {
        throw new Error("Failed to fetch provinces")
    }
    
    const responseData = await response.json()
    return responseData as WilayahResponse<Province>
}

export async function getRegencies(provinceCode: string): Promise<WilayahResponse<Regency>> {
    "use server"
    
    const response = await fetch(`https://wilayah.id/api/regencies/${provinceCode}.json`)
    
    if (!response.ok) {
        throw new Error("Failed to fetch regencies")
    }
    
    const responseData = await response.json()
    return responseData as WilayahResponse<Regency>
}

export async function getDistricts(regencyCode: string): Promise<WilayahResponse<District>> {
    "use server"
    
    const response = await fetch(`https://wilayah.id/api/districts/${regencyCode}.json`)

    if (!response.ok) {
        throw new Error("Failed to fetch districts")
    }

    const responseData = await response.json()
    return responseData as WilayahResponse<District>
}

export async function getVillages(districtCode: string): Promise<WilayahResponse<Village>> {
    const response = await fetch(`https://wilayah.id/api/villages/${districtCode}.json`)

    if (!response.ok) {
        throw new Error("Failed to fetch villages")
    }

    const responseData = await response.json()
    return responseData as WilayahResponse<Village>
}