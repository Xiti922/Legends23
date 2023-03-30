
import { Stack } from "@chakra-ui/react"
import { ProfileCard, ProfileMenu } from "../Profile"

export const ProfileDashboard = () => {
return (
    <div className="layout-container">
        <div className="container-bg">
            <div className="content-layout">
        
                <div className="dashboard-group">
                    <div className="dashboard-layout">
                        <div className="dashboard-left-content">
                            <ProfileCard/>
                            <ProfileMenu/>
                            <div className="dashboard-main-content">
                            <div className="profile-dash-content">
                                <div className="profile-bio">
                                    <div className="profile-bio-title">Bio</div>
                                    <div className="profile-bio-description">You still need to create your Profile bio! You can quickly change this by  
                                    <a className="text-link" href="/dashboard/profile"> Editing Your Profile</a> </div>
                                </div>
   
                            </div>
                        </div>
                        </div>
                        

                    </div>
                </div>
            
            </div>

        </div>

    </div>
)
}