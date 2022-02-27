import React, { useEffect, useState } from 'react'

export default function Api() {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {

        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        setUsers(data);
    }

    useEffect(() => {

        getUsers();

    }, []);

    return (
        <>

            <h2>List of Users </h2>

            <div className='container-fluid mt-5' >
                <div className='row text-center'>

                    <div className='col-10 col-md-4 mt-5' style={{ display: 'inline-flex' }} >

                        {
                            users.map((item) => {

                            return(
                                    <div>
                                <div class="card"  >

                                <div class="card-body">
                                    <h5 class="card-title">{item.login}</h5>
                                    <img src={item.avatar_url} class="card-img-top" alt="..." />

                                  

                                    </div>


                            </div>
                            </div>
                            )
                        }




                            )
                        }









                    </div>




                </div>




            </div>

        </>
    )
}
