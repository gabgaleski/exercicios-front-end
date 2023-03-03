import React from 'react'; 


class TextArea extends React.Component {
    render() {
        const limitCaracteres = 100;
        const { text, handleInputText} = this.props
        return (
            <label>
                <textarea 
                    name='text'
                    onChange={handleInputText}
                    value={text}
                    />
                { text.length > limitCaracteres ? <span>Limite de Caracteres atingido</span> : ''}
            </label>
        )
    }
}

export default TextArea;