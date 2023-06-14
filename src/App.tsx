import { Flex, Center, Image, Button, useMediaQuery } from "@chakra-ui/react";
import bgImage from './Images/bgImg.svg';
import LogoGG from './Images/LogoGG.png'
import { VscPlayCircle  } from 'react-icons/vsc';
import { useNavigate  } from 'react-router-dom'

function App() {
  const [isMobile] = useMediaQuery('(max-width: 1024px)');
  const bgIM = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`;
  
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/home")
  }

  return (
    <Flex
      h={'100vh'}
      align={"center"}
      justify={"center"}
      backgroundImage={bgIM}
      backgroundRepeat={'no-repeat'}
      backgroundSize={'cover'}
    >
      <Flex
        w={1240}
        maxW={300}
        p={4}
        direction={'column'}
        gap={'1rem'}
      >
        <Center mt={isMobile ? "10rem" : '2'}>
          <Image src={LogoGG} alt="logo" />
        </Center>
        <Button
          size={'lg'}
          mt={'25rem'}
          gap={2}
          borderRadius={28}
          bg={'color.color2'}
          color="color.color1"
          _hover={{ backgroundColor: 'color.color1', color: 'color.color2' }}
          onClick={handleLogin}
        >
          <VscPlayCircle size={22} />
          Assistir agora
        </Button>
      </Flex>
    </Flex>
  );
}

export default App;
