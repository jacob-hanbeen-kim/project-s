
import { Tabs } from '../../components';
import EditProfileTab from './EditTabs/EditProfileTab';

import { useAuth } from '../../contexts/AuthContext';

const EditProfile = ({ }) => {

    const { currentUser } = useAuth();

    return (
        <Tabs>
                <EditProfileTab label="Edit Profile" />
                <div label="Basic">Basic Section</div>
                <div label="Sponsor Package">Sponsor Packages Pre-defined</div>
        </Tabs>
    )
}

export default EditProfile