import React, { Component } from 'react'

import { withRouter,Link } from 'react-router-dom';



class home extends Component {



    render() {

        return (





            <div  className="container">

                <div className="row my-5">

                    <div className="col-md-4 my-5 mx-auto">

                        <div className="card bg-transparent" >

                            <div className="card-header text-center font-weight-bold">Déclaration STR</div>

                            <ul className="list-group list-group-flush">

                                <Link to="/strPhysique" className="list-group-item btn btn-outline-primary font-weight-bold">STR Physique</Link>

                                <Link to="/strMorale" className="list-group-item btn btn-outline-primary font-weight-bold">STR Morale</Link>

                            </ul>

                        </div>

                    </div>

                    <div className="col-md-4 my-5 mx-auto">

                        <div className="card bg-transparent my-5 mx-auto" >

                            <div className="card-header text-center font-weight-bold">Consultation</div>

                            <ul className="list-group list-group-flush">

                                <Link to="/consultation" className="list-group-item btn btn-outline-primary font-weight-bold">Consulter</Link>



                            </ul>

                        </div>

                    </div>

                    <div className="col-md-4 my-5 mx-auto">

                        <div className="card bg-transparent" >

                            <div className="card-header text-center font-weight-bold">Déclaration AIF</div>

                            <ul className="list-group list-group-flush">

                                <Link to="/aifPhysique" className="list-group-item btn btn-outline-primary font-weight-bold">AIF Physique</Link>

                                <Link to="/aifMorale" className="list-group-item btn btn-outline-primary font-weight-bold">AIF Morale</Link>



                            </ul>

                        </div>

                    </div>







                </div>





            </div>

        )

    }

}

export default withRouter(home);

// function strPhysique() {

//   return (

//     <strPhysique/>

//   );

// }