import { Search2Icon } from "@chakra-ui/icons"
import { Trash2 } from "react-feather"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { CloseButton, Text } from "@chakra-ui/react"
import { BsPencilSquare } from "react-icons/bs"

export const ByCode= () => {

    return (
        <div className="admin-mint-container">
        <div className="admin-mint-banner">
          <div className="admin-mint-banner-heading">Setup Claim Mechanisms</div><CloseButton />
        </div>
        <div className="admin-mint-body">
          <div className="admin-mint-body-banner">
            <div className="admin-mint-body-banner-by-code">By Code or Free Claims</div>
            <div className="admin-mint-body-banner-by-address">By Terp or Wallet Address</div>
          </div>
          <div className="admin-mint-by-address-body">
            <div className="admin-mint-by-address-body-banner-content">
              <div className="admin-mint-by-address-body-banner-button-layout">
                <div className="admin-mint-by-address-body-banner-button-manage">
                  <div className="manage-addresses-button">
                    <BsPencilSquare/>
                  <div className="manage-addresses-font">Setup Claims</div>
                  </div>
                </div>
                <div className="admin-mint-by-address-search-tooling">
                  <div className="admin-mint-by-address-search flex-width">
                    <div>
                      <div className="admin-mint-by-address-search-content">
                        <Search2Icon className="search-icon-sm" />
                        <input className="search-content-format" placeholder="Search Full Terp Address"></input>
                      </div>
                    </div>
                  </div>
                  <button className="search-content-delete-button-shell">
                    <Trash2 className="search-content-delete-button"/>
                  </button>
                </div>
              </div>
            </div>
            <div className="admin-mint-body-banner-addresses">
                <div className="admin-mint-index-buttons-container">
                  <div className="admin-mint-index-buttons-group">
                    <button  className="index-button-icon" >
               <FaChevronLeft/>
                    </button>
                    <button className="index-button-icon">
                    <FaChevronLeft/>
                    </button>
                    <div className="index-buttons-font">1 of 44 </div>
                    <button className="index-button-icon">
                      <FaChevronRight/>
                    </button>
                    <button className="index-button-icon">
                      <FaChevronRight/>
                      </button>
                  </div>
                </div>
                <div>
                  <table role="table" className="admin-mint-table">
                    <thead>
                      <tr role="row">
                        <th colSpan={1} role="columnheader" className="mint-table-check-button">
                            <div className="mint-table-check-botton-components">
                              <div className="mint-table-check-botton-components-box">
                                <div>
                                  <input type="checkbox" title="Toggle All Current Page Rows Selected" ></input>
                                </div>
                              </div>
                            </div>
                        </th>
                        <th colSpan={1} role="columnheader" className="mint-table-claim-header">
                        <div className="mint-table-check-botton-components">
                        <div className="mint-table-check-botton-components-box">
                        <Text className="mint-table-component-address-header">Code </Text>
                        <span></span>
                        </div>
                        </div>
                        </th>
                        <th colSpan={1} role="columnheader" className="mint-table-claim-header" title="Toggle Sort By"> 
                        <div className="mint-table-check-botton-components">
                        <div className="mint-table-claim-header-container">
                        <Text className="mint-table-component-address-header">Redeemed</Text>
                          </div>
                          </div>
                        </th>
                        <th colSpan={1} role="columnheader" className="mint-table-claim-header" title="Toggle Sort By"> 
                        <div className="mint-table-check-botton-components">
                        <div className="mint-table-claim-header-container">
                        <Text className="mint-table-component-address-header">Max Uses</Text>
                          </div>
                          </div>
                        </th>
                        <th colSpan={1} role="columnheader" className="mint-table-claim-header" title="Toggle Sort By"> 
                        <div className="mint-table-check-botton-components">
                        <div className="mint-table-claim-header-container">
                        <Text className="mint-table-component-address-header">Start</Text>
                          </div>
                          </div>
                        </th>
                        <th colSpan={1} role="columnheader" className="mint-table-claims-left-header">
                        <div className="mint-table-check-botton-components">
                        <div className="mint-table-check-botton-components-box">
                          <Text className="mint-table-component-claim-status-header">
                            End
                          </Text>
                        </div>
                        </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody role="rowgroup">
                      <tr role="row" className="admin-mint-table-component-row">
                        <td role="cell" className="admin-mint-row-component-cell">
                         <div><input type="checkbox" title="Toggle Row Selected" className="cursor-pointer" ></input></div>
                        </td>
                        <td role="cell" className="admin-mint-row-component-cell">
                         <div className="admin-mint-row-component-address">
                         2x4fwq
                         </div>
                         </td>
                         <td role="cell" className="admin-mint-row-component-cell">
                         <div className="manage-addresses-font">1</div>
                         </td>
                         <td role="cell" className="admin-mint-row-component-cell">
                         <div className="admin-mint-row-component-status-noti">Active</div>
                         </td>
                         <td role="cell" className="admin-mint-row-component-cell">
                         <div className="manage-addresses-font">-</div>
                         </td>
                         <td role="cell" className="admin-mint-row-component-cell">
                         <div className="manage-addresses-font">-</div>
                         </td>

                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}