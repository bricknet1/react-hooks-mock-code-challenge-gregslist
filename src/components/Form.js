function Form() {
    return (
        <form>
            <label>
                Description:
                <input type="text" name="description" />
            </label>
            <label>
                Location:
                <input type="text" name="location" />
            </label>
            <label>
                Image:
                <input type="text" name="image" />
            </label>
            <input type="submit" value="Submit!" />
        </form>
    )
}

export default Form;