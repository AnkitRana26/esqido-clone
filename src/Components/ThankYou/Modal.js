import React, { Children, useEffect } from 'react'
import { Button,Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'

const Modals = ({bool,children}) => {

    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
       
    
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] = React.useState(<OverlayOne />)

      useEffect(()=>{
        if(bool){
            setOverlay(<OverlayOne />)
              onOpen()
        }
      },[])
      
      return (
        
          
          
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent h="90vh" display="grid" justifyContent="center" alignItems="center">
          {children}
        </ModalContent>
      </Modal>
          
        
      )
    
}

export default Modals