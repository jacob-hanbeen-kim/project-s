import {
    StyledTextEditor
} from './TextEditor.styled'

import 'react-quill/dist/quill.snow.css';
import { modules, formats } from './toolbar';

const TextEditor = ({ value, onChange, type }) => {
    return (
        <StyledTextEditor
            theme="snow"
            value={value}
            onChange={onChange}
            placeholder="Introduce yourself..."
            modules={modules(type)}
            formats={formats}
        />
    )
}

export default TextEditor