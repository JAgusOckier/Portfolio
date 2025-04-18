"use client"
import React from "react";

const Footer = () => {
  return (
    <div className="w-full text-center px-1 py-4 text-sm text-textSubtitle">
      <p>
        © {new Date().getFullYear()} Juan Agustín Ockier · Derechos reservados.
      </p>
    </div>
  );
};

export default Footer;
    