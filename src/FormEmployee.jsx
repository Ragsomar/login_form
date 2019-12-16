import React from 'react'

class FromEmployee extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lastname: '',
            firstname: '',
            email: ''
        }
        this.onChange = this.onChange.bind(this)
        this.submitFrom = this.submitForm.bind(this)
        this.postForm = this.postForm.bind(this)
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault()
    }

    postForm() {
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        const url = 'https://post-a-form.herokuapp.com/api/employees/'

        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error)
                } else {
                    alert(`Employé ajouté avec l'ID ${this.state.firstname}!`)
                }
            })
            .catch(e => {
                console.error(e)
                alert(`Erreur lors de l'ajout d'un employé`)
            })
    }

    render() {
        return (
            <div className='FormEmployee'>
                <h1>Saisi d'un employe</h1>
                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Informations</legend>
                        <div className='form-data'>
                            <label htmlFor='lastname'>Nom</label>
                            <input
                                type='text'
                                id='lastname'
                                name='lastname'
                                onChange={this.onChange}
                                value={this.state.lastname}
                            />
                        </div>
                        <div className='form-data'>
                            <label htmlFor='firstname'>Prénom</label>
                            <input
                                type='text'
                                id='firstname'
                                name='firstname'
                                onChange={this.onChange}
                                value={this.state.firstname}
                            />
                        </div>

                        <div className='form-data'>
                            <label htmlFor='email'>E-mail</label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                onChange={this.onChange}
                                value={this.state.email}
                            />
                        </div>
                        <hr />
                        <div className='form-data'>
                            <input
                                type='submit'
                                value='Envoyer'
                                onClick={this.postForm}
                            />
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default FromEmployee
