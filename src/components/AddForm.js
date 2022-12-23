import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import '../App.css'
function AddForm() {
  const [list, setList] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    married: "",
    addPhoto: "",
  });

  const [addList, setAddList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(false);
  const editList = (i) => {
    setEdit(true);
    setId(i);
    setModle(true);
  };
  const addContent = () => {
    if(list.firstName && list.lastName && list.dateOfBirth && list.married && list.addPhoto){
    setAddList([...addList, list]);
    setModle(!modal);
    }else{
      alert('Please fill all input fields')
    }
  };
  const updateList = () => {
    if(list.firstName && list.lastName && list.dateOfBirth && list.married && list.addPhoto ){
    setAddList(addList.map((item, j) => (id === j ? list : item)));
    setModle(!modal);
    }else {
      alert('Please fill all input fields')
    }
  };
  const [modal, setModle] = useState(false);

  const removeList = (i) => {
    alert('Sure you want to delet')
    setAddList(addList.filter((item, j) => i !== j));
  };

  const popup = () => {
    setModle(true);
    setEdit(false);
  };

  console.log(edit);
  return (
    <div>
      <Modal size="lm" isOpen={modal} toggle={() => setModle(!modal)}>
        <ModalBody>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={list.firstName}
                placeholder="Enter First Name"
                onChange={(e) =>
                  setList({ ...list, firstName: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={list.lastName}
                placeholder="Enter Last Name"
                onChange={(e) => setList({ ...list, lastName: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                value={list.dateOfBirth}
                onChange={(e) =>
                  setList({ ...list, dateOfBirth: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="radio"
                id='Yes'
                name='Yes'
                label="Married"
                onChange={(e) =>
                  setList({ ...list, married: e.target.id })
                }
              />
                <Form.Check
                type="radio"
                id='No'
                name="Yes"
                label="Un_married"
                onChange={(e) =>
                  setList({ ...list, married: e.target.id })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Add Photo</Form.Label>
              <Form.Control
                type="file"
                placeholder="Add Photo"
                onChange={(e) =>
                  setList({
                    ...list,
                    addPhoto: URL.createObjectURL(e.target.files[0]),
                  })
                }
              />
            </Form.Group>

            {!edit ? (
              <Button variant="primary" onClick={addContent}>
                Save
              </Button>
            ) : (
              <Button variant="primary" onClick={updateList}>
                Save
              </Button>
            )}
          </Form>
        </ModalBody>
      </Modal>
      <div className="text-center">
        <h1>Add list by clicking Add button</h1>
      <Button variant="primary" onClick={popup}>
        Add 
      </Button>
      </div>
      {addList.map((item, i) => (
        <div className="container w-50 my-2 card_container ">
          <div className="row border rounded">
            <div className="col-3 my-3 ">
              <img style={{ width: "170px" ,height:'160px' }} src={item.addPhoto} alt="img" />
            </div>
            <div className="col-3 my-2 content_container ">
              <p>Id</p>
              <p>First Name</p>
              <p>Date Of Birth</p>
              <p>Married</p>
            </div>
            <div className="col-3 my-2 content_container ">
              <p>: {i+1}</p>
              <p>: {item.firstName}</p>
              <p>: {item.dateOfBirth}</p>
              <p>: {item.married }</p>
            </div>
            
            <div className="col-3 " style={{marginTop:'140px'}}  >
          <Button className="mx-2" variant="primary" onClick={() => removeList(i)}>
            Delete
          </Button>
          <Button variant="primary" onClick={() => editList(i)}>
            Edit
          </Button>
          </div>
          </div>
         
        </div>
      ))}
    </div>
  );
}

export default AddForm;
