

import { Footer } from "../../../components/Footer";
import { JudgingResultsStats, JudgingResultsTable } from "../../../components/JudgingResults";
import { Navbar } from "../../../components/Navbar";


export default function results() {
    return(
    <div>
        <Navbar/>
        <JudgingResultsTable/>
        <Footer/>
    </div>
    )
}