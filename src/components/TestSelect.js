import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const banks = [
    { value: 'Nordea', imgClass: 'images-nordea-color' },
    { value: 'Swedbank', imgClass: 'images-swedbank-color' },
    { value: 'Handelsbanken', imgClass: 'images-handelsbanken-color' },
    { value: 'SEB', imgClass: 'images-SEB-transparant ' },
    { value: '1', imgClass: 'images-nordea-color' },
    { value: '2', imgClass: 'images-swedbank-color' },
    { value: '3', imgClass: 'images-handelsbanken-color' },
    { value: '4', imgClass: 'images-SEB-transparant ' }, 
    { value: '5', imgClass: 'images-nordea-color' },
    { value: '6', imgClass: 'images-swedbank-color' },
    { value: '7', imgClass: 'images-handelsbanken-color' },
    { value: '8', imgClass: 'images-SEB-transparant ' }, 
    { value: '9', imgClass: 'images-nordea-color' },
    { value: '10', imgClass: 'images-swedbank-color' },
    { value: '11', imgClass: 'images-handelsbanken-color' },
    { value: '12', imgClass: 'images-SEB-transparant ' },     
];

const style1 = {
    backgroundSize: 'contain',
    width: '100%',
    height: '40px',
    display: 'block',
    backgroundPosition: 'center',
    border: '1px solid gray'
};

const style2 = {
    backgroundSize: 'contain',
    width: '100%',
    height: '40px',
    display: 'block',
    backgroundPosition: 'center',
};



const BankImage = (props) => {
    const handleMouseDown = (event) => {
        event.preventDefault();
		event.stopPropagation();
        props.onSelect(props.option, event)
    }

    return (
        <div
            onMouseDown={handleMouseDown}
        >
            <div
                className={props.option.imgClass}
                style={style1}
            />
        </div>
    );
};

const BankValue = props => (
    <div className="Select-value" title={props.value}>
        <div className={props.value.imgClass} style={style2} />
    </div>
);

class TestSelect extends Component {

    constructor() {
        super();
    }

    render() {
        const logChange = (bank) => {
            this.setState(() => {
                return { selectedBank: bank.value}
            });
        };

        return (
            <div style={{ width: '250px' }}>
                <Select
                    name="form"
                    value={this.state ? this.state.selectedBank : ''}
                    options={banks}
                    onChange={logChange}
                    optionComponent={BankImage}
                    valueComponent={BankValue}
                    searchable={true}
                    clearable={false}
                    placeholder="Välj bank"
                />
            </div>
        );
    }
}

export default TestSelect;


