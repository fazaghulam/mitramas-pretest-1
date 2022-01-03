import { useState } from "react";
import logo from "../assets/company-logo.png";
import { IconEdit, IconMail } from "../Icon";
import IconPhone from "../Icon/IconPhone";
import IconWeb from "../Icon/IconWeb";

export default function Dashboard() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="flex px-8 py-4">
      <div className="bg-white w-1/5 shadow-lg rounded-md grid justify-items-stretch pb-10">
        <div className="bg-building h-36" />
        <div className="bg-white justify-self-center flex px-2 w-32 h-32 -mt-16 rounded-full border-2 border-gray-200">
          <img src={logo} alt="logo" className="self-center" />
        </div>
        <div className="grid justify-items-center mt-8">
          <p className="font-bold text-xl">Mitramas Infosys Global</p>
          <p className="text-sm opacity-50">Layanan IT</p>
          <div className="mt-4 flex self-center text-green-700 cursor-pointer max-w-fit">
            <IconEdit />
            <p className="text-sm font-semibold ml-2">Sunting Profil</p>
          </div>
        </div>
        <div className="px-4 mt-8">
          <p className="text-sm opacity-50 mb-1">Status Perusahaan</p>
          <div className="flex justify-between">
            <p className="text-green-700 font-semibold">{toggle ? "Aktif" : "Non aktif"}</p>
            <div
              className={
                `ml-3 w-11 h-6 px-1 self-center rounded-full flex cursor-pointer ` +
                (toggle ? "justify-end bg-green-700" : "justify-start bg-gray-300")
              }
              onClick={() => setToggle(!toggle)}
            >
              <div className="bg-white w-4 h-4 self-center rounded-full" />
            </div>
          </div>
          <p className="text-sm opacity-50 mb-1 mt-3">Singkatan</p>
          <p>MIG</p>
          <p className="text-sm opacity-50 mb-1 mt-3">Alamat Perusahaan</p>
          <p>Jl. Tebet Raya No.42, Jakarta Selatan</p>
          <p className="text-sm opacity-50 mb-1 mt-3">Penanggung Jawab (PIC)</p>
          <p>John Doe</p>
          <p className="text-sm opacity-50 mb-1 mt-3">Tanggal PKP</p>
          <p>3 Maret 2021</p>
          <p className="text-sm opacity-50 mb-1 mt-3">E-mail</p>
          <div className="flex text-green-700">
            <IconMail />
            <p className="ml-2 underline">mig@mitrasolusi.group</p>
          </div>
          <p className="text-sm opacity-50 mb-1 mt-3">No. Telp</p>
          <div className="flex text-green-700">
            <IconPhone />
            <p className="ml-2">021-5678-1234</p>
          </div>
          <p className="text-sm opacity-50 mb-1 mt-3">Situs Web</p>
          <div className="flex text-green-700">
            <IconWeb />
            <p className="ml-2 underline">mitramas.com</p>
          </div>
        </div>
      </div>
      <div className="w-4/5 ml-8"></div>
    </div>
  );
}
