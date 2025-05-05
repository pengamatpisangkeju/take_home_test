"use client";

import Button from "@/components/Button";
import FormField from "@/components/form/FormField";
import Input from "@/components/form/Input";
import Select, { Option } from "@/components/form/Select";
import Textarea from "@/components/form/Textarea";
import { District, Province, Regency, Village } from "@/types/wilayah";
import { ChangeEvent, useEffect, useState } from "react";
import { validateForm } from "./validation";

export default function RegisterForm({
  fetchProvinces,
  fetchRegencies,
  fetchDistricts,
  fetchVillages,
}: {
  fetchProvinces: () => Promise<Province[]>;
  fetchRegencies: (provinceCode: string) => Promise<Regency[]>;
  fetchDistricts: (regencyCode: string) => Promise<District[]>;
  fetchVillages: (districtCode: string) => Promise<Village[]>;
}) {
  const [provincesData, setProvincesData] = useState<Province[]>([]);
  const [regenciesData, setRegenciesData] = useState<Regency[]>([]);
  const [districtsData, setDistrictsData] = useState<District[]>([]);
  const [villagesData, setVillagesData] = useState<Village[]>([]);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const initialFormState = {
    nama_lengkap: "",
    nama_ibu: "",
    tanggal_lahir: "",
    email: "",
    no_hp: "",
    alamat: "",
    provinsi: "",
    kabupaten: "",
    kecamatan: "",
    kelurahan: "",
    rt: "",
    rw: "",
    kode_pos: "",
  }

  const [formData, setFormData] = useState(initialFormState);

  const [isLoading, setIsLoading] = useState({
    regencies: false,
    districts: false,
    villages: false,
  });

  const provinceOptions: Option[] = [
    ...provincesData.map((province) => ({
      text: province.name,
      value: province.code,
    })),
  ];

  const regenciesOptions: Option[] = !isLoading.regencies
    ? [
        ...regenciesData.map((regency) => ({
          text: regency.name,
          value: regency.code,
        })),
      ]
    : [{ text: "Memuat...", value: "" }];

  const districtsOptions: Option[] = !isLoading.districts
    ? [
        ...districtsData.map((district) => ({
          text: district.name,
          value: district.code,
        })),
      ]
    : [{ text: "Memuat...", value: "" }];

  const villageOptions: Option[] = !isLoading.villages
    ? [
        ...villagesData.map((village) => ({
          text: village.name,
          value: village.code,
        })),
      ]
    : [{ text: "Memuat...", value: "" }];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProvinceChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      kabupaten: "",
      kecamatan: "",
      kelurahan: "",
    }));

    if (value) {
      setIsLoading((prev) => ({
        ...prev,
        regencies: true,
      }));
      const regencies = await fetchRegencies(value);
      setRegenciesData(regencies);
      setIsLoading((prev) => ({
        ...prev,
        regencies: false,
      }));
    } else {
      setRegenciesData([]);
    }
  };

  const handleRegencyChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      kecamatan: "",
      kelurahan: "",
    }));

    if (value) {
      setIsLoading((prev) => ({
        ...prev,
        districts: true,
      }));
      const districts = await fetchDistricts(value);
      setDistrictsData(districts);
      setIsLoading((prev) => ({
        ...prev,
        districts: false,
      }));
    } else {
      setDistrictsData([]);
    }
  };

  const handleDistrictChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      kelurahan: "",
    }));

    if (value) {
      setIsLoading((prev) => ({
        ...prev,
        villages: true,
      }));
      try {
        const villages = await fetchVillages(value);
        setVillagesData(villages);
      } catch (error) {
        console.error("Failed to fetch villages:", error);
      } finally {
        setIsLoading((prev) => ({
          ...prev,
          villages: false,
        }));
      }
    } else {
      setVillagesData([]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { isValid, errors: validationErrors } = validateForm(formData);
    setErrors(validationErrors);

    if (!isValid) {
      const firstError = Object.keys(validationErrors)[0];
      if (firstError) {
        document.querySelector(`[name="${firstError}"]`)?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center'
        });
      }
      return;
    }

    if (!isConfirmed) {
      alert("Harap konfirmasi bahwa data sudah valid");
      return;
    }

    localStorage.setItem("form_data", JSON.stringify(formData));
    alert("Registrasi berhasil")
    setFormData(initialFormState)
  };

  useEffect(() => {
    async function fetch() {
      const response = await fetchProvinces();
      setProvincesData(response);
    }

    fetch();
  }, []);

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <FormField label="Nama Lengkap" error={errors.nama_lengkap} required={true}>
        <Input
          name="nama_lengkap"
          value={formData.nama_lengkap}
          onChange={handleChange}
        />
      </FormField>

      <FormField label="Nama Ibu" error={errors.nama_ibu} required={true}>
        <Input
          name="nama_ibu"
          value={formData.nama_ibu}
          onChange={handleChange}
        />
      </FormField>

      <FormField label="Tanggal Lahir" error={errors.tanggal_lahir} required={true}>
        <Input
          name="tanggal_lahir"
          type="date"
          value={formData.tanggal_lahir}
          onChange={handleChange}
        />
      </FormField>

      <FormField label="Email" error={errors.email} required={true}>
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </FormField>

      <FormField label="No. Handphone" error={errors.no_hp} required={true}>
        <Input
          name="no_hp"
          value={formData.no_hp}
          onChange={handleChange}
        />
      </FormField>

      <FormField label="Alamat" error={errors.alamat} required={true}>
        <Textarea
          name="alamat"
          value={formData.alamat}
          onChange={handleChange}
        />
      </FormField>

      <FormField label="Provinsi" error={errors.provinsi} required={true}>
        <Select
          name="provinsi"
          options={provinceOptions}
          placeholder="Pilih Provinsi"
          value={formData.provinsi}
          onChange={handleProvinceChange}
        />
      </FormField>

      <FormField label="Kabupaten" error={errors.kabupaten} required={true}>
        <Select
          name="kabupaten"
          options={regenciesOptions}
          placeholder="Pilih Kabupaten"
          value={formData.kabupaten}
          onChange={handleRegencyChange}
          disabled={formData.provinsi === ""}
          />
      </FormField>

      <FormField label="Kecamatan" error={errors.kecamatan} required={true}>
        <Select
          name="kecamatan"
          options={districtsOptions}
          placeholder="Pilih Kecamatan"
          value={formData.kecamatan}
          onChange={handleDistrictChange}
          disabled={formData.kecamatan === ""}
          />
      </FormField>

      <FormField label="Kelurahan" error={errors.kelurahan} required={true}>
        <Select
          name="kelurahan"
          options={villageOptions}
          placeholder="Pilih Kelurahan"
          value={formData.kelurahan}
          onChange={handleChange}
          disabled={formData.kelurahan === ""}
          />
      </FormField>

      <FormField label="RT" error={errors.rt}>
        <Input name="rt" value={formData.rt} onChange={handleChange} />
      </FormField>

      <FormField label="RW" error={errors.rw}>
        <Input name="rw" value={formData.rw} onChange={handleChange} />
      </FormField>

      <FormField label="Kode Pos" error={errors.kode_post}>
        <Input
          name="kode_pos"
          value={formData.kode_pos}
          onChange={handleChange}
        />
      </FormField>

      <div className="space-x-2">
        <input
          name="konfirmasi"
          type="checkbox"
          onChange={(e) => setIsConfirmed(e.target.checked)}
          required
        />
        <label htmlFor="konfirmasi">Konfirmasi bahwa data sudah valid</label>
      </div>

      <Button type="submit" text="Submit" disabled={!isConfirmed}/>
    </form>
  );
}
