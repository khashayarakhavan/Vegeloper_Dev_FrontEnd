//Basics
import React, { useState } from "react";
import { EditorState , RichUtils, convertToRaw, convertFromRaw} from "draft-js";
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

   const [converted2HtmlContent, setConverted2HtmlContent] = useState(null);
   const [converted2RawContent, setConvertedRawContent] = useState(null);

   //Handle changes in the editor
   const handleEditorChange = (state) => {
     console.log('Hey this is the state: ',state);
     setEditorLocalState(state);
     convertContentToRAW();
     convertContentToHTML();
     console.log(converted2HtmlContent);
     console.log('JSON is here: ',converted2RawContent);
   };
   //Convert editor content to HTML
   const convertContentToRAW = () => {
     let raw = convertToRaw(editorLocalState.getCurrentContent());
     saveEditorContent(raw);
     setConvertedRawContent(raw);
   };

   const saveEditorContent = (data) => {
      localStorage.setItem('editorData', JSON.stringify(data))
   };

   const convertContentToHTML = () => {
    //  let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
     let currentContentAsHTML = convertToHTML({
       styleToHTML: (style) => {
         if (style === "BOLD") {
           return <span style={{ color: "blue" }} />;
         }
       },
       blockToHTML: (block) => {
         if (block.type === "PARAGRAPH") {
           return <p />;
         }
       },
       entityToHTML: (entity, originalText) => {
         if (entity.type === "LINK") {
           return <a href={entity.data.url}>{originalText}</a>;
         }
         return originalText;
       },
     })(editorLocalState.getCurrentContent());
     setConverted2HtmlContent(currentContentAsHTML);
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
        dangerouslySetInnerHTML={createMarkup(converted2HtmlContent)}
        style={{fontSize: '14px'}}
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
