import { Container, VStack, HStack, Button, Input } from '@chakra-ui/react';
import React from 'react';
import {AiOutlineCloudUpload} from 'react-icons/ai'
const Upload = () => {
  return (
    <Container 
    maxW={Container.xl} 
    h={'100vh'} 
    p={16} 
    >
      <VStack 
      h={'full'} 
      justifyContent={'center'}
      // color={'purple.500'} //as in master
      >
      <AiOutlineCloudUpload size={'10vmax'} 
      //color='purple' //my experiment
      />

      <HStack>
        <Input type="file"
        css={{
          '&::file-selector-button':{
          // border: 'none', //as in master
          height: '100%',
          marginLeft: '-18px',
          color: 'purple',
          backgroundColor: 'white',
          cursor: 'pointer',
          // width: 'calc(100% + 36px)' //as in master

        }}}

        />
        <Button
        colorScheme='purple' //as in master

        >Upload</Button>
      </HStack>
      </VStack>
      
    </Container>
  );
}

export default Upload;
