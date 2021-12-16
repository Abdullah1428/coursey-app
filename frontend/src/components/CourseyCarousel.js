import React from 'react';
import { Carousel, Image, Button } from 'react-bootstrap';

const CourseyCarousel = (props) => {
  return (
    <Carousel
      style={{ width: 600, height: 400 }}
      pause='hover'
      className='bg-dark'>
      <Carousel.Item>
        <Image
          style={{ width: 600, height: 400 }}
          src={`/assets/carousel1.jpeg`}
          alt={'Coursey'}
          fluid
        />
        <Carousel.Caption
          className='carousel-caption'
          style={{ background: 'rgba(0,0,0,0.3)' }}>
          <h3
            style={{ padding: '0.5rem', color: 'white', alignSelf: 'center' }}>
            {'Coursey'}
          </h3>

          <p>
            {
              'Coursey is an interactive app that lets you provide feedback on KTH courses and helps you find new and interesting courses to take.'
            }
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          style={{ width: 600, height: 400 }}
          className='d-block w-100'
          src={`/assets/carousel2.jpg`}
          alt={'Coursey'}
          fluid
        />
        <Carousel.Caption
          className='carousel-caption'
          style={{ background: 'rgba(0,0,0,0.4)' }}>
          <h3
            style={{ padding: '0.5rem', color: 'white', alignSelf: 'center' }}>
            {'About Us'}
          </h3>
          <p>
            <a
              className='mb-2 text-white'
              href='https://github.com/Abdullah1428'
              target='_blank'
              rel='noreferrer'>
              {'Abdullah'}
            </a>
          </p>
          <p>
            <a
              className='mb-2 text-white'
              href='https://github.com/Abdullah1428'
              target='_blank'
              rel='noreferrer'>
              {'Ayushman Khazanchi'}
            </a>
          </p>
          <p>
            <a
              className='mb-2 text-white'
              href='https://github.com/Abdullah1428'
              target='_blank'
              rel='noreferrer'>
              {'Simon Hallak'}
            </a>
          </p>
          <p>
            <a
              className='mb-2 text-white'
              href='https://github.com/Abdullah1428'
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
          src={`/assets/kth-2.jpeg`}
          alt={'Coursey'}
          fluid
        />
        <Carousel.Caption className='carousel-caption'>
          <Button style={{ background: 'rgba(0,0,0,0.7)' }}>
            <h3
              style={{
                padding: '0.5rem',
                color: 'white',
                alignSelf: 'center',
              }}>
              {'Coursey'}
            </h3>
            <p>{'Coursey Project built as part of DH2642'}</p>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CourseyCarousel;
