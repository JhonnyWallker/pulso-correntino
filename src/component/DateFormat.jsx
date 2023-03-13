function DateFormat() {
  const Data = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const fecha = Data.toLocaleDateString("es-ES", options);

  return <div className="fs-6 bg-danger text-dark">{fecha}</div>;
}

export default DateFormat;
