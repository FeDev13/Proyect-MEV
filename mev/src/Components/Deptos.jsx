import deptos from "../deptos";

const Deptos = () => {
  return (
    <div className=" grid grid-cols-3 gap-6 mt-20">
      <h1 className=" font-bold text-xl mb-20">
        Seleccione el departamento judicial
      </h1>
      {deptos.map((items, index) => {
        return (
          <div
            className="w-full rounded-lg shadow-md lg:max-w-sm  bg-sky-600"
            key={index}
          >
            <img
              className="object-cover w-full h-auto py-2"
              src="https://www.scba.gov.ar/images/escudo-footer2.svg"
              alt=""
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold tracking-tigh">
                {items.nombre}
              </h4>

              <button className="px-4 py-2 text-sm bg-white rounded shadow font-bold">
                Ingresar
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Deptos;
