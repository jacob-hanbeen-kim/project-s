import React, {useRef} from 'react';

import { 
    UploadFileInput,
    UploadFileButton,
    FileUploadContainer,
    BtnWrapper
} from './UploadFile.styled';

const FileUploader = ({}) => {
    let fileInput = useRef(null);

    let state = {
        selectedFile: null
      }
    
      const fileSelectedSystem = event => {
        this.setState({
          selectedFile: event.target.files[0]
        })
      }
    
      const fileUploadHandler = () => {
        const fd = FormData();
        fd.append('image', state.selectedFile, state.selectedFile.name);
        // axios.post('endpoint', fc).then(res => {
        //   console.log(res);
        // });
      }
    return (
        <FileUploadContainer>
            <UploadFileInput 
              type="file" 
              onChange={fileSelectedSystem} 
              ref = {fileInput}
            />
            <BtnWrapper>
            <UploadFileButton onClick={() => fileInput.current.click()}>Choose Image</UploadFileButton>
            <UploadFileButton onClick={fileUploadHandler}>Upload</UploadFileButton>
            </BtnWrapper>
        </FileUploadContainer>
    );
}
export default FileUploader;