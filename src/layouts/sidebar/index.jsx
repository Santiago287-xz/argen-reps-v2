import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";

// * React icons
import { BsBagCheckFill } from "react-icons/bs";
import { BsTag } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsPostageFill } from "react-icons/bs";
import { BsBagFill } from "react-icons/bs";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation, useRoutes } from "react-router-dom";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList = [
    {
      name: "Introduccion",
      categorys: [
        {
          title: "Que es CssBuy ?",
          url: "que-es-cssbuy",
        },
        {
          title: "CssBuy Vs PandaBuy",
          url: "cssbuy-vs-pandabuy",
        },
        {
          title: "Que Necesito ?",
          url: "que-necesito",
        },
      ],
      icon: BsArrowRightCircleFill,
    },
    {
      name: "Comprar",
      categorys: [
        {
          title: "Crear Cuenta",
          url: "crear-cuenta",
        },
        {
          title: "Paso 1",
          url: "paso-1",
        },
        {
          title: "Paso 2",
          url: "paso-2",
        },
        {
          title: "Expert Buy",
          url: "expert-buy",
        },
      ],
      icon: BsBagFill,
    },

    {
      name: "Aduana",
      categorys: [
        {
          title: "Como declarar",
          url: "crear-cuenta",
        },
        {
          title: "Tips aduana",
          url: "tips-aduana",
        },
        {
          title: "Tracking",
          url: "tracking",
        },
      ],
      icon: BsPostageFill,
    },
  ];

  return (
    <div className="text-white">
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className="bg-[#101418] text-gray shadow-xl z-[999] max-w-[16rem] w-[16rem] overflow-hidden md:relative fixed h-screen"
      >
        <div className="flex flex-col justify-between h-full">
          <main className="h-full relative">
            <ul className="absolute whitespace-pre text-[0.9rem] flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-thumb-slate-800 h-full w-full p-2">
              <header className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300 mx-3">
                <BsBagCheckFill size={25} className="min-w-max" />
                <span className="text-xl whitespace-pre">ArgenReps</span>
              </header>
              <li>
                <NavLink to={"/"} className="link">
                  <BsFillHouseHeartFill size={23} className="min-w-max" />
                  Bienvenidos
                </NavLink>
              </li>
              <div className="flex items-center gap-4 p-[0.625rem] justify-between">
                <small className="font-semibold text-green-500 text-sm">
                  Guia de compra
                </small>
                <IoIosArrowDown className="text-green-500 mr-16" />
              </div>

              <div>
                {(open || isTabletMid) && (
                  <>
                    {subMenusList?.map((menu) => (
                      <div key={menu.name} className="flex flex-col gap-1">
                        <SubMenu data={menu} />
                      </div>
                    ))}
                  </>
                )}
                <div className="flex flex-col gap-1">
                  <NavLink to={"/Preguntas"} className="link">
                    <BsFillQuestionCircleFill size={24} className="min-w-max" />
                    Preguntas
                  </NavLink>
                </div>
              </div>
              <div className="flex items-center gap-4 p-[0.625rem] pb-0  justify-between">
                <small className="text-green-500 font-semibold  text-sm">
                  Spreedsheet
                </small>
                <IoIosArrowDown className="text-green-500 mr-16" />
              </div>
              <li className="pt-2.5">
                <NavLink to={"/productos"} className="link">
                  <BsTag size={24} className="min-w-max" />
                  Productos
                </NavLink>
              </li>
            </ul>
          </main>
          {open && (
            <footer className="flex flex-wrap content-end text-sm z-50 w-full font-medium">
              <div className="flex gap-[.3rem] border-y border-slate-300 p-4 items-center justify-between">
                <div>
                  <p className="text-sm/[15px]">Registrate en CssBuy</p>
                  <small>Tenes 3 descuentos</small>
                </div>
                <a
                  className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl"
                  href="https://www.cssbuy.com/toctoc/MjMxMDA1MDkyNDU4MA=="
                  target="_blank"
                >
                  Crear
                </a>
              </div>
            </footer>
          )}
        </div>
      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
