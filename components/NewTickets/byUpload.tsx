import { ArrowBackIcon } from "@chakra-ui/icons"
import { CloseButton } from "@chakra-ui/react"
import { Paperclip } from "react-feather"
import { BsCloudArrowUp } from "react-icons/bs"



export const ByUpload = () => {
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
                        <div className="admin-mint-by-address-body-banner-content">
                            <div className="admin-mint-by-address-body-banner-button-layout">
                                <div className="admin-mint-by-address-body-banner-button-manage">
                                    <div className="manage-addresses-button ">
                                        <ArrowBackIcon />
                                        <div className="manage-addresses-font">Go Back</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="admint-mint-by-address-spreadsheet-upload">
                            <div className="admin-mint-by-address-spreadsheet-container">
                                <div className="mint-by-spreadsheet-upload-banner">
                                    <div className="mint-by-spreadsheet-upload-selector">
                                        <input type="radio" id="claims-whitelist-type_input" className="claim-radio" value="input" />
                                        <label> <div className="claim-radio-font">Input</div></label>
                                    </div>
                                    <div className="mint-by-spreadsheet-upload-selector">
                                        <input type="radio" id="claims-whitelist-type_input" className="claim-radio" value="input" />
                                        <label> <div className="claim-radio-font">Upload File</div></label>
                                    </div>
                                </div>
                                <div className="mint-by-spreadsheet-upload-banner-2">
                                    <div className="claim-header-2">
                                        <div className="claim-header-2-font">
                                            Total Addresses:
                                        </div>
                                        <div className="claim-radio-font">0</div>
                                    </div>
                                    <div className="claim-header-2">
                                        <div className="claim-header-2-font">
                                            Total Quantity:
                                        </div>
                                        <div className="claim-radio-font">0</div>
                                    </div>

                                </div>
                                <div className="mint-by-spreadsheet-upload-body-container">
                                    <div className="claim-body-column">
                                        <div className="claim-body-column-content-1">
                                            <div className="claim-body-column-content-box">1</div>
                                            <div className="claim-body-column-context-container">
                                                <div className="claim-body-column-context-container-text">Download and fill out excel file.</div>
                                                <div className="claim-body-column-context-container-text-2">Max Addresses: 300</div>
                                            </div>
                                        </div>
                                        <div className="claim-body-column-content-2">
                                            <Paperclip />
                                            <div className="mint-table-component-address-header">whitelist.xlsx</div>
                                        </div>
                                    </div>
                                    <div className="claim-body-column-2">
                                        <div className="claim-body-column-content-1">
                                            <div className="claim-body-column-text ">2</div>
                                            <div className="claim-body-column-context-container">
                                                <div className="claim-body-column-context-container-text">Upload filled out file.</div>
                                                <div className="claim-body-column-context-container-text-2">Max size: 1MB</div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="claim-body-column-2-area">
                                                <div role="button" className="claim-body-column-2-area-button">
                                                    <input accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" type="file" autoComplete="off" tabIndex={-1} className="style-display-none" />
                                                    <div className="claim-body-column-2-media">
                                                        <BsCloudArrowUp size={50} />
                                                        <div className="claim-body-column-2-media-font ">Upload File</div>
                                                        <div className="claim-body-column-2-media-font-2">Max Size: 1MB</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-for="checkbalance" data-tip="Missing Fee to cover this Transactions cost!" className="claim-button-container">
                            <button className="claim-button-button">
                                <div className="claim-button-text">
                                    <div className="claim-button-text-text">Submit</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
