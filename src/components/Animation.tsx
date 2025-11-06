
export default function PlanetsAnimation() {
  const planets = [
    { name: "Mercury", color: "#b1b1b1", size: 20, orbit: 70, duration: 6 },
    { name: "Venus", color: "#d4a373", size: 25, orbit: 100, duration: 10 },
    { name: "Earth", color: "#4dabf7", size: 30, orbit: 140, duration: 13 },
    { name: "Mars", color: "#e07b39", size: 25, orbit: 180, duration: 16 },
    { name: "Jupiter", color: "#d4b48c", size: 60, orbit: 230, duration: 22 },
    { name: "Saturn", color: "#f4d06f", size: 50, orbit: 280, duration: 28 },
    { name: "Uranus", color: "#74c0fc", size: 40, orbit: 330, duration: 33 },
    { name: "Neptune", color: "#4263eb", size: 40, orbit: 370, duration: 38 },
  ];

  return (
    <div className="universe">

      <div className="sun"></div>

      {planets.map((planet, i) => (
        <div
          key={i}
          className="orbit"
          style={{
            width: planet.orbit * 2,
            height: planet.orbit * 2,
            animationDuration: `${planet.duration}s`,
          }}
        >
          <div
            className="planet"
            style={{
              width: planet.size,
              height: planet.size,
              backgroundColor: planet.color,
              boxShadow: `0 0 10px ${planet.color}`,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}
