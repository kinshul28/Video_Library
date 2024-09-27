import React from 'react';
import {BiMenuAltLeft} from 'react-icons/bi'
import {Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure, DrawerCloseButton, VStack, HStack} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
const Header = () => {

  const {isOpen, onOpen, onClose}= useDisclosure()
  return (
    <div>
        <Button  
        width={'10'}
        height={'10'}
        p={'0'}
        // pos={'absolute'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        borderRadius={'full'}
        colorScheme='purple'
        onClick={onOpen}
        zIndex={'overlay'}
        
        >
            <BiMenuAltLeft size={20} />
        
        </Button>

        <Drawer 
        onClose={onClose} 
        isOpen={isOpen} 
        placement='left'>
            <DrawerOverlay/>
            <DrawerContent>
                
                <DrawerCloseButton/>
                <DrawerHeader>VIDEO LIBRARY</DrawerHeader>
                    <DrawerBody>
                        <VStack >
                            <Button 
                            colorScheme='purple'
                            variant={'ghost'}
                            w={'full'}
                            justifyContent={'start'}
                            onClick={onClose}

                            ><Link to='/'>Home</Link></Button>
                            
                            <Button 
                            colorScheme='purple'
                            variant={'ghost'}
                            w={'full'}
                            justifyContent={'start'}
                            onClick={onClose}
                            ><Link to='/videos'>Videos</Link></Button>

                            <Button 
                            colorScheme='purple'
                            variant={'ghost'}
                            w={'full'}
                            justifyContent={'start'}
                            onClick={onClose}
                            ><Link to='/videos?category=free'>Free Videos</Link></Button>

                            <Button 
                            colorScheme='purple'
                            variant={'ghost'}
                            w={'full'}
                            justifyContent={'start'}
                            onClick={onClose}
                            ><Link to='/Upload'>Upload</Link></Button>


                        </VStack>
                        <HStack pos={'absolute'} bottom={'10'} justifyContent={'space-evenly'} 
                        w={'full'} left={'0'}
                        >
                            <Button 
                                colorScheme='purple'
                                onClick={onClose}
                                ><Link to='/login'>Login</Link>
                            </Button>
                            
                            <Button 
                                colorScheme='purple'
                                variant={'outline'}
                                onClick={onClose}
                                ><Link to='/signup'>Sign Up</Link>
                            </Button>
                        </HStack>
                    </DrawerBody>

            </DrawerContent>
        </Drawer>  
    </div>
  );
}

export default Header;
