import React from 'react';

class Forms extends React.Component {
    state = {
        nome: '',
        email: '',
        cor: '',
        text: '',
        checkbox: 'false',
        file: '',
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
                    <fieldset>
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
                    </fieldset>
                    <fieldset>
                    <textarea 
                    name='text'
                    onChange={this.handleInputText}
                    value={this.state.text}
                    />
                    <input name='file' type="file" 
                    onChange={this.handleInputText}
                    value={this.state.file}
                    />
                    <input name='checkbox' type="checkbox" 
                    onChange={this.handleInputText}
                    value={this.state.checkbox}
                    />
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Forms;