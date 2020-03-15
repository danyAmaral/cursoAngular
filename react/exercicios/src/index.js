import React from 'react';
import ReactDOM from 'react-dom';

import BomDia from './componentes/BomDia';
import { BoaTarde, BoaNoite} from './componentes/Multiplos';
import Saudacao from './componentes/Saudacao';
import Pai from './componentes/Pai';
import Filho from './componentes/Filho';

const elemento = <h1>React 2</h1>

ReactDOM.render(
    <> 
        <BomDia nome="Danielle" />
        <BoaTarde nome="Dani" />
        <BoaNoite nome="Dany" />
        <Saudacao tipo="Olá" nome="Dani" />
        <Pai nome="Paulo" sobrenome="Mara">
            <Filho nome="Pedro"  />
            <Filho nome="João"  />
            <Filho nome="Carla" /> 
        </Pai>

    </>, 
document.getElementById('root'))