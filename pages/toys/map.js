import path from "path";
import fs from "fs";

export default function Map({ neighbourhoodMapData }) {
  console.log(neighbourhoodMapData);
  return (
    <>
      <h1>this be a map</h1>
    </>
  );
}

// up to some stupid bullshit here
export async function getStaticProps() {
  const neighbourhoodsJsonPath = path.join(
    process.cwd(),
    "assets",
    "toronto-neighbourhoods.json"
  );

  // obviously this is for a toy
  const geoJson = fs.readFileSync(neighbourhoodsJsonPath, "utf8");
  const parsedGeoJson = JSON.parse(geoJson);
  return {
    props: {
      neighbourhoodMapData: parsedGeoJson,
    },
  };
}
