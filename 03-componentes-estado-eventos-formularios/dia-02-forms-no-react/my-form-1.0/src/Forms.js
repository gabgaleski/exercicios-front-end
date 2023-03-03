import React from 'react';

class Forms extends React.Component {
    state = {
        nome: '',
        email: '',
        cor: '',
        text: '',
    }
    
    handleInputText = ({ target }) => {
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <div>
                <form>
                    <select 
                    onChange={this.handleInputText}
                    value={this.state.cor}
                     name='cor'>
                        <option>Escolha</option>
                        <option>Azul</option>
                        <option>Vermelho</option>
                        <option>Amarelo</option>
                    </select>
                    <input 
                    name='nome' 
                    type="text" 
                    onChange={this.handleInputText} placeholder='Seu nome'
                    value={this.state.nome} />
                    <input 
                    onChange={this.handleInputText}
                    value={this.state.email}
                    name='email' 
                    type="email" 
                    placeholder='Seu Email' />
                    <textarea 
                    name='text'
                    onChange={this.handleInputText}
                    value={this.state.text}
                    />
                </form>
            </div>
        )
    }
}

export default Forms;