function CountryCard({ country }) {
  const { name, capital, population, flags, region } = country;

  return (
    <div className="country-card">
      <img src={flags.png} alt={`Flag of ${name.common}`} />
      <div className="country-card__body">
        <h2>{name.common}</h2>
        <p>
          <span>Capital:</span> {capital?.[0] || '—'}
        </p>
        <p>
          <span>Population:</span> {population.toLocaleString()}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
