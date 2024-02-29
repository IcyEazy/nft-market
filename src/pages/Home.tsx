// import React from 'react'

import Cursus from "../components/Cursus";
import Footer from "../components/Footer";
import LatestLive from "../components/LatestLive";
import MostPopular from "../components/MostPopular";
import NftExperience from "../components/NftExperience";
import Sapien from "../components/Sapien";

function Home() {
  return (
    <div>
      <NftExperience />
      <LatestLive />
      <Sapien />
      <MostPopular />
      <Cursus />
      <Footer />
    </div>
  );
}

export default Home;
