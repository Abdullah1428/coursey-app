import React from 'react';
import { Carousel, Image, Button } from 'react-bootstrap';

const CourseyCarousel = (props) => {
  return (
    <div className='CarouselContainer'>
      <Carousel
        style={{ width: 600, height: 400 }}
        pause='hover'
        className='bg-dark'>
        <Carousel.Item>
          <Image
            style={{ width: 600, height: 400 }}
            src={`/assets/carousel1.jpg`}
            alt={'Coursey'}
            fluid
          />
          <Carousel.Caption
            className='carousel-caption'
            style={{ background: 'rgba(0,0,0,0.4)' }}>
            <h3
              style={{
                padding: '0.5rem',
                color: 'white',
                alignSelf: 'center',
              }}>
              {'Coursey'}
            </h3>

            <p>
              {
                'Coursey is an interactive app that helps you find and review cool KTH courses'
              }
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            style={{ width: 600, height: 400 }}
            className='d-block w-100'
            src={`/assets/carousel2.jpeg`}
            alt={'Coursey'}
            fluid
          />
          <Carousel.Caption
            className='carousel-caption'
            style={{ background: 'rgba(0,0,0,0.7)' }}>
            <h3
              style={{
                padding: '0.2rem',
                color: 'white',
                alignSelf: 'center',
              }}>
              {'About Us'}
            </h3>
            <p>
              <a
                className='mb-2 text-white'
                href='https://www.linkedin.com/in/abdullahcse/'
                target='_blank'
                rel='noreferrer'>
                {'Abdullah'}
              </a>
            </p>
            <p>
              <a
                className='mb-2 text-white'
                href='https://www.linkedin.com/in/aykhazanchi/'
                target='_blank'
                rel='noreferrer'>
                {'Ayushman Khazanchi'}
              </a>
            </p>
            <p>
              <a
                className='mb-2 text-white'
                href='https://www.linkedin.com/in/simon-hallak-2738a318b/'
                target='_blank'
                rel='noreferrer'>
                {'Simon Hallak'}
              </a>
            </p>
            <p>
              <a
                className='mb-2 text-white'
                href='https://gits-15.sys.kth.se/davidjo9'
                target='_blank'
                rel='noreferrer'>
                {'David Johansson'}
              </a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            style={{ width: 600, height: 400 }}
            src={`/assets/carousel3.jpeg`}
            alt={'Coursey'}
            fluid
          />
          <Carousel.Caption className='carousel-caption'>
            <Button style={{ background: 'rgba(0,0,0,0.3)' }}>
              <h3
                style={{
                  padding: '0.5rem',
                  color: 'white',
                  alignSelf: 'center',
                }}>
                {'Coursey'}
              </h3>

              <p>
                {
                  'Coursey was built at KTH as part of a class project for DH2642.'
                }
              </p>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CourseyCarousel;
