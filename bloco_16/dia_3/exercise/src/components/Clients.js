import React, { Component } from 'react'
import { connect } from 'react-redux';

class Clients extends Component {
  render() {
    const { userLogin } = this.props;
    if (!userLogin.email) return <p>Login failed</p>

    return (
      <div>
        Clients
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userLogin: state.loginReducer,
})

export default connect(mapStateToProps, null)(Clients)


// Caso o login não seja feito, ou seja, o usuário tenha mudado à mão o link do sistema e ido para a página de cadastro ou de clientes, a única mensagem exibida deve ser: "Login não efetuado".
// A página de Clientes cadastrados deverá listar todos os clientes. Caso não haja cliente, a mensagem "Nenhum cliente cadastrado" deve aparecer na tela, juntamente com um botão para ir à pagina de cadastro. Esse botão deve permanecer na tela mesmo caso hajam clientes.