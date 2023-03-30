import { Container } from "@chakra-ui/react"
import { ArrowLeftCircle, Eye, Gift, RefreshCcw, ShoppingCart } from "react-feather"
import { BsCoin, BsMinecart, BsStack } from "react-icons/bs"
import { FaDollarSign, FaTemperatureHigh } from "react-icons/fa"
import { IoRefresh, IoRefreshOutline } from "react-icons/io5"

export const TicketWidget = () => {
    return (
        <div>
            <div className="ticket-container">
            <div className="context">
            <div className="ticket-widget-layout">
            <div className="ticket-widget-body">
            <div className="ticket-container-bg">
            <div className="ticket-widget-flex">
              <div className="ticket-image-content">
                    <div className="entries-card-bg-pic">
                        <img className="ticket-image-content-img" src="https://bafybeigoaq2i7t4ptdfg6z4uqctdild3m5frkwnhysncmroqj6r37i5s6m.ipfs.nftstorage.link/"></img>
                    </div>
            </div>
              <div className="ticket-info-content">
                <div className="ticket-widget-content">
                <div className="top-ticket-widget-content">
                    <div className="ticket-widget-content-header">
                        <div className="ticket-widget-content-heading">
                          <div className="ticket-widget-content-heading-text">2023 Event Tickets
                            </div>
                          <div className="ticket-widget-refresh">
                            <button className="button-icon"><IoRefreshOutline color="white"className="tabs-icon"/>
                            </button>
                             </div>
                        </div>
                        <div className="ticket-widget-supply-banner">
                         <div className="ticket-widget-icon-banner">
                            <button className="icon-banner-button"><BsStack className="tabs-icon" />
                              <div className="pw-text">Total Access Tokens
                              </div>
                            </button>
                            <button className="icon-banner-button"><BsMinecart className="tabs-icon" />
                              <div className="pw-text">Total Minted
                              </div>
                            </button>
                            <button className="icon-banner-button"><Eye className="tabs-icon" />
                              <div className="pw-text">View Event Details
                              </div>
                            </button>
                          </div>
                        </div>
                        </div>
                        </div>    
                            <div className="ticket-widget-description">
                                This is where event-specific description will end up. This should be available in Markdown format to make it more legible
                            </div>
                            </div>
                            <br/>
                            <div className="bottom-ticket-widget-content">
                            <div><div className="claim-code-button"></div></div>
                            <br/>
                                <div className="ticket-widget-tools"></div>
                                
                                <div className="tools-layout-left">
                                    <div className="ticket-widget-tools-layout">
                                        <div>
                                        <div className="purchase-price">
                                                        <BsCoin className="svgcoin"/>
                                                        <div className="ticket-widget-price">75</div>
                                                        <div className="ticket-widget-denom">axlUSDC</div>
                                                    </div>
                                            <div className="ticket-mint-purchase">
                                                <br></br>
                                                <div className="purchase-body">
                                                    
                                                    <div className="purchase-button-content">
                                                    <button className="claim-code-button-details">
                                                    <div className="claim-button-text">
                                                    <div className="claim-button-text-text"><ShoppingCart className="svgcolor"/>PURCHASE NOW
                                                    </div>
                                                  </div>
                                                  </button>
                                                    </div>
                                                </div>
                                                <br></br>
                                                
                                                <div className="purchase-header"></div>
                                                
                                                <br/>   
                                                
                                            </div>
                                        </div>

                                    <div className="tools-layout-divider"></div>
                                        <form className="ticket-widget-claim-layout">
                                            <div className="claim-code-input">
                                                <div className="admin-mint-claim-setup-heading-content">
                                                    <div className="claim-setup-heading-font">Claim Code</div>
                                                </div>
                                                <div>
                                                    <div className="ticket-widget-claim-input">
                                                        <input placeholder="Claim Code" className="search-content-format"></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="claim-code-input-2">

                                            </div>
                                            <div><div className="claim-code-button">
                                                <button className="claim-code-button-details">
                                                    <div className="claim-button-text">
                                                    <div className="claim-button-text-text"><Gift className="svg"/>CLAIM NOW
                                                    </div>
                                                  </div>
                                                  </button>
                                              </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                              
                                <div className="tools-layout-right">
                                <form className="ticket-widget-claim-layout">
                                            
                                            <div className="claim-code-input-2">

                                            </div>
                                           
                                        </form>
                                </div>
                            </div>
                        </div>
                        
                   
                </div>
            </div>
            </div> 
            </div>
            </div>
            </div>
        </div>
    )
}