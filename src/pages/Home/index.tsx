import { Flex,Image, } from "@chakra-ui/react";

import Header from "../../components/Header";
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import bgImage from "../../Images/bgImg.svg";
import Movies from "../../components/Movies";




SwiperCore.use([Autoplay, Pagination]);

export default function Home() {
    const bgIM = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`;

    return (
        <Flex
            justify="center"
            backgroundImage={bgIM}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
        >
            <Flex w={1240} p={4} direction="column" gap="1rem">
                <Flex>
                    <Header />
                </Flex>

                <Flex p={2} justify="center" mb={4}>
                    <Swiper
                        slidesPerView="auto"
                        spaceBetween={10}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        loop={true}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                    >
                        <SwiperSlide style={{ borderRadius: '1rem' }}>
                            <Image
                                src="https://1.bp.blogspot.com/-yn0FMUEnjmY/YEoruMIDsvI/AAAAAAAAA4U/iVI2iZLNvMkolXRf-IO3Wv6eU5PuPOfYQCLcBGAsYHQ/s2607/EwGYaAfUcAIxexq.jpg"
                                alt=""
                                style={{ borderRadius: '8px' }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src="https://1.bp.blogspot.com/-yn0FMUEnjmY/YEoruMIDsvI/AAAAAAAAA4U/iVI2iZLNvMkolXRf-IO3Wv6eU5PuPOfYQCLcBGAsYHQ/s2607/EwGYaAfUcAIxexq.jpg"
                                alt=""
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src="https://1.bp.blogspot.com/-yn0FMUEnjmY/YEoruMIDsvI/AAAAAAAAA4U/iVI2iZLNvMkolXRf-IO3Wv6eU5PuPOfYQCLcBGAsYHQ/s2607/EwGYaAfUcAIxexq.jpg"
                                alt=""
                            />
                        </SwiperSlide>
                    </Swiper>
                </Flex>
                
                <Movies />
                
            </Flex>
        </Flex>
    );
}
