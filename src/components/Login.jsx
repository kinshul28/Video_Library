import React from 'react';
import { Container, VStack, Input, Heading, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Login = () => {
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
          <Heading textAlign={'center'}>WELCOME BACK!</Heading>
          
          {/* <Avatar alignSelf={'center'} boxSize={'32'} /> */}

          <Input focusBorderColor={'purple.500'} type='text' placeholder='Name'></Input>
          <Input focusBorderColor={'purple.500'} type='password' placeholder='Password'></Input>
          <Button 
          alignSelf='flex-end' 
          variant={'link'}
          
          >
            <Link to='/forgotpassword'>Forgot password?</Link></Button>

          <Button type={'submit'} colorScheme='purple' >Login</Button>
          <Text textAlign={'right'}>New User?{' '}<Button colorScheme='purple' variant={'link'}><Link to={'/signup'}>Register</Link></Button></Text> 
        </VStack>
      </form>      
    </Container>
  );
}

export default Login;
