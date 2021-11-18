import React, { useState} from 'react'

function LoginForm({ Login, error}) {
    const [details, setDetails] = useState({name: "", email: "", password: "",});

    const submitHandler = e=>{
        e.preventDefault();

        Login(details)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Катталуу</h2>
                    {(error != "") ? (<div className="error">{error}</div>): ""}
                    <div className="form-group">
                        <label htmlFor="name">Аты жөнү:</label>
                        <input placeholder="Логин" type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} /> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Электрондук дарек:</label>
                        <input placeholder="Электрондук почта" type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />    
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Пароль:</label>
                        <input placeholder="Пароль" type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} /> 
                    </div>
                        <input type="submit" value="Кируу"/>
            </div>
        </form>
    )
}

export default LoginForm
