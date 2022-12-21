import React from "react";
import { Button } from "@material-tailwind/react";

export default function Login() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="font-semibold text-center">Ingresar</h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="usuario"
              className="block text-sm font-semibold text-gray-800"
            >
              Usuario
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 t bg-white border rounded-md "
            />
          </div>
          <div className="mb-2">
            <label
              for="contrasena"
              className="block text-sm font-semibold text-gray-800"
            >
              Contrasena
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2  bg-white border rounded-md "
            />
          </div>

          <div className="mt-6">
            <Button className="items-center" variant="gradient">
              Ingresar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
