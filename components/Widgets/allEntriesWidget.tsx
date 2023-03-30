import { Box, Center, Input ,SimpleGrid} from "@chakra-ui/react"

export const AllEntriesWidget = () => {
    return (
        <div>
            <div className="admin-mint-body-banner-addresses">
                <div className="all-entries-search">
                    <Input placeholder='Search Entries' />
                </div>
               

    <div className="profile-rewards-component ">
    <div className="element.style">
   <SimpleGrid columns={2} spacing={10}>
  <div className="entries-card-container">           
  <div className="entries-card">
        <div className="entries-card-bg">
            <div className="entries-card-bg-pic"><img  className="entry-img"src="https://raw.githubusercontent.com/Xiti922/event-usher-application/main/src/assets/Compressed%20pics/eight.png"></img></div>
        </div>
        <div className="entries-card-body">
            <div className="entry-card-maker-pfp">
            </div>
                <div className="entry-card-title-text">Entry 1</div>
                <div className="entry-card-maker-details">Entry 1 Description</div>
        </div>
    </div>
  </div>
  <div className="entries-card-container">
  <div className="entries-card">
        <div className="entries-card-bg">
        <div className="entries-card-bg-pic"><img  className="entry-img"src="https://raw.githubusercontent.com/Xiti922/event-usher-application/main/src/assets/Compressed%20pics/fourtyfive.png"></img></div>

        </div>
        <div className="entries-card-body">
            <div className="entry-card-maker-pfp">
            </div>
                <div className="entry-card-title-text">Entry 2</div>
                <div className="entry-card-maker-details">Entry 2 Description</div>
        </div>
    </div>
  </div>
  <div className="entries-card-container">
  <div className="entries-card">
        <div className="entries-card-bg">
        <div className="entries-card-bg-pic"><img  className="entry-img"src="https://raw.githubusercontent.com/Xiti922/event-usher-application/main/src/assets/Compressed%20pics/seven.png"></img></div>
        </div>
        <div className="entries-card-body">
            <div className="entry-card-maker-pfp">
            </div>
                <div className="entry-card-title-text">Entry 3</div>
                <div className="entry-card-maker-details">Entry 3 Description</div>
        </div>
    </div>
  </div>
  <div className="entries-card-container">
  <div className="entries-card">
        <div className="entries-card-bg">
        <div className="entries-card-bg-pic"><img  className="entry-img"src="https://raw.githubusercontent.com/Xiti922/event-usher-application/main/src/assets/Compressed%20pics/thirtyfive.png"></img></div>

        </div>
        <div className="entries-card-body">
            <div className="entry-card-maker-pfp">
            </div>
                <div className="entry-card-title-text">Entry 4</div>
                <div className="entry-card-maker-details">Entry 4 Description</div>
        </div>
    </div>
  </div>
</SimpleGrid>
  </div>
</div>
</div>
</div>
        
    )
}