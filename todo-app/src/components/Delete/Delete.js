import React from 'react';
import './Delete.scss';
import axios from 'axios';

const Delete = (props) => {
    const { Id, updateWorks } = props;
    const DeleteFromList = (id) => {
        updateWorks(id);
    }
    const deleteHandler = async () => {
        // window.location.reload(true);
        // if (confirm("Are you sure wanted to delete")) {
        console.log()
        await axios.delete(`http://localhost:8000/task/${Id}`).then((res) => {
            console.log('Item Is deleted', res)
            DeleteFromList(Id);
        })/* .catch((err) => {
            console.log(err);
        }); */
        /* }  else {
          alert("not deleted")
        } */
    }
    return (
        <div className='delete-component'>
            <div>
                <div className="modal fade" id="deleteexampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Confirmation to delete</h1>
                            </div>
                            <div className="modal-body">
                                <h5>Are you sure wanted to delete</h5>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={(obj) => { deleteHandler(obj.newid) }}>confirm</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delete;