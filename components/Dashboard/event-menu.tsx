import { ChevronDownIcon } from '@chakra-ui/icons'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from 'react'
import { TicketWidget, MarketplaceWidget, MessageBoardWidget,
  AllEntriesWidget, JudgingWidget } from '../Widgets'

export const EventMenuComponent = () => {
  
    return (
    <div className='event-dash-tabs-content'>

<Tabs className='tabs-content-container' variant='enclosed'>
  <TabList mb='1em'>
    <Tab color="#F06543">Tickets</Tab>
    <Tab color="#F06543">MarketPlace</Tab>
    <Tab color="#F06543">Important Announcements</Tab>
    <Tab color="#F06543">Browse Entries</Tab>
    <Tab color="#F06543">Judging Leaderboard</Tab>
  </TabList>
  <TabPanels>
    <TabPanel><TicketWidget/></TabPanel>
    <TabPanel><MarketplaceWidget/></TabPanel>
    <TabPanel><MessageBoardWidget/></TabPanel>
    <TabPanel><AllEntriesWidget/></TabPanel>
    <TabPanel><JudgingWidget/></TabPanel>
  </TabPanels>
</Tabs>
    
  </div>
    )
}