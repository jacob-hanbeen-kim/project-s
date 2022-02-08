import React from 'react';

import { 
    UploadFileInput,
    UploadFileButton,
    FileUploadContainer
} from './UploadFile.styled';

const FileUploader = ({fileSelectedSystem, fileUploadHandler}) => {
    let fileInput

    return (
        <FileUploadContainer>
            <UploadFileInput 
            type="file" 
            onChange={fileSelectedSystem} 
            ref = {fileInput = fileInput}/>
            {/* <UploadFileButton onClick={() => fileInput.click()}>Choose Image</UploadFileButton> */}
            <UploadFileButton onClick={fileUploadHandler}>Upload</UploadFileButton>
        </FileUploadContainer>
    );
}
export default FileUploader;