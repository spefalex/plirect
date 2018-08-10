import React from 'react';

export default class PackContent extends React.Component{
    render(){
        return(
            <div>
                <h1>Tous nos services dans un seul pack</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed nisi velit. Praesent in sem vitae dui congue facilisis ac sed velit. Donec facilisis quam odio, ac viverra ipsum gravida at. Aliquam ornare at massa nec consequat. Praesent ut nisl ac leo iaculis commodo nec molestie nisl. Curabitur lorem lectus, rhoncus sit amet dolor vehicula, aliquet hendrerit nibh. Maecenas eu nisl ullamcorper, ullamcorper magna ut, ornare nulla. Vestibulum vitae scelerisque nisl. Sed accumsan, eros et ultricies pellentesque, nisi ex convallis lorem, et maximus leo eros at est. Curabitur eu lectus lectus. Quisque lacus arcu, consequat nec efficitur ut, accumsan vitae nisl. Sed viverra cursus nulla vitae dapibus. Curabitur ut venenatis neque. Integer viverra nisi at leo ornare, nec semper erat egestas. Aliquam erat volutpat. Proin dictum ligula non euismod sagittis.
                </p>

                <table className="service">
                <tr>
                        <td className="color1"><span className="a">Pré-rentrée</span><span className="fas fa-check-circle"></span></td>
                    </tr>
                    <tr>
                        <td className="color2"><span className="a">Génératrice QCM</span> <span className="fas fa-check-circle"></span></td>
                    </tr>
                    <tr>
                        <td className="color1"><span className="a">Contrôle continu</span><span className="fas fa-check-circle"></span></td>
                    </tr>
                    <tr>
                        <td className="color2"><span className="a" >Concours blanc</span><span className="fas fa-check-circle"></span></td>
                    </tr>
                    <tr>
                        <td className="color1"><span className="a">Cours et fiches de cours</span><span className="fas fa-check-circle"></span></td>
                    </tr>
                    <tr>
                        <td className="color2"><span className="a">Forum</span><span className="fas fa-check-circle"></span></td>
                    </tr>
                    <tr>
                        <td className="color1"><span className="a">Tableau de bord</span><span className="fas fa-check-circle"></span></td>
                    </tr>
                    <tr>
                        <td className="color2"><span className="a">Suivi de progression</span><span className="fas fa-check-circle"></span></td>
                    </tr>
                    <tr>
                        <td className="color1"><span className="a">Accompagnement</span><span className="fas fa-check-circle"></span></td>
                    </tr>
                    <tr>
                        <td className="color2"><span className="a">Espace Parents</span><span className="fas fa-check-circle"></span></td>
                    </tr>
                    <tr>
                        <td className="color1"><span className="a">Cours visio Physique I & II</span><span className="fas fa-check-circle"></span></td>
                    </tr>
                    <tr>
                        <td className="color2"><span className="a">Cours visio Maths</span><span className="fas fa-check-circle"></span></td>
                    </tr>
                    <tr>
                        <td className="color1"><span className="a">Cours visio Chimie I</span>
                            <span className="fas fa-check-circle"></span>
                        </td>
                    </tr>
                    <tr>
                        <td className="color2"><span className="a">Cours visio à la demande</span><span className="fas fa-check-circle"></span></td>
                    </tr>
                </table>
            </div>
        );
    }
}