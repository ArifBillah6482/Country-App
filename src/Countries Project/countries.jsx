import Country from "./country";

function Countries({ countries }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {countries.map((country) => {
        const countryNew = {
          country,
          id: Math.random(),
        };
        return <Country {...countryNew} key={countryNew.id} />;
      })}
    </div>
  );
}
/////////////////////////
export default Countries;
