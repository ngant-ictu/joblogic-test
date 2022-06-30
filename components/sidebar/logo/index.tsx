import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components';
import { IEmployee } from '../../../model/interface';
import logo from '../../../public/assets/logo/the-godfather.svg'


const Logo:React.FC<IEmployee> = () => {
  return (
    <Branding className='wrap-logo'>
      <Link href={'/'} passHref>
            <a><Image
              src={logo}
              alt="the godfather"
            /></a>
          </Link>
    </Branding>
  )
}

export default Logo;

const Branding = styled.div`  
  display: block;
  width: 100%;
  text-align: center;
`