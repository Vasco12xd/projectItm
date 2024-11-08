import React from "react";
import '../components/scss/MyProfile.scss';
import { Button } from 'primereact/button';
import Navbar from './navBar';

const Profile: React.FC = () => {
    const username = "Nombre de Usuario"; // Puedes reemplazar esto con el nombre real del usuario
    const profileImage = "https://via.placeholder.com/150"; // Reemplaza esto con la URL de la imagen de perfil
  
    return (
      <div className="profile-container">
        <h1>{username}</h1>
        <img src={profileImage} alt="Perfil" className="profile-image" />
        <div className="profile-buttons">
          <Button label="Mi Información" icon="pi pi-info" className="p-button-info" />
          <Button label="Historial de Pedidos" icon="pi pi-list" className="p-button-warning" />
          <Button label="Mis Direcciones" icon="pi pi-map" className="p-button-success" />
        </div>
        <Navbar />
      </div>
    );
  };
  
  export default Profile;