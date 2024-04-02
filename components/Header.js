import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import {
  GiPoliceBadge,
  GiCondorEmblem,
  GiArrest,
  GiSpiderMask,
  GiModernCity,
  GiAirForce,
  GiAk47U,
  GiArrowsShield,
  GiCctvCamera,
} from "react-icons/gi";
import { ImHammer2 } from "react-icons/im";
import { FaHospital, FaFilm, FaDiscord } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const Header = () => {
  return (
    <>
      <header className="fixed justify-center flex items-center bg-[#1b1c24] w-full h-[4.5rem] px-8 py-3 border-0 border-b-[1px] border-b-gray-800 z-[100]">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image
              src="/fixed-logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-[50%]"
            />
            <h2 className="w-[10rem] font-semibold">اساطير العراق</h2>
          </div>
        </Link>
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex gap-4 items-center">
            {/* Page content here */}
            <Link href="/locations">
              <h2>أماكن السناريوهات</h2>
            </Link>
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-primary"
            >
              القـوانـيـن
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-4">
              <div className="flex gap-4 items-center">
                <FaArrowRight />
                <Link href="/">العوده للصفحه الرئيسيه</Link>
              </div>
              {/* Sidebar content here */}
              <Link
                href="/admin"
                className="hover:bg-[#DCDDDF] duration-300 rounded-lg p-2 text-[16px] flex items-center gap-4"
              >
                <ImHammer2 />
                <li>قوانين الادارة</li>
              </Link>
              <Link
                href="/police"
                className="hover:bg-[#DCDDDF] duration-300 rounded-lg p-2 text-[16px] flex items-center gap-4"
              >
                <GiPoliceBadge />
                <li>قوانين وزارة الداخلية</li>
              </Link>
              <Link
                href="/army"
                className="hover:bg-[#DCDDDF] duration-300 rounded-lg p-2 text-[16px] flex items-center gap-4"
              >
                <GiCondorEmblem />
                <li>قوانين جهاز مكافحة الارهاب</li>
              </Link>
              <Link
                href="/mod"
                className="hover:bg-[#DCDDDF] duration-300 rounded-lg p-2 text-[16px] flex items-center gap-4"
              >
                <GiArrowsShield />
                <li>قوانين وزارة الدفاع</li>
              </Link>
              <Link
                href="/cia"
                className="hover:bg-[#DCDDDF] duration-300 rounded-lg p-2 text-[16px] flex items-center gap-4"
              >
                <GiCctvCamera />
                <li>قوانين الأمن الوطني</li>
              </Link>
              <Link
                href="/health"
                className="hover:bg-[#DCDDDF] duration-300 rounded-lg p-2 text-[16px] flex items-center gap-4"
              >
                <FaHospital />
                <li>قوانين وزارة الصحة</li>
              </Link>
              <Link
                href="/scenarios"
                className="hover:bg-[#DCDDDF] duration-300 rounded-lg p-2 text-[16px] flex items-center gap-4"
              >
                <FaFilm />
                <li>قوانين السناريوهات</li>
              </Link>
              <Link
                href="/gangs"
                className="hover:bg-[#DCDDDF] duration-300 rounded-lg p-2 text-[16px] flex items-center gap-4"
              >
                <GiArrest />
                <li>قوانين العصابات</li>
              </Link>
              <Link
                href="/heros"
                className="hover:bg-[#DCDDDF] duration-300 rounded-lg p-2 text-[16px] flex items-center gap-4"
              >
                <GiSpiderMask />
                <li>قوانين الابطال الخارقين</li>
              </Link>
              <Link
                href="/city"
                className="hover:bg-[#DCDDDF] duration-300 rounded-lg p-2 text-[16px] flex items-center gap-4"
              >
                <GiModernCity />
                <li>قوانين المدينة</li>
              </Link>
              <Link
                href="/prime"
                className="hover:bg-[#DCDDDF] duration-300 rounded-lg p-2 text-[16px] flex items-center gap-4"
              >
                <GiAirForce />
                <li>قوانين رئاسة الوزراء</li>
              </Link>
              <Link
                href="/market"
                className="hover:bg-[#DCDDDF] duration-300 rounded-lg p-2 text-[16px] flex items-center gap-4"
              >
                <GiAk47U />
                <li>قوانين البلاك ماركت</li>
              </Link>
              <Link
                href="/verified"
                className="hover:bg-[#DCDDDF] duration-300 rounded-lg p-2 text-[16px] flex items-center gap-4"
              >
                <MdVerified />
                <li>قوانين صناع المحتوى</li>
              </Link>
              <Link
                href="/discord"
                className="hover:bg-[#DCDDDF] duration-300 rounded-lg p-2 text-[16px] flex items-center gap-4"
              >
                <FaDiscord />
                <li>قوانين الديسكورد</li>
              </Link>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
