import React from 'react';
import  ClientRoleExample from './ClientRoleExample';
import authRoles  from '../../../auth/authRoles';

const ClientRoleExmpleConfig = {
  
    settings: {
        layout :{
            congfig: {},
        }
    },

    auth:authRoles.client, //['client']
    routes:[
        {
            path: 'auth/client-role-example',
            element: <ClientRoleExample/>,
        }
    ]
}

export default ClientRoleExmpleConfig
