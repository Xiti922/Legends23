import { ArrowBackIcon, ArrowDownIcon } from "@chakra-ui/icons"
import { CloseButton } from "@chakra-ui/react"
import { Paperclip } from "react-feather"
import { BsCloudArrowUp } from "react-icons/bs"


export const SetupClaim= () => {

    return (
        <div className="admin-mint-container">
            <div className="admin-mint-banner">
                <div className="admin-mint-banner-heading">Setup Claim Mechanisms</div><CloseButton />
            </div>
            <div className="admin-mint-body-banner">
                <div className="admin-mint-body">
                    <div className="admin-mint-body-banner">
                        <div className="admin-mint-body-banner-by-code">By Codes or Free Claim</div>
                        <div className="admin-mint-body-banner-by-code-not-selected">By Terp Wallet Address</div>
                    </div>
                    <div className="admin-mint-by-address-body">
                        <div className="claim-setup-back-to-list-container">
                        </div>
                       <div className="admin-mint-claim-setup-heading">
                        <div className="admin-mint-claim-setup-heading-content">
                            <div className="claim-header-2">
                                <div className="claim-setup-heading-font">Claim Mechanism:</div>
                                <div className="admin-mint-claim-type">Single Claim Code</div>
                                </div>
                            <div className="claim-setup-heading-font-3">Auto Generate a list of single-use Claim Codes</div>
                                </div>
                            <div className="admin-mint-claim-type-selector-component">
                                            <span aria-live="polite" aria-atomic="false" aria-aria-relevant="additions text"  className="admin-mint-claim-type-selector-component-Text"></span>
                                            <div className="admin-mint-claim-type-selector-component-Body">
                                                <div className="component-Body-dropdown">
                                                    <div className="component-Body-dropdown">
                                                        <div className="component-body-dropdown-content">
                                                            <span>Single</span>
                                                        </div>
                                                    </div>

                                                </div>
                                                    <span className="Separator"></span>
                                                <div className="component-Body-dropdown-icon">
                                                    <div className="indicatorContainer" aria-hidden="true"><ArrowDownIcon className="arrow-down-icon"/></div>
                                                </div>
                                            </div>
                                </div>
                            </div>
                        <div className="admin-mint-claim-type-selector">         
                       </div>
                       <div className="admin-mint-by-address-spreadsheet-container">
                       <div className="admin-mint-by-address-search">
                        <div className="claim-setup-content-body">
                        <div className="claim-setup-content-header ">
                            <div className="claim-setup-content-active-from-container">
                                <div className="claim-active-from-heading-components">
                                    <div className="admin-mint-claim-setup-heading-content">
                                        <div className="claim-setup-heading-font">Active From</div>
                                    </div>
                                    <div className="claim-setup-heading-font-2">Optional
                                    </div>
                                </div>
                                <div>
                                    <div className="react-datepicker-wrapper">
                                        <div className="react-datepicker__input-container">
                                            <span role="alert" aria-live="polite" className="react-datepicker__aria-live"></span>
                                            <input type="text" placeholder="Select Date" className="admin-mint-select-date"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="claim-setup-content-active-from-container">
                                <div className="claim-active-from-heading-components">
                                    <div className="admin-mint-claim-setup-heading-content">
                                        <div className="claim-setup-heading-font">Disable At</div>
                                    </div>
                                    <div className="claim-setup-heading-font-2">Optional
                                    </div>
                                </div>
                                <div>
                                    <div className="react-datepicker-wrapper">
                                        <div className="react-datepicker__input-container">
                                            <span role="alert" aria-live="polite" className="react-datepicker__aria-live"></span>
                                            <input type="text" placeholder="Select Date" className="admin-mint-select-date"/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                                <div>
                                    <div className="claim-setup-content-number-generate-body">
                                        <input className="search-content-format" placeholder="Number of Codes to Generate (max 5,000)" ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                       </div>
                       <div datatype="checkbalance"  data-tip="Missing Token to cover this Transaction cost!" className="claim-setup-confirm-mint-component ">
                        <button className="claim-setup-confirm-mint-button">
                            <div className="claim-button-text">
                                <div className="claim-button-text-text">
                                    Generate & Save Codes
                                </div>

                            </div>
                        </button>
                       </div>
                       
                      
                    </div>
                </div>

            </div>
        </div>
        
    )
}