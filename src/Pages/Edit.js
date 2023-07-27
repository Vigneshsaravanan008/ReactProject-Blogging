import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GetBlogEdit, GetBlogUpdate } from '../Auth/Api';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';

function Edit() {
    let { id } = useParams();
    var [token] = useState('');
    const [Editor, setEditor] = useState('');
    const [Title, setTitle] = useState('');
    const [show, setShow] = useState(false);
    const [variant, setVariant] = useState('');
    const [message, setMessage] = useState('');
    const [tags, setTags] = useState([])

    function handleKeyDown(e) {
        if (e.key !== 'Enter') return
        const value = e.target.value
        if (!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }

    function removeTag(index) {
        setTags(tags.filter((el, i) => i !== index))
    }

    const SetResponseTags = (response) => {
        setTags([]);
        response.map((value, key) => {
            setTags(tags => [...tags, value.tag])
            console.log(value.tag);
        })
    }

    const blogEditResponse = async () => {
        token = localStorage.getItem('token');
        const response = await GetBlogEdit(id, token);
        setTitle(response.blog.title)
        setEditor(response.blog.description)
        SetResponseTags(response.tags)
    }

    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        setEditor(data);
    };

    const FormSubmit = async () => {
        const formData = new FormData()
        formData.append("title", Title)
        formData.append("id", id)
        formData.append("description", Editor)
        formData.append("tags", tags)
        var USER_TOKEN = localStorage.getItem('token');
        const getBlogresponse = await GetBlogUpdate(formData, USER_TOKEN);
        if (getBlogresponse.status == 200) {
            setVariant('success');
        } else {
            setVariant('Warning');
        }
        setMessage(getBlogresponse.message);
        setShow(true);
    }

    useEffect(() => {
        blogEditResponse()
    }, [])

    return (
        <div className="container">
            <div className="row">
                {(show) &&
                    <Alert className="mt-2" key={variant} variant={variant} onClose={() => setShow(false)} dismissible>
                        {message}
                    </Alert>
                }
                <div className="col-md-9 App p-4">
                    {/* <h2>Using CKEditor 5 build in React</h2> */}
                    <Breadcrumb>
                        <Breadcrumb.Item href="#"> Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            Create
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="d-flex">
                        <Button href="/home" variant="secondary" className="mb-4">Back</Button>
                        <InputGroup className="mb-3 px-4">
                            <Form.Control
                                placeholder="Title"
                                aria-label="Title"
                                aria-describedby="basic-addon1"
                                defaultValue={Title}
                                onChange={(e) => { setTitle(e.target.value) }}
                            />
                        </InputGroup>
                    </div>
                    <CKEditor
                        editor={ClassicEditor}
                        data={Editor}
                        onReady={editor => {
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={handleEditorChange}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
                    />
                    <Button className="mt-3" variant="primary" onClick={(e) => {
                        FormSubmit(e)
                    }}>Submit</Button>
                </div>

                <div className="col-md-3 tags-input-container p-4">
                    <Accordion>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Tags For Blogs</Accordion.Header>
                            <Accordion.Body>
                                {/* <input type="text" className="tags-input" placeholder="Type somthing" /> */}
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        onKeyDown={handleKeyDown}
                                        placeholder="Type somthing"
                                        aria-label="Type somthing"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <div className="d-flex">
                                    {tags && tags.map((tag, index) => (
                                        <div className="tag-item" key={index}>
                                            <label className="label-tag">
                                                {tag}
                                                <span className="close" onClick={() => removeTag(index)}>&times;</span>
                                            </label>
                                        </div>
                                    ))}
                                </div>

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div >
    )
}

export default Edit