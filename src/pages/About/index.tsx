import { useState, useEffect } from "react";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

import Header from "../../components/Header";
import 'swiper/swiper-bundle.css';
import bgImage from "../../Images/bgImg.svg";

import tmdb from "../../api/tmdb";

export default function About() {
  const bgIM = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`;

  const location = useLocation();
  const { state: { title, overview, poster_path, id } } = location;

  const [isMobile] = useMediaQuery("(max-width: 764px)")

  const [videoKey, setVideoKey] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrailerKey = async () => {
      try {
        const response = await tmdb.get(`/movie/${id}/videos`, {
          params: {
            language: "pt-BR",
            append_to_response: "videos",
            include_adult: false,
          },
        });
        const data = response.data;
        const trailers = data.results.filter((video: any) => video.type === "Trailer");
        if (trailers.length > 0) {
          setVideoKey(trailers[0].key);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrailerKey();
  }, [id]);

  return (
    <Flex
      h={"100vh"}
      justify="center"
      backgroundImage={bgIM}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex w={1240} p={4} direction="column" gap="1rem">
        <Flex>
          <Header />
        </Flex>
        {videoKey && (
          <div>
            <h2>Trailer</h2>
            <iframe
              title="Trailer"
              width="100%"
              height="515"
              src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
              frameBorder="0"
              allowFullScreen
              allow="autoplay"
            />
          </div>
        )}
        <Flex direction={isMobile ? "column" : "row"} align={"center"} justify={"center"} gap={"1rem"}>
          <Flex direction={"column"}>
            <img style={isMobile ? {width: "100%" } : {width: "15rem"}} src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
          </Flex>
          <p style={{ width: "100%", textAlign: "center" }}>{overview}</p>
        </Flex>
      </Flex>
    </Flex>
  );
}
