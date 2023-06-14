import { Flex, Center, Image, Button } from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';
import logo from '../../Images/logo.png'
import { Link, useNavigate } from 'react-router-dom';


export default function Header() {

    const navigate = useNavigate()

    function handleLogOut() {
        navigate("/")
    }

    return (
        <Flex flex={1} direction={'row'} justify={'space-between'}>

            <Center>
                <Link to={'/home'}>
                <Image src={logo} alt='image logo' />
                </Link>
            </Center>

            <Button 
                size={'lg'}
                style={{background: 'transparent'}}
                color="color.color1"
                _hover={{color: "color.color2"}}
                p={0}

                onClick={handleLogOut}
            >
                <FiLogOut size={22} />
            </Button>
        </Flex>
    )
}