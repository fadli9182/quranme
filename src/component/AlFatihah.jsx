import React, { useEffect, useState } from "react";
import { BASE_URL, token } from "../api/api";
import axios from "axios";

const AlFatihah = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ayat, setAyat] = useState([]);
  const getJuz = async () => {
    let res = await axios.get(`${BASE_URL}/quran/surah/1`, token);
    // setAyah(res.data.data.ayah);
    console.log(res.data.data.ayah);
    setAyat(res.data.data.ayah);
    setIsLoading(false);
  };

  useEffect(() => {
    getJuz();
  }, []);
  return (
    <div>
      <h1>Surah Al-Fatihah</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        ayat.map((item) => (
          <>
            <p>{item.text.ar}</p>
            <audio controls>
              <source src={item.audio} type="audio/mpeg" />
            </audio>
            <p>{item.text.id}</p>
          </>
        ))
      )}
    </div>
  );
};

export default AlFatihah;
