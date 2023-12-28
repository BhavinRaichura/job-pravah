import Link from "next/link"
import logo from '@/assets/logo.png'
import Image from "next/image"
const Logo = () =>{
    return (
        <Link href={'/'}>
          <Image src={logo} alt="JobPravah" width={180} height={70} className="px-2 cursor-pointer rounded-md"/>
        </Link>

    )
  }

  export default Logo