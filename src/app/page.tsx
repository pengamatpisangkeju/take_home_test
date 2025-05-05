import Button from "@/components/Button";
import FormField from "@/components/form/FormField";
import Input from "@/components/form/Input";
import Select from "@/components/form/Select";
import Textarea from "@/components/form/Textarea";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="grid gap-8 p-4 w-xl">
        <h1 className="text-3xl font-semibold">Registrasi</h1>
        <form className="grid gap-4">
          <FormField label="Nama Lengkap">
            <Input />
          </FormField>

          <FormField label="Nama Ibu">
            <Input />
          </FormField>

          <FormField label="Tanggal Lahir">
            <Input type="date" />
          </FormField>

          <FormField label="Email">
            <Input type="email" />
          </FormField>

          <FormField label="No. Handphone">
            <Input />
          </FormField>

          <FormField label="Alamat">
            <Textarea />
          </FormField>

          <FormField label="Provinsi">
            <Select options={[]} />
          </FormField>

          <FormField label="Kecamatan">
            <Select options={[]} />
          </FormField>

          <FormField label="Kelurahan">
            <Select options={[]} />
          </FormField>

          <FormField label="RT">
            <Input />
          </FormField>

          <FormField label="RW">
            <Input />
          </FormField>

          <FormField label="Kode POS">
            <Select options={[]} />
          </FormField>

          <Button type="submit" text="Submit"/>
        </form>
      </div>
    </div>
  )
}