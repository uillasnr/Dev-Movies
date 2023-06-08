import React from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import Card from '../Card'
import { Container } from './styles'

function Slider({ info, title }) {
  const breakpoints = {
    390: {
      slidesPerView: 3,
      spaceBetween: -50
    },
    445: {
      slidesPerView: 3,
      spaceBetween: -80
    },
    450: {
      slidesPerView: 3,
      spaceBetween: -80
    },
    480: {
      slidesPerView: 3,
      spaceBetween: -100
    },
    500: {
      slidesPerView: 3,
      spaceBetween: -100
    },
    550: {
      slidesPerView: 3,
      spaceBetween: 20
    },

    600: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    660: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    750: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    780: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    880: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    950: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1050: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    1215: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  }
  console.log(info, title)
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor={true}
        spaceBetween={-40}
        slidesPerView={1}
        breakpoints={breakpoints}
        className="swiper"
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <Link to={`/detalhe/${item.id}`}>
              <Card item={item} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Slider
