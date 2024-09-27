import React from 'react';
import { Box, Stack, VStack, HStack, Heading, Input, Text, Button } from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box p={16} minH={'40'} bgColor={'blackAlpha.900'} color={'white'}>
    <Stack 
    direction={['column','row']}
    // My tries
    // alignItems={'stretch'} //couldn't observe any changes 
    // justifyContent={'space-evenly'} //doesn't look nice and it would be needed to style each small thing minutely
    // w={'full'} //didn't have effect maybe because by default it is a block element and occupies whole width    
    >
        <VStack 
        alignItems={'stretch'} //adjusted beginning point of heading and hstack as well as stretched the input field
        w={'full'} //copied from master, seems much effective
        px={4} 
        
        >
            <Heading textAlign={['center', 'left']} size={'md'} textTransform={'uppercase'}>Subscribe to Get Updates </Heading>
         
            <HStack 
            // w={'full'}  //doesn't seem to have any difference
            py={2} borderBottom={'2px solid white'} >
                <Input focusBorderColor='none' borderRadius={'none'} //took the idea from master  
                outline={'none'} border={'none'} type='email' placeholder='Enter email here..'></Input>

                <Button 
                variant={'ghost'} //as in master, gives shadow on hover 
                // variant={'link'} //mine, doesn't give shadow on hovering
                // type= {'link'} //not required
                colorScheme={'purple'}
                borderRadius={'0 20px 20px 0'} //gives good hover shadow, took this idea from master
                ><AiOutlineSend size={20} /></Button>
            </HStack>
        </VStack >
            
        <VStack 
        w={'full'} //copied from master, seems much effective
        // px={2} //not required to give padding as spacing automatically got adjusted after maximizing the width
        borderLeft={['none','2px solid white']}
        borderRight={['none','2px solid white']}
        
        >
            <Heading 
            size={'xl'}
            >VIDEO LIBRARY</Heading>
            <Text>All Rights Reserved</Text>
        </VStack>

        <VStack 
        w={'full'} //copied from master, seems much effective
        
        >
            <Heading size={'md'}>SOCIAL MEDIA</Heading>
            <Button colorScheme='purple.500'  variant={'link'}> <a target= 'blank' href="#">Youtube</a> </Button>
            <Button colorScheme='purple.500' variant={'link'}> <a target= 'blank' href="#">Instagram</a> </Button>
            <Button colorScheme='purple.500' variant={'link'}> <a target= 'blank' href="#">Github</a> </Button>
        </VStack>
    </Stack>  
    </Box>
  );
}

export default Footer;
