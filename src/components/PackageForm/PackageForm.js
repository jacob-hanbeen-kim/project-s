import { useState, useRef } from 'react';
import {
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
    SaveDescriptionButton,
    PacakgeDescription,
    PreviewWrapper,
    PreviewDescriptionList
} from './PackageForm.styled'
import PackageService  from '../../services/package-service';

const PackageForm = () => {

    const packageFields = new PackageService.PackageFields();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const descriptions = useRef([]);
    const packages = useRef([]);

    const [showAddButton, setShowAddButton] = useState(true);
    const [showNewItem, setShowNewItem] = useState(false);
    const [showPackage, setShowPackage] = useState(false);

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
        <>
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
                                    <RemoveButton onClick={event => removeDescription(event, i)}> X </RemoveButton>
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
        <PreviewWrapper>
            <h4>Preview</h4>
            <p>Title: {title}</p>
            <p>Price: ${price}</p>
            <div>
                <p>Descriptions:</p>
                <ul>
                    {
                        descriptions.current.map((des, i) => {
                            return <PreviewDescriptionList key={i}>{des}</PreviewDescriptionList>
                        })
                    }
                </ul>
            </div>
        </PreviewWrapper>
        </>
    );
}

export default PackageForm