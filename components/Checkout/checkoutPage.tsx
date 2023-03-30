import { AddIcon, ChevronUpIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Center,Button, Grid, GridItem, HStack, Input, useNumberInput } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { MinusCircle } from 'react-feather'
import { FaPaypal } from 'react-icons/fa'
  
function HookUsage() {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
      useNumberInput({
        step: 1,
        defaultValue: 1,
        min: 0,
        max: 5,
        precision: 0,
      })
  
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()
  
    return (
      <HStack  className="ticket-type-font" maxW='320px'>
        <Button {...dec}>-</Button>
        <Input {...input} />
        <Button {...inc}>+</Button>
      </HStack>
    )
  }

export const CheckoutPage = () => {
    return (
        <div className='buy_tickets'>
            <div className='buy_tickets_header' ></div>
            <div className='tickets-section'>
                <div className='buy_tickets_left_section'>
                    <div className='order_summary'>
                        <div className='ticket-info-checkout'>
                            <div className='checkout-header'>
                                <p className='checkout-header-content-font'>Add Tickets</p>
                            </div>
                            <div className='checkout-body'>
                                <div className='checkout-body-content'>
                                    <div className='expansion_details'>
                                        <div className='ticket-type'>
                                            <span></span>
                                            <p></p>
                                        </div>
                                        <div className='no-of-tickets'>
                                        <span></span>
                                           <div></div>
                                        </div>
                                        <div className='tickets-data'>
                                            <div></div>
                                        </div>
                                        <div className='border'></div>
                                        <div className='checkout-button'></div>
                                    </div>
                                </div>
                                
                                </div>
<Accordion  border-style="none" allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box className="checkout-header-content-font" as="span" flex='1' textAlign='left'>
          Add Tickets
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel className="expansion_details" pb={4}>
    <div className="ticket_type">
        <span className='buy-tickets-font'>Ticket Type</span>
        <p className='ticket-type-font'>early bird</p></div>
    </AccordionPanel>
    <AccordionPanel className="expansion_details" pb={4}>
    <div className="ticket_type">
        <div className='buy-tickets-font'>Total Tickets</div>
        <div className='total-tickets-component'>
            <HookUsage/>
        </div>

    </div>
   
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box className="checkout-header-content-font" as="span" flex='1' textAlign='left'>
              Checkout
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel className="expansion_details" pb={4}>
            <div className='contact-info-checkout' >
                     <h2 className='checkout-header-content-font'>Buyers Information</h2>
                <form noValidate autoComplete='off'>
                    <div>
                        <div  className='buy-tickets-text-width'>
                            <input  className="input-font" aria-invalid="false" id="email_address" placeholder='Email Address' type="email"/>
                        </div>
                    </div>
            
                    <button className='purchase-ticket-button'>Send OTP</button>
 
                </form>
            </div>
        
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
                        </div>

                    </div>
                </div>
                <div className='buy_tickets_right_section'>
                    <div className='order_summary'>
                        <div>
                            <img alt="ticket" src="https://static.wixstatic.com/media/bf939a_8165d58fe27a48a38865f3f591b6a83e~mv2.jpeg/v1/fill/w_930,h_901,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bf939a_8165d58fe27a48a38865f3f591b6a83e~mv2.jpeg"/>
                        </div>
                        <div className='ticket_info'>
                            <h2 className='ticket_info_heading'>Order Summary </h2>
                            <div  className='order_summary_ticket_info'>
                                <span >
                                    <span>early bird</span>
                                     (x1)
                                </span>
                                <p>€ &nbsp;70</p>
                            </div>
                            <div className="order_summary_ticket_info"><span>Discount </span><p> -- </p>
                            </div>
                            <span className='ticket-info-divider'></span>
                            <div className='order_summary_ticket_info'>
                                <span>Total</span>
                                <p>$&nbsp;70.00</p>
                            </div>
                            <div className='order_summary_ticket_info'>
                                 <span>Payment With</span>
                                <p><FaPaypal/></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}