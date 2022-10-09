export default function Country(props) {
  const { name, flags, capital, population, area, maps, coatOfArms } =
    props.country;
  return (
    <div className="countryDiv">
      <div className="j">
        <span
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={flags.png}
            alt={name.common}
            width="180px"
            className="countryImg"
          />
        </span>
        <p className="m545" style={{ fontSize: "22px", margin: "10px 0" }}>
          Name: <span className="c545">{name.common}</span>
        </p>
        <p className="m545 ">
          Capital: <span className="c545">{capital}</span>
        </p>
        <p className="m545 ">
          Population: <span className="c545">{population}</span>
        </p>
        <p className="m545 ">
          Area: <span className="c545">{area}</span>
        </p>
        <p className="m545 ">
          Map:{" "}
          <a href={maps.googleMaps} rel="noreferrer" target="_blank">
            {maps.googleMaps}
          </a>
        </p>
        <span
          className="m545 "
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <span style={{ color: "purple", marginTop: "8px" }}>
            {" "}
            Coat of arms:-
          </span>{" "}
          <img
            src={coatOfArms.png}
            alt=""
            width="60px"
            style={{ marginTop: "10px" }}
          />
        </span>
      </div>{" "}
    </div>
  );
}
