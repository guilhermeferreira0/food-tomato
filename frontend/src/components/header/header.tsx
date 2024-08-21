import { FaSearch, FaShoppingCart  } from "react-icons/fa";
import { NavLink } from "./navLink";
import { Modal } from "../signin/modal";
import { useState } from "react";
import { FormLogin } from "../signin/formLogin";
import { FormRegister } from "../signin/formRegister";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);

  return(
    <header className="flex justify-between items-center p-4">
      <h1 className="font-bold text-orange-600 text-4xl">Tomato.</h1>
      <nav className="w-full">
        <ul className="flex justify-center gap-20 text-gray-500 font-semibold w-full">
          <NavLink href="/" name="home"/>
          <NavLink href="/" name="menu"/>
          <NavLink href="/" name="mobile app"/>
          <NavLink href="/" name="contact us"/>
        </ul>
      </nav>
      <div className="flex gap-5 items-center">
        <a href="/">
          <FaSearch size={25} color="#6b7280"/>
        </a>
        <a href="/">
          <FaShoppingCart size={25} color="#6b7280"/>
        </a>
        <button className="w-32 px-4 py-2 border-solid border-2 rounded-xl" onClick={() => setIsOpen(true)}>sign in</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          {modalRegister ? <FormRegister setForm={() => setModalRegister(false)}/> : <FormLogin setForm={() => setModalRegister(true)} />}
        </Modal>
      </div>
    </header>
  );
}