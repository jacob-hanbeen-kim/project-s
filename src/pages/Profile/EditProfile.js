
import { Tabs } from '../../components';
import EditProfileTab from './EditTabs/EditProfileTab';
import PackageSponsorTab from './EditTabs/PackageSponsorTab'

import { useAuth } from '../../contexts/AuthContext';

const EditProfile = ({ }) => {

    const { currentUser } = useAuth();

    return (
        <Tabs>
                <EditProfileTab label="Edit Profile" />
                <div label="Basic">Basic Section</div>
                <PackageSponsorTab label="Sponsor Package" />
        </Tabs>
    )
}

export default EditProfile