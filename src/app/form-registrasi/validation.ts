type ValidationRules = {
    [key: string]: (value: string) => string | null;
  };
  
  export const formValidations: ValidationRules = {
    nama_lengkap: (value: string) => {
      if (!value) return "Nama lengkap harus diisi";
      if (value.length < 3) return "Nama terlalu pendek";
      return null;
    },
    nama_ibu: (value: string) => {
      if (!value) return "Nama ibu harus diisi";
      if (value.length < 3) return "Nama terlalu pendek";
      return null;
    },
    tanggal_lahir: (value: string) => {
      if (!value) return "Tanggal lahir harus diisi";
      const birthDate = new Date(value);
      const today = new Date();
      if (birthDate >= today) return "Tanggal lahir tidak valid";
      return null;
    },
    email: (value: string) => {
      if (!value) return "Email harus diisi";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Format email tidak valid";
      return null;
    },
    no_hp: (value: string) => {
      if (!value) return "Nomor handphone harus diisi";
      if (!/^[0-9]{10,13}$/.test(value)) return "Nomor handphone harus 10-13 digit angka";
      return null;
    },
    alamat: (value: string) => {
      if (!value) return "Alamat harus diisi";
      if (value.length < 10) return "Alamat terlalu pendek";
      return null;
    },
    provinsi: (value: string) => {
      if (!value) return "Provinsi harus dipilih";
      return null;
    },
    kabupaten: (value: string) => {
      if (!value) return "Kabupaten harus dipilih";
      return null;
    },
    kecamatan: (value: string) => {
      if (!value) return "Kecamatan harus dipilih";
      return null;
    },
    kelurahan: (value: string) => {
      if (!value) return "Kelurahan harus dipilih";
      return null;
    },
    rt: (value: string) => {
      if (value && !/^[0-9]+$/.test(value)) return "Harus berupa angka";
      return null;
    },
    rw: (value: string) => {
      if (value && !/^[0-9]+$/.test(value)) return "Harus berupa angka";
      return null;
    },
    kode_pos: (value: string) => {
      if (value && !/^[0-9]{5}$/.test(value)) return "Kode pos harus 5 digit angka";
      return null;
    },
  };
  
  export const validateForm = (formData: Record<string, string>) => {
    const errors: Record<string, string> = {};
    let isValid = true;
  
    Object.entries(formValidations).forEach(([field, validate]) => {
      const error = validate(formData[field]);
      if (error) {
        errors[field] = error;
        isValid = false;
      }
    });
  
    return { isValid, errors };
  };