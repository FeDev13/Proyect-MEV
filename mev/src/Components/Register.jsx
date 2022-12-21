import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    user: {
      username: "",
      password: "",
    },
  });

  const handleChange = (e) => {
    setFormData({
      user: {
        ...formData.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <figure className="h-1/2 flex bg-gray-100">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
        <blockquote className="text-2xl font-medium text-center">
          <p className="text-lg font-semibold">
            Completando este formulario Ud. queda registrado, automáticamente,
            en TODOS los Depto. Judiciales
          </p>
        </blockquote>

        <div className="text-primary m-6">
          <div className="flex items-center mt-3 justify-center"></div>
          <form>
            <label className="text-left">Nombre:</label>
            <input
              name="nombre"
              type="text"
              value={formData.user.username}
              onChange={handleChange}
              placeholder="Nombre"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <label>Apellido:</label>
            <input
              name="apellido"
              type="text"
              value={formData.user.password}
              onChange={handleChange}
              placeholder="Apellido"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <label>Nombre de usuario:</label>
            <input
              name="usuario"
              type="text"
              value={formData.user.password}
              onChange={handleChange}
              placeholder="Usuario"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <label>Contrasena:</label>
            <input
              name="password"
              type="password"
              value={formData.user.password}
              onChange={handleChange}
              placeholder="Contrasena"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <label>Email:</label>
            <input
              name="email"
              type="email"
              value={formData.user.password}
              onChange={handleChange}
              placeholder="Email"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <label>Documento:</label>
            <input
              name="dni"
              type="number"
              value={formData.user.password}
              onChange={handleChange}
              placeholder="DNI"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <div className="flex items-center mt-3 justify-center">
              <span>Datos del abogado</span>
            </div>
            <label>Tomo:</label>
            <input
              name="tomo"
              type="number"
              value={formData.user.password}
              onChange={handleChange}
              placeholder="Tomo"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <label>Folio:</label>
            <input
              name="folio"
              type="number"
              value={formData.user.password}
              onChange={handleChange}
              placeholder="Folio"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <label>Depto Judicial:</label>

            <select id="dtojud" size="1" name="dtojud">
              <option value="selected"></option>
              <option value="AZ">Azul</option>
              <option value="AV">Avellaneda-Lanús</option>
              <option value="BB">Bahía Blanca</option>
              <option value="DO">Dolores</option>
              <option value="JU">Junín</option>
              <option value="LM">La Matanza</option>
              <option value="LP">La Plata</option>
              <option value="LZ">Lomas de Zamora</option>
              <option value="MP">Mar del Plata</option>
              <option value="ME">Mercedes</option>
              <option value="MR">Moreno - Gral. Rodríguez</option>
              <option value="MO">Morón</option>
              <option value="NE">Necochea</option>
              <option value="OL">Olavarría</option>
              <option value="PE">Pergamino</option>
              <option value="QU">Quilmes</option>
              <option value="SI">San Isidro</option>
              <option value="SM">San Martín</option>
              <option value="SN">San Nicolás</option>
              <option value="TA">Tres Arroyos</option>
              <option value="TL">Trenque-Lauquen</option>
              <option value="TN">Tandil</option>
              <option value="ZC">Zárate-Campana</option>
            </select>

            <div className="flex items-center mt-3 justify-center">
              <button
                className={
                  "bg-sky-600  py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                }
                value="Login"
              >
                Crear usuario
              </button>
            </div>
          </form>
          <div className="flex items-center mt-3 justify-center"></div>
        </div>
      </div>
    </figure>
  );
}
