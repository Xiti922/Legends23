import { CheckoutPage } from "../../components/Checkout";
import { Navbar } from "../../components/Navbar";



export default function checkout() {
    return (
        <div>
            <Navbar/>
        <div className="event-dash-main-content">
            <CheckoutPage/>
        </div>
        </div>

    )
}