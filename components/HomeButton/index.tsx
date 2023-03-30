import Image from "next/image"
import { Container ,Box} from "@chakra-ui/react"
import { useRouter } from 'next/router'

export default function Homebutton() {
    const router = useRouter();
    const handlePhotoClick = () => {
        router.push('/');
    };
  return (<Box px="2"><Image src="/home-logo.png" onClick={handlePhotoClick} height={80} width={80} alt="Mothership Logo" /></Box>)
}