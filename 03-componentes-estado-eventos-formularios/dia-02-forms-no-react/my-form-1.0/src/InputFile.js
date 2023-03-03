import React from 'react'; 


class InputFile extends React.Component {

    render() {
        const limitCaracteres = 100;

        const { file, handleInputText} = this.props
        return (
            <label>
                <input name='file' type="file" 
                onChange={handleInputText}
                value={ file }
                />
                { file.length > limitCaracteres ? <span>Limite de Caracteres atingido</span> : ''}
            </label>
        )
    }
}

export default InputFile;