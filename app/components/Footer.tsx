// src/components/layout/Footer.jsx

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} EcoInova Ltda. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">CNPJ: 12.345.678/0001-99 | São Paulo - SP, Brasil</p>
      </div>
    </footer>
  );
}