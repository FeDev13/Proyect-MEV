import {
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

import Login from "./Login";

const features = [
  {
    name: "Acceso a todos los departamentos judiciales",
    description:
      "Todos los departamentos judiciales de la provincia se encuentran disponibles",
    icon: GlobeAltIcon,
  },
  {
    name: "Acceso a causas con autorizacion",
    description: "Autorizaciones encriptadas para mejor seguridad",
    icon: ScaleIcon,
  },
  {
    name: "Transferencia de datos mejorada",
    description: "Base de datos mejorada para mejor estabilidad",
    icon: BoltIcon,
  },
  {
    name: "Version mobile",
    description:
      "Version adaptable a dispositivos moviles, tablet y escritorio.",
    icon: DevicePhoneMobileIcon,
  },
];

export default function Hero() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center items-center">
          <span className=" text-lg">Bienvenido</span>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl -mb-40">
            MESA DE ENTRADAS VIRTUAL
          </p>
          <Login />
        </div>

        <div className="max-w-lg sm:mx-auto md:max-w-none">
          <h2 className=" mb-20 text-lg font-bold -mt-40">
            {" "}
            NUEVAS CARACTERISTICAS
          </h2>
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">
                    {feature.name}
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
