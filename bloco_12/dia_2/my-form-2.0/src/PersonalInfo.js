import React, { Component } from 'react'

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

export default class PersonalInfo extends Component {
  render() {
    const { handleChange, handleOnBlur } = this.props
    const { name, email, cpf, address, city } = this.props.value

    return (
      <fieldset>
        <legend>Personal Information</legend>
        <div>Name:
          <input 
            type="text"
            maxLength="40"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
    
        <div>Email:
          <input 
            type="email"
            maxLength="50"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>

        <div>CPF:
          <input 
            type="text"
            maxLength="11"
            name="cpf"
            value={cpf}
            onChange={handleChange}
            required
          />
        </div>

        <div>Address:
          <input 
            type="text"
            maxLength="200"
            name="address"
            value={address}
            onChange={handleChange}
            required
          />
        </div>

        <div>City:
          <input 
            type="text"
            maxLength="28"
            name="city"
            value={city}
            onChange={handleChange}
            onBlur={handleOnBlur}
            required
          />
        </div>

        <div>State:
          <select 
            onChange={handleChange}
            name="state"
            required
          >
            <option value="">Selecione</option>
            {states.map((value, key) => (
              <option key={ key }>{ value }</option>
              ))
            }
          </select>
        </div>
            <label htmlFor="house">
              <input
                type="radio"
                name="addressType"
                id="house"
                value="house"
                onChange={handleChange}
                required
              />
              House
            </label>
            <label htmlFor="apartment">
              <input
                type="radio"
                name="addressType"
                id="apartment"
                value="apartment"
                onChange={handleChange}
                required
              />
              Apartment
            </label>
        <div>

        </div>

      </fieldset>
    )
  }
}
