import React from 'react';
import { Container, VStack, Input, Heading, Button, Text, Avatar } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={16}>
      <form action="">
        <VStack 
        h={'full'} 
        spacing={8}
        w={['full', '96']}
        m={'auto'}
        my={16} 
        alignItems={'stretch'} 
        //My experiments
        // justifySelf={'center'}
        // pos={'fixed'}
        // top={'50%'}
        // right={'50%'}
        // transform= 'translate(50%, 50%)'

        
        >
          <Heading textAlign={'center'}>WELCOME!</Heading>
          
          <Avatar alignSelf={'center'} boxSize={'32'} />
          
          <Input focusBorderColor={'purple.500'} type='text' placeholder='Name'></Input>
          <Input focusBorderColor={'purple.500'} type='email' placeholder='Email'></Input>
          <Input focusBorderColor={'purple.500'} type='password' placeholder='Password'></Input>
          {/* <Button 
          alignSelf='flex-end' 
          variant={'link'}
          
          > */}
            {/* <Link to='/forgotpassword'></Link></Button> */}

          <Button type={'submit'} colorScheme='purple' >Register</Button>
          <Text textAlign={'right'}>Already a User?{' '}<Button colorScheme='purple' variant={'link'}><Link to={'/login'}>Login</Link></Button></Text> 
        </VStack>
      </form>      
    </Container>
  );
}

export default Signup;
