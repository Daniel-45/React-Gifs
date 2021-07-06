import React, { useState } from 'react';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({ target: { value } }) => setInputValue(value);

    /**
    * Validate before adding a new element in the category array
    * 
    * @param {Array} oldArrayCategories - All the previous values that were in the category array 
    * @param {String} category - New value to be added as a category
    * @return {Array}  New array with added category
    */
    const handleSetCategory = (oldArrayCategories, category) => {
        if (!category) {
            Swal.fire({
                title: "Advertencia",
                icon: "warning",
                text: "Debe ingresar un texto para añadir una categoría",
                allowOutsideClick: false,
                allowEnterKey: false,
                allowEscapeKey: false
            })

            setInputValue('');
            return [...oldArrayCategories];
        } else {
            const existe = oldArrayCategories.find(categoryValue => categoryValue === category);
            setInputValue('');
            return existe ? [...oldArrayCategories] : [category, ...oldArrayCategories];
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setCategories(oldArrayCategories => handleSetCategory(oldArrayCategories, inputValue));
    }

    return (
        <div className="mt-3">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </div>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
