import { Center } from '@chakra-ui/react'
import {EventDashboard} from '../../components/Dashboard/event'
import { Navbar } from '../../components/Navbar'

export default function event() {
    return (
        <div className="event-dash-main-content">
        <Navbar/>
        <Center>
        <EventDashboard/>
        </Center>
        </div>
    )
}