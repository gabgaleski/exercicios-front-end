import React from 'react'; 


class Checkbox extends React.Component {
    render() {
        const { checkbox, handleInputText} = this.props
        return (
<input name='checkbox' type="checkbox" 
                    onChange={handleInputText}
                    value={checkbox}
                    />
        )
    }
}

export default Checkbox;