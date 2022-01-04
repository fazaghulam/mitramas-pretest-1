import logo from "../assets/logo.png";
import {
  IconArchive,
  IconClipboard,
  IconClose,
  IconCube,
  IconDatabase,
  IconHome,
  IconOffice,
  IconSearch,
  IconShare,
  IconTicket,
  IconUsers,
} from "../Icon";

const section1 = [
  { icon: <IconHome />, state: false },
  { icon: <IconTicket />, state: false },
  { icon: <IconClipboard />, state: false },
  { icon: <IconArchive />, state: false },
  { icon: <IconOffice />, state: true },
];

const section2 = [
  { icon: <IconUsers />, state: false },
  { icon: <IconDatabase />, state: false },
  { icon: <IconCube />, state: false },
  { icon: <IconShare />, state: false },
  { icon: <IconSearch />, state: false },
];

const MenuLink = ({ icon, state, onClick }) => {
  return (
    <div
      className={
        "h-10 mb-4 flex justify-center items-center cursor-pointer text-gray-400 hover-green " + (state ? "green border-l-4 border-lime-700" : "")
      }
      onClick={onClick}
    >
      {icon}
    </div>
  );
};

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div className={"fixed z-30 top-0 left-0 right-0 bg-white shadow-lg " + (isOpen ? "" : "hidden md:block md:h-screen md:w-12")}>
      <div className="fixed top-5 right-5 md:hidden" onClick={setIsOpen}>
        <IconClose />
      </div>
      <div className="px-1 pt-8 mb-16 flex justify-center">
        <img src={logo} alt="logo" className="w-8" />
      </div>
      {section1.map(({ icon, state }, idx) => (
        <MenuLink key={idx} icon={icon} state={state} />
      ))}
      <div className="h-10" />
      {section2.map(({ icon, state }, idx) => (
        <MenuLink key={idx} icon={icon} state={state} />
      ))}
    </div>
  );
}
