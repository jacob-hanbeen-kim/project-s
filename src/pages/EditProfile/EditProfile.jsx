
import { Tabs } from '../../components';
import Profile from './Profile/Profile';
import PackageSponsorTab from './EditTabs/PackageSponsorTab'
import Settings from './EditTabs/Settings';

import { useAuth } from '../../contexts/AuthContext';

const EditProfile = ({ }) => {

    const { currentUser } = useAuth();

    return (
        <Tabs>
            <Profile label="Profile" />
            <div label="Basic">Basic Section</div>
            <PackageSponsorTab label="Sponsor Package" />
            <Settings label="Settings" />
        </Tabs>
    )
}

export default EditProfile