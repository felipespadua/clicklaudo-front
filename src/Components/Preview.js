import React, {
  Component
} from 'react';
import FileViewer from 'react-file-viewer';



class Preview extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <FileViewer
          fileType="docx"
          filePath="http://localhost:5000/reports/teste.docx"
          
          onError={this.onError}/>
      
    );
  }

  onError(e) {
    console.log(e)
  }
}

export default Preview