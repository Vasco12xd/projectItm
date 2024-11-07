import React from 'react';
import { Link } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';

const Navbar: React.FC = () => {
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => { window.location.href = '/home'; }
    },
    {
      label: 'Ordenar',
      icon: 'pi pi-fw pi-list',
      command: () => { window.location.href = '/ordenar'; }
    },
    {
      label: 'Carrito',
      icon: 'pi pi-fw pi-shopping-cart',
      command: () => { window.location.href = '/carrito'; }
    },
    {
      label: 'Mi perfil',
      icon: 'pi pi-fw pi-user',
      command: () => { window.location.href = '/myProfile'; }
    }
  ];

  return (
    <Menubar model={items} />
  );
};

export default Navbar;