import React from 'react';
import styled from 'styled-components'
import Image from 'next/image'
import HeroImg from '../../public/assets/images/Godfather-header.jpg'

const HeroBanner = () => {
  return (
    <Banner>
      <Image
        src={HeroImg}
        alt=""
        layout='fill'
        objectFit='cover'
      />
    </Banner>
  )
}

export default HeroBanner;

const Banner = styled.div`
  height: 200px;
  position: relative;
`