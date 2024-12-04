"use client";

export const Navbar = () => {
  return (
    <nav className="flex justify-center gap-5">
      <a className="text-white duration-300 hover:text-orange-400" href="">
        Todos os Filmes
      </a>
      <a className="text-white duration-300 hover:text-orange-400" href="">
        Novos Filmes
      </a>
      <a className="text-white duration-300 hover:text-orange-400" href="">
        Meus Ingressos
      </a>
    </nav>
  );
};
