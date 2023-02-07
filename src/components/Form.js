import {useState} from 'react';

function Form() {
    const formObject = {
        description: "",
        location: "",
        image: ""
    }
    
    const [formInput, setFormInput] = useState(formObject)

    function handleInput(e) {
        const key = e.target.name
        const value = e.target.value
        const updatedFormInput = {
            ...formInput,
            [key]: value
        }
        setFormInput(updatedFormInput);

    }

    return (
        <form>
            <label>
                Description:
                <input type="text" name="description" value={formInput.description} onChange={handleInput}/>
            </label>
            <label>
                Location:
                <input type="text" name="location" value={formInput.location} onChange={handleInput}/>
            </label>
            <label>
                Image:
                <input type="text" name="image" value={formInput.image} onChange={handleInput}/>
            </label>
            <input type="submit" value="Submit!" />
        </form>
    )
}

export default Form;