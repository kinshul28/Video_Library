import React from 'react';
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const Home = () => {
  return (
    <Box>
        <MyCarousel/>
        
        <Container maxW={'container.xl'} minH={'100vh'} p={16}>
            <Heading 
            w={'fit-content'}
            padding={2}
            borderBottom={'2px solid'}
            m={'auto'}
            >SERVICES</Heading>

            <Stack alignItems={'center'} h={'full'} direction={['column', 'row']} 
            w= {'full'} p={['4', '16']} //not in master
            // p={'4'} // padding in master was just 4.  
            >
                <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
                <Text 
                    // wordSpacing = {'widest'} //in master but doesn't look good
                    lineHeight={'190%'}
                    marginLeft={'16'} //my styling
                    textAlign={'center'} 
                    // p={['4', '16']} //master styling 
                    
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
                    tempora deleniti quod, est eos veniam autem asperiores rem, nam
                    laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
                    at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
                    sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
                    Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
                    modi soluta ullam voluptatum unde repellat in molestias quod?
                    Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
                    velit culpa maiores. Inventore esse illum excepturi dolores est
                    natus aliquid maiores sunt omnis deserunt accusantium amet enim eos
                    adipisci minima hic, nam provident quo aperiam quasi vel?
                    Dignissimos accusantium aliquid aut vel explicabo voluptatum
                    molestias fugit harum reprehenderit incidunt. Quis cumque explicabo
                    omnis officiis autem dolorum!

                </Text>
            </Stack>
        </Container>
    </Box>
  );
}

const headingoptions={
    pos: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    p:'4',
    size: '4xl'
}

const MyCarousel=()=>{
    return ( 
    <Carousel autoPlay infiniteLoop alternate interval={1000} showArrows= {true} showIndicators={true} showThumbs={true} showStatus={false} >
        <Box h={'100vh'} w='full'  >
            <Image src={img1} objectFit={'cover'} h={'full'} w={'full'}></Image>
            <Heading {...headingoptions} bgColor='blackAlpha.500'>Watch the Future</Heading>
        </Box>
        
        <Box h={'100vh'} w={'full'}  >
            <Image src={img2} objectFit={'cover'} h={'full'} w={'full'}></Image>
            <Heading {...headingoptions} bgColor='whiteAlpha.900' color={'black'} >Future is Gaming</Heading>
        </Box>
        <Box h={'100vh'} w={'full'}  >
            <Image src={img3} objectFit={'cover'} h={'full'} w={'full'}></Image>
            <Heading {...headingoptions} bgColor='whiteAlpha.600' color={'black'}>Gaming on Console</Heading>
        </Box>
        <Box h={'100vh'} w={'full'}  >
            <Image src={img4} objectFit={'cover'} h={'full'} w={'full'}></Image>
            <Heading {...headingoptions} bgColor='whiteAlpha.600' color={'black'} >Night Life is Cool</Heading>
        </Box>
    
    </Carousel>
    
)}

export default Home;
