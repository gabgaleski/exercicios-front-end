import React from 'react';
import InputFile from './InputFile';
import Checkbox from './Checkbox';
import TextArea from './TextArea';

class Forms extends React.Component {
    state = {
        nome: '',
        email: '',
        cor: '',
        text: '',
        checkbox: 'false',
        file: '',
        error: 'false',
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
                    < TextArea text={this.state.text} handleInputText={this.handleInputText} />
                    <InputFile file={this.state.file} handleInputText={this.handleInputText} />
                    <Checkbox checkbox={this.state.checkbox} handleInputText={this.handleInputText}/>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Forms;