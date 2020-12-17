//Basics
import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
// import "react-draft-wysiwyg.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; 

//Styles
import { Card, Header, Image, Text } from "./richTextCard.styles";

//Assets
import vegeloperImage from "../../assets/SVG/Vegeloper.svg";
import boldIcon from "../../assets/SVG/bold.svg";
import italicIcon from "../../assets/SVG/italic.svg";
import underlineIcon from "../../assets/SVG/underline.svg";



export const RichTextCard = () => {
   const [editorLocalState, setEditorLocalState] = useState(() =>
     EditorState.createEmpty()
   );

   const [convertedContent, setConvertedContent] = useState(null);

   const handleEditorChange = (state) => {
     console.log('Hey this is the state: ',state);
     setEditorLocalState(state);
     convertContentToHTML();
   };

   const convertContentToHTML = () => {
     let currentContentAsHTML = convertToHTML(
       editorLocalState.getCurrentContent()
     );
     setConvertedContent(currentContentAsHTML);
   };

   const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html)
    }
   };
  

 
  return (
    <Card>
      <Header>
        <Image style={{ background: `url(${vegeloperImage})` }} />
        <Text>Tell me more about your project ...</Text>
      </Header>
      <Editor
        className="editor"
        // value={editorLocalState}
        editorState={editorLocalState}
        onEditorStateChange={handleEditorChange}
        // onEditorStateChange={onChange}
        // onEditorStateChange={onChange}
        // onChage={setEditorLocalState}
        placeholder="Type your message"
        toolbar={{
          options: ["inline"],
          inline: {
            options: ["bold", "italic", "underline"],
            inDropdown: false,
            bold: { icon: boldIcon },
            italic: { icon: italicIcon },
            underline: { icon: underlineIcon },
          },
        }}
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={createMarkup(convertedContent)}
      ></div>
    </Card>
  );
};

export default RichTextCard;


// import React, { Component } from "react";

// import { Editor } from "react-draft-wysiwyg";

// class ControlledEditor extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       editorState: EditorState.createEmpty(),
//     };
//   }

//   onEditorStateChange: Function = (editorState) => {
//     this.setState({
//       editorState,
//     });
//   };

//   render() {
//     const { editorState } = this.state;
//     return (
//       <Editor
//         editorState={editorState}
//         wrapperClassName="demo-wrapper"
//         editorClassName="demo-editor"
        
//       />
//     );
//   }
// }
