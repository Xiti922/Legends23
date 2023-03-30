import { BellIcon } from "@chakra-ui/icons"
import { FaLuggageCart } from "react-icons/fa"
import { IoHammerOutline, IoPersonCircleOutline, IoTrophy } from "react-icons/io5"

export const ProfileMenu = () => {
return (
    <div className="profile-column">
                                <div className="profile-column-settings-and-rewards">
                                    <div className="settings-and-rewards-content">
                                        <a className="profile-and-wallets">
                                            <IoPersonCircleOutline className="svg"/>
                                            <div className="profile-and-wallets-text">
                                                <div className="pw-text">Profile & Wallets</div>
                                            </div>
                                        </a>
                                        <a className="profile-rewards">
                                            <IoTrophy className="svg"/>
                                            <div className="profile-and-wallets-text">
                                                <div className="pw-text">Rewards & Credits</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="profile-column-categories">
                                    <div className="profile-column-header">Events</div>
                                    <div className="settings-and-rewards-content">
                                        <a className="profile-rewards">
                                            <BellIcon className="svg"/>
                                            <div className="profile-and-wallets-text">
                                                <div className="pw-text">My Events</div>
                                            </div>
                                        </a>
                                        <a className="profile-rewards">
                                        <BellIcon className="svg"/>
                                            <div className="profile-and-wallets-text">
                                                    <div className="pw-text">Following Events</div>
                                            </div>
                                        </a>
                                        <a className="profile-rewards">
                                        <BellIcon className="svg"/>
                                            <div className="profile-and-wallets-text">
                                                <div className="pw-text">Notifications</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="profile-column-categories">
                                <div className="profile-column-header">Assets</div>
                                <div className="settings-and-rewards-content">
                                <a className="profile-rewards">
                                    <FaLuggageCart  className="svg" />
                                    <div className="profile-and-wallets-text">
                                        <div className="pw-text">Tickets</div>
                                    </div>
                                </a>
                                <a className="profile-rewards">
                                <   FaLuggageCart  className="svg"/>
                                    <div className="profile-and-wallets-text">
                                        <div className="pw-text">Tokens</div>
                                    </div>
                                </a>

                                </div>
                                </div>
                                <div className="profile-column-categories">
                                <div className="profile-column-header">Commerce</div>
                                <div className="settings-and-rewards-content">
                                        <a className="profile-rewards">
                                            <IoHammerOutline/>
                                            <div className="profile-and-wallets-text ">
                                                <div className="pw-text">Sales</div>
                                            </div>
                                        </a>
                                        <a className="profile-rewards">
                                        <IoHammerOutline/>
                                        <div className="profile-and-wallets-text ">
                                                <div className="pw-text">Payments</div>
                                            </div>

                                        </a>
                                    </div>
                                </div>
                                <div className="profile-column-categories">
                                <div className="profile-column-header">Interactions</div>
                                    <div className="settings-and-rewards-content">
                                        <a className="profile-rewards">
                                            <IoHammerOutline/>
                                            <div className="profile-and-wallets-text ">
                                                <div className="pw-text">Auctions</div>
                                            </div>
                                        </a>
                                        <a className="profile-rewards">
                                        <IoHammerOutline/>
                                        <div className="profile-and-wallets-text ">
                                                <div className="pw-text">Bids</div>
                                            </div>

                                        </a>
                                        <a className="profile-rewards">
                                        <IoHammerOutline/>
                                        <div className="profile-and-wallets-text ">
                                                <div className="pw-text">Transactions</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
)
}