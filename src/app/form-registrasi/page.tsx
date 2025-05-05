import {
  getDistricts,
  getProvinces,
  getRegencies,
  getVillages,
} from "@/api/wilayah";
import RegisterForm from "./register-form";
import Separator from "@/components/Separator";

export default async function Home() {
  async function fetchProvinces() {
    "use server";

    try {
      const response = await getProvinces();
      return response.data;
    } catch (err) {
      console.error("Failed to fetch provinces: " + err);
      return [];
    }
  }

  async function fetchRegencies(provinceCode: string) {
    "use server";

    try {
      const response = await getRegencies(provinceCode);
      return response.data;
    } catch (err) {
      console.error("Failed to fetch regencies: " + err);
      return [];
    }
  }

  async function fetchDistricts(regencyCode: string) {
    "use server";

    try {
      const response = await getDistricts(regencyCode);
      return response.data;
    } catch (err) {
      console.error("Failed to fetch districts: " + err);
      return [];
    }
  }

  async function fetchVillages(districtCode: string) {
    "use server";

    try {
      const response = await getVillages(districtCode);
      return response.data;
    } catch (err) {
      console.error("Failed to fetch villages: " + err);
      return [];
    }
  }

  return (
    <div className="flex justify-center p-8 bg-blue-300">
      <div className="grid gap-4 p-4 bg-white border border-gray-300 rounded w-xl">
        <div>
          <h1 className="mb-2 text-3xl font-semibold">Registrasi</h1>
          <p className="text-gray-600">
            Buat akun baru untuk menggunakan aplikasi.
          </p>
        </div>
        <Separator />
        <RegisterForm
          fetchProvinces={fetchProvinces}
          fetchRegencies={fetchRegencies}
          fetchDistricts={fetchDistricts}
          fetchVillages={fetchVillages}
        />
      </div>
    </div>
  );
}
