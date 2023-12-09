import React, { useState, useEffect, startTransition } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Modal } from './Modal.js';
import { useNavigate } from 'react-router-dom';
const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  let token = localStorage.getItem('token'); 
  const navigate  = useNavigate();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://jellyfish-app-lfx7p.ondigitalocean.app/service2/categories/', {
          method: 'GET',
          headers: {
            'Authorization' : `${token}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const deleteCategory = () => {
    startTransition(() => {
    fetch(`https://jellyfish-app-lfx7p.ondigitalocean.app/service2/categories/${selectedCategoryId}/`, {
      method: 'DELETE',
      headers: {
        'Authorization' : `${token}`,
        'Content-Type': 'application/json',
      },
    }) })
    .then(response => {
      if (response.ok) {
        // If the response status is 204 (No Content), handle the deletion and update categories state
        if (response.status === 204) {
        // Handle success, update categories state, and close the modal
        const updatedCategories = categories.filter(category => category.id !== selectedCategoryId);
        setCategories(updatedCategories);
        hideModalHandler(); // Move hideModalHandler inside the .then() block
        //window.location.reload();
        }
      }
      })
      .catch(error => {
        // Handle error
       // window.location.reload();
        console.error('Error deleting category:', error);
      });
  };
  

  const showModalHandler = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };
  const send = (event) => {
    navigate('/');
  }
  return (
    <div className="video-page">
      <Modal show={showModal} hide={hideModalHandler} onRemoveProduct={deleteCategory}></Modal>
      <Button style={{ backgroundColor: '#171a1e', color: 'white', marginBottom: '10px' }} onClick={send}> ← Į pradžią</Button>
      <Table>
        <thead>
          <tr>
            <th>Pavadinimas</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.type}</td>
              <td>
                <Button style={{ backgroundColor: '#204963', marginRight: '10px' }}>
                  <Link to={`/category/${category.id}/edit`} className="nav-link" style={{ color: 'white' }}>
                    Redaguoti
                  </Link>
                </Button>
                <Button style={{ backgroundColor: 'orange', color: '#204963' }} onClick={() => showModalHandler(category.id)}>
                  Šalinti
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button style={{ backgroundColor: '#204963', marginRight: '10px' }}>
                  <Link to={`/category/create`} className="nav-link" style={{ color: 'white' }}>
                    Pridėti naują
                  </Link>
                </Button>
    </div>
  );
};

export default CategoriesList;
