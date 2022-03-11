import { useState, useRef } from 'react';
import  UserPackageService  from '../../../services/user-package-service';
import {
    PackageSponsorContainer,
    HeaderWrapper,
    NewItemContainer,
    NewItemWrapper,
    AddItemButton,
    ButtonWrapper,
    PackageList,
    PackageWrapper,
    ExpandButton,
    NoPackageWrapper,
} from './PackageSponsorTab.styled'

import { useAuth } from '../../../contexts/AuthContext';
import PackageForm from '../../../components/PackageForm/PackageForm';

const PackageSponsorTab = ({ }) => {
    const packages = useRef([]);

    const [showAddButton, setShowAddButton] = useState(true);
    const [showNewItem, setShowNewItem] = useState(false);
    const [showPackage, setShowPackage] = useState(false);

    const showAddItemForm = () => {
        setShowNewItem(true);
    };

    return (
        <PackageSponsorContainer>
            <HeaderWrapper>
                <h3> Pre-Define Your Package </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam aliquam sem. Facilisi etiam dignissim diam quis enim lobortis scelerisque.</p>
            </HeaderWrapper>
            <NewItemContainer>
                <h3> Your listed Packages </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam aliquam sem. Facilisi etiam dignissim diam quis enim lobortis scelerisque.</p>
                <PackageList>
                    <h3> Your Packages </h3>
                    { showPackage ?
                    <PackageWrapper>
                        {
                            packages.current.map((pack, i) => {
                                return (
                                    <div key={i}>
                                        <p>{pack}</p>
                                    </div>
                                )
                            })
                        }
                    </PackageWrapper> :
                    <NoPackageWrapper>
                    <p>You currently have no packages.</p>
                </NoPackageWrapper>
                }   
                </PackageList>
                { showNewItem &&
                    <NewItemWrapper>
                        <PackageForm/>
                    </NewItemWrapper>
                }
                { !showNewItem &&
                    <ButtonWrapper>
                        <AddItemButton onClick={showAddItemForm}>+ New Package</AddItemButton>
                    </ButtonWrapper>
                }
            </NewItemContainer>
        </PackageSponsorContainer>
    )
}

export default PackageSponsorTab