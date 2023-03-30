import { Wrap, Menu, MenuButton, MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider, } from '@chakra-ui/react'
import { PlusCircle } from "react-feather"
import {BsArrowRepeat, BsChat, BsFillPersonFill, BsGear, BsGlobe, BsJournalBookmark, BsPencilSquare, BsReceipt, BsShop, BsThreeDotsVertical } from "react-icons/bs"
import { FaCopy, FaTicketAlt, FaTshirt, FaVoteYea } from "react-icons/fa"
import { TicketsFilterMenu } from '../FilterMenu'
import { EventMenuComponent } from './event-menu'


export const EventDashboard = () => {
   
    return (
            <div className="content-layout">
                <div className="event-dash-layout">
                    <div className="event-dash-info-content">
                        <div className="event-dash-main-content-banner">
                            <div className="event-dash-main-content-pfp">
                                <div className="pfp-content"/>
                            </div>
                            <div className="event-dash-main-content-pfpevent-dash-main-content-stats">
                                <Wrap >
                                <div className="main-content-stats-components">
                                    <div className="stats-component">
                                        <div className="stats-component-text"></div>
                                    </div>
                                    <div className="stats-component">
                                        <FaTicketAlt className="tabs-icon"/>
                                    <div className="stats-component-text">0 Tickets</div>
                                    </div>
                                    <div className="stats-component">
                                        <BsArrowRepeat  className="tabs-icon"/>
                                    <div className="stats-component-text">250 Tickets Sold</div>
                                    </div>
                                    <div className="stats-component">
                                       <BsFillPersonFill className="tabs-icon"/>
                                    <div className="stats-component-text"> 40 Judges</div>
                                    </div>
                                    <div className="stats-component">
                                    <FaVoteYea  className="tabs-icon"/>
                                    <div className="stats-component-text">60 Entries</div>
                                    </div>
                                    <div className="stats-component">
                                        <FaTshirt className="tabs-icon"/>
                                    <div className="stats-component-text">100 Limited Edition Merchandise Available</div>
                                    </div> 
                                </div>
                                <div className="stats-component-judge-and-admin-functions">
                                    <div className="admin-mint-by-address-body-banner-button-manage">
                                        <PlusCircle className="tabs-icon"/>
                                        <div className="stats-component-text">
                                            Create
                                        </div>
                                    </div>
                                    <div className="admin-mint-by-address-body-banner-button-manage">
                                        <div className="manage-addresses-button">
                                            <BsPencilSquare className="tabs-icon"/>
                                            <div className="stats-component-text">
                                                Manage
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Wrap>
                            </div>
                        </div>
                        <div className="event-dash-main-content-info">
                            <div>
                                <div className="dash-content-links-container">
                                    <button className="search-content-delete-button-shell">
                                        <BsGlobe  className="tabs-icon"/>
                                    </button>
                                </div>
                                    <div className="event-identity-container">
                                        <div className="event-title-banner-container">
                                            <div className="event-title-content">
                                                <div className="event-title-font">Legends of Hashish Event Access Tokens</div>
                                            </div>
                                            <div className="event-title-links-container">
                                                <Menu>
                                                <MenuButton className="event-links-button" >
                                                    <div className="admin-mint-by-address-body-banner-button-manage">
                                                        <BsThreeDotsVertical className="tabs-icon"/>
                                                    </div>
                                                </MenuButton>
                                                <MenuList>
                                                <MenuItem>Settings</MenuItem>
                                                <MenuItem>Admin Dashboard</MenuItem>
                                                <MenuItem>Judging Dashboard</MenuItem>
                                                <MenuItem>View on Mintscan</MenuItem>
                                                <MenuItem>Roundtable Schedule</MenuItem>
                                            </MenuList>
                                                </Menu>
                                            </div>

                                        </div>
                                        <button className="button-icon">
                                            <div className="event-address-container">
                                                <div className="event-address-font">secret1yln...vkeavdar9w</div>
                                                <FaCopy  className="tabs-icon"/>
                                            </div>
                                        </button>
                                    </div>
                                <div className="dash-content-event-identity-content">

                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="event-dash-tabs">
                        <EventMenuComponent />
                    {/*<div className="event-dash-tabs-content">
                        <a id="tab-tickets" className="tabs-content-container">
                            <div className="tabs-content-ticket-group"><BsReceipt  className="tabs-icon" />
                            <div className="tabs-text">Tickets</div>
                            </div>
                        </a>
                        <a id="tab-marketplace" className="tabs-content-container">
                        <div className="tabs-content-ticket-group"><BsShop className="tabs-icon"/>
                            <div className="tabs-text">Pop-Up Marketplace</div>
                            </div>
                        </a>
                        <a id="tab-voting" className="tabs-content-container">
                        <div className="tabs-content-ticket-group"><BsJournalBookmark className="tabs-icon"/>
                            <div className="tabs-text">Event Judging</div>
                            </div>
                        </a>
                        <a id="message-board" className="tabs-content-container">
                        <div className="tabs-content-ticket-group"><BsChat className="tabs-icon" />
                            <div className="tabs-text">Message Board</div>
                            </div>
                        </a>
                        <a id="analytics" className="tabs-content-container">
                        <div className="tabs-content-ticket-group"><BsGear className="tabs-icon"/>
                            <div className="tabs-text">Settings </div>
                            </div>
                        </a>
                        </div>*/}   

                    </div>
                    <div className="event-dash-tabs-content">
                        <TicketsFilterMenu/>
                        </div>
                </div>
            </div>
    )
}