import { useState, useRef } from 'react';
import {
    PackageSponsorContainer,
    HeaderWrapper,
    NewItemContainer,
    NewItemWrapper,
    AddItemButton,
    ButtonWrapper,
    AddItemForm,
    FormNewItems,
    RemoveButton,
    AddDescriptionButton,
    PricePrefix,
    DescriptionWrapper,
    FormButtonWrapper,
    SubmitButton,
    CancelButton,
    AddNewItemInput,
    AddNewItemLabel,
    PriceInput,
    PackageList,
    PackageWrapper,
    ExpandButton,
    NoPackageWrapper,
    SaveDescriptionButton,
    PacakgeDescription,
    DescriptionButtonWrapper
} from './PackageSponsorTab.styled'

import { useAuth } from '../../../contexts/AuthContext';

const PackageSponsorTab = ({ }) => {
    const { currentUser } = useAuth();

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
    }

    const submitNewItems = (event) => {
        event.preventDefault();
        setShowPackage(true);
        // packages.current.push(title, price, descriptions);
        console.log(title);
        console.log(price);
        console.log(descriptions);
    }

    const addDescription = (e) => {
        e.preventDefault();
        setShowAddButton(false);
    }
    
    // const removeDescription = (e) => {
    //     e.preventDefault();
    //     const values = descriptions;
    //     if(descriptions.length > 1) {
    //         values.splice(-1)
    //         setDescription(values);
    //     }
    // }

    const saveDescription = (e) => {
        e.preventDefault();
        descriptions.current.push(description);
        setShowAddButton(true);
        setDescription("");
        console.log(descriptions)
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
                    <AddItemForm id="new_item_form">
                        <FormNewItems>
                            <AddNewItemLabel> Title of Package</AddNewItemLabel>
                            <AddNewItemInput type="text" id="title" name="title" placeholder="Title" value={title} onChange={event => handleChangeTitle(event)}/>
                            <AddNewItemLabel> Price of the Package</AddNewItemLabel>
                            <div>
                                <PricePrefix>$</PricePrefix>
                                <PriceInput type="number" min="0" id="price" name="price" placeholder="Enter price" value={price} onChange={event => {handleChangePrice(event)}}></PriceInput>
                            </div>
                            <AddNewItemLabel> Package Description</AddNewItemLabel>
                                {
                                    descriptions.current.map((des, i) => {
                                        return (
                                            <div key={i}>
                                                <PacakgeDescription>
                                                    <p>{des}</p>
                                                </PacakgeDescription>
                                            </div>
                                        )
                                    })
                                }
                                { !showAddButton &&
                                <DescriptionWrapper>
                                    <AddNewItemInput 
                                        type="text" 
                                        id="description" 
                                        name="description" 
                                        placeholder="Package Description" 
                                        value={description}
                                        onChange={event => handleChangeDescription(event)}
                                    />
                                    <SaveDescriptionButton onClick={saveDescription}>Save</SaveDescriptionButton>
                                </DescriptionWrapper>
                                }
                            { showAddButton &&
                                <AddDescriptionButton onClick={addDescription}>+ Add Description</AddDescriptionButton>
                            }
                        </FormNewItems>
                        <FormButtonWrapper>
                            <SubmitButton 
                                type="submit" 
                                value="submit" 
                                onClick={submitNewItems}>Submit
                            </SubmitButton>
                            <CancelButton onClick={cancelNewItems}>Cancel</CancelButton>
                        </FormButtonWrapper>
                    </AddItemForm>
                    <div>
                        <h4>Preview</h4>
                        <p>Title: {title}</p>
                        <p>Price: ${price}</p>
                        <div>
                            <p>Descriptions:</p>
                            <ul>
                                {
                                    descriptions.current.map((des, i) => {
                                        return <li key={i}>{des}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
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