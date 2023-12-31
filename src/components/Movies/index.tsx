import { Grid, Box, Image, useBreakpointValue, Button, useMediaQuery } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { FaPlayCircle } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import tmdb from "../../api/tmdb";
interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
}

export default function Movies() {
    const [movies, setMovies] = useState<Movie[]>([]);

    const columnSizes = useBreakpointValue({ base: 2, sm: 2, md: 4, lg: 5, xl: 6 });
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const [activeIndex, setActiveIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const [isMobile] = useMediaQuery("(max-width: 500px)");

    const API_KEY = tmdb ;

    useEffect(() => {
        const fetchMovies = async () => {
            const {data} = await tmdb.get("discover/movie")
            setMovies(data.results)
        };

        fetchMovies();
    }, [API_KEY]);

    useEffect(() => {
        const handleDocumentClick = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setActiveIndex(-1);
            }
        };

        document.addEventListener("mousedown", handleDocumentClick);

        return () => {
            document.removeEventListener("mousedown", handleDocumentClick);
        };
    }, []);


    function handleMovie(title: string, overview: string, id: number, poster_path: string ) {
        // alert(`Clicou no filme ${title}, ${overview}`);
        navigate('/about', { state: { title,overview, id, poster_path } })
    }


    return (
        <Grid templateColumns={`repeat(${columnSizes}, 1fr)`} gap={2} p={4} ref={containerRef}>
            {movies.map((movie, index) => (
                <Box
                    key={movie.id}
                    borderRadius="1rem"
                    width="100%"
                    position="relative"
                    overflow="hidden"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(-1)}
                    onClick={() => setActiveIndex(index)}
                >
                    <Box
                        position="relative"
                        zIndex={0}
                        _before={{
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(7, 1, 1, 0.713)",
                            zIndex: 0,
                            opacity: (hoveredIndex === index || activeIndex === index) ? 1 : 0,
                            transition: "opacity 0.3s",
                        }}
                    >
                        <Image
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                            objectFit="cover"
                            width="100%"
                            height="100%"
                        />
                        {((hoveredIndex === index || activeIndex === index)) && (
                            <Button
                                position="absolute"
                                top={isMobile ? "5rem" : "8rem"}
                                left="1rem"
                                right="1rem"
                                bottom="1rem"
                                background={"transparent"}
                                color={"#fff"}
                                _hover={{background: "none", color: '#f00'}}
                                onClick={() => handleMovie(movie.title, movie.overview, movie.id, movie.poster_path)}

                            >
                               <FaPlayCircle size={"3rem"} />
                            </Button>
                        )}
                    </Box>
                </Box>
            ))}
        </Grid>
    )
}