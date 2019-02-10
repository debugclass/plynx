import React, { Component } from 'react';
import FileItem from './FileItem.js'
import { listTextElement } from '../Common/listElements';
import '../Common/List.css';
import './style.css';


export default class FileList extends Component {
  render() {
    const listItems = this.props.files.map(
      (file) => <FileItem
        _id={file._id}
        title={file.title}
        key={file._id}
        description={file.description ? file.description : "No description"}
        insertion_date={file.insertion_date}
        node_status={file.node_status}
        file_type={file.outputs[0].file_type}
        fileObj={file}
        onClick={(fileObj) => this.props.onClick(fileObj)}
        />);

    return (
      <div className='list'>
        <div className='file-list-item list-header'>
          { listTextElement('header-item', 'Header') }
          { listTextElement('header-item Type', 'Type') }
          { listTextElement('header-item Status', 'Status') }
          { listTextElement('header-item Id', 'Node Id') }
          { listTextElement('header-item Created', 'Created') }
        </div>
        {listItems.length ? listItems : <b>No items to show</b>}
      </div>
    );
  }
}
