import { useState, useRef } from 'react';
import  PackageService  from '../../../services/package-service';
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
    const { currentUser } = useAuth();
    const packageFields = new PackageService.PackageFields();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const descriptions = useRef([]);
    const packages = useRef([]);

    const [showAddButton, setShowAddButton] = useState(true);
    const [showNewItem, setShowNewItem] = useState(false);
    const [showPackage, setShowPackage] = useState(false);

    const showAddItemForm = () => {
        setShowNewItem(true);
    };

    const cancelNewItems = (e) => {
        e.preventDefault();
        descriptions.current = [];
        setTitle("");
        setPrice(0);
        setDescription('');
        setShowNewItem(false);
        setShowAddButton(true);
    }

    const submitNewItems = async (event) => {
        event.preventDefault();
        setShowPackage(true);
        setShowNewItem(false);
        const val =  packageFields
            .setTitle(title)
            .setPrice(price)
            .setDescription(descriptions.current)
        await PackageService.postPackage(val.fields);
        setTitle("");
        setPrice(0);
        setDescription('');
    }

    const addDescription = (e) => {
        e.preventDefault();
        setShowAddButton(false);
        setDescription('');
    }
    
    const removeDescription = (e, index) => {
        e.preventDefault();
        // console.log(descriptions)
        // console.log(descriptions.current)
        if(descriptions.current.length > 0) {
            descriptions.current.splice(index, 1);
            setDescription(null);
        }
    }

    const saveDescription = (e) => {
        e.preventDefault();
        descriptions.current.push(description);
        setShowAddButton(true);
        setDescription("");
    }

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    }

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleChangePrice = (event) => {
        setPrice(event.target.value);
    }

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
                    <NewItemWrapper id="new_item">
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