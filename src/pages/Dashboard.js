import { useState } from "react";
import logo from "../assets/company-logo.png";
import profil from "../assets/profil.jpg";
import { IconBuilding, IconEdit, IconPhone, IconWeb, IconMail, IconWrench, IconLibrary, IconChevronRight, IconSearch, IconBell } from "../Icon";

export default function Dashboard() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="px-8 py-4">
      <div className="flex justify-between">
        <div className="flex self-center">
          <p className="text-sm opacity-25 mr-3">Layanan IT</p>
          <div className="opacity-25 self-center">
            <IconChevronRight />
          </div>
          <p className="text-sm font-bold ml-3 ">Mitramas Infosys Global</p>
        </div>
        <div className="flex">
          <div className="flex mr-8 opacity-70 self-center cursor-pointer">
            <IconSearch />
            <IconBell />
          </div>
          <div className="flex">
            <img src={profil} alt="profil" className="inline object-cover w-7 h-7 rounded-full mr-2" />
            <p className="font-semibold self-center">John Doe</p>
          </div>
        </div>
      </div>
      <div className="flex mt-8">
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
        <div className="w-4/5 ml-8">
          <div className="w-full bg-white shadow-lg rounded-md px-4 py-6">
            <div className="flex justify-between mb-4">
              <p className="font-bold text-xl">Lokasi</p>
              <p className="text-sm text-green-700 cursor-pointer">Lihat Semua</p>
            </div>
            <div className="grid gap-x-8 grid-cols-3">
              <div className="bg-green-700 rounded-md p-4 flex justify-between text-white">
                <IconBuilding />
                <div>
                  <p className="font-bold text-2xl text-center">20</p>
                  <p className="text-sm opacity-50">Induk</p>
                </div>
              </div>
              <div className="bg-green-600 rounded-md p-4 flex justify-between text-white">
                <IconWrench />
                <div>
                  <p className="font-bold text-2xl text-center">3</p>
                  <p className="text-sm opacity-50">Sub Lokasi Level 1</p>
                </div>
              </div>
              <div className="bg-green-500 rounded-md p-4 flex justify-between text-white">
                <IconLibrary />
                <div>
                  <p className="font-bold text-2xl text-center">1</p>
                  <p className="text-sm opacity-50">Sub Lokasi Level 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
