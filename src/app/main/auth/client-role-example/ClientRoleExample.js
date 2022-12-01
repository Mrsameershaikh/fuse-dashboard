import FuseHighlight from "@fuse/core/FuseHighlight";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { NavLink } from "react-router-dom";
import FusePageCarded from "@fuse/core/FusePageCarded";
import { Button, Typography } from "@mui/material";


function ClientRoleExample(props){
    return (
        <FusePageCarded
        header={
            <div className="flex flex-1 items-center justify-between p-24">
              <Typography className="text-3xl md:text-4xl font-extrabold tracking-tight leading-7 sm:leading-10 truncate">
                Client: Auth role example page
              </Typography>
              <Button
                component={NavLink}
                variant="contained"
                color="secondary"
                to="/sign-out"
                startIcon={<FuseSvgIcon>heroicons-outline:logout</FuseSvgIcon>}
              >
                Sign out
              </Button>
            </div>
          }
          content={
            <div className="p-24">
              <Typography className="mb-24">
                You can see this page because you have logged in and have permission. Otherwise you
                should be redirected to login page.
              </Typography>
    
              <Typography className="mb-24">This is the page's config file:</Typography>
    
              <FuseHighlight component="pre" className="language-js">
                {`
                  import {authRoles} from 'auth';
                  import  ClientRoleExample from './ClientRoleExample';
    
                  export const ClientRoleExampleConfig = {
                      settings: {
                          layout: {
                              config: {}
                          }
                      },
                      auth    : authRoles.client,//['client']
                      routes  : [
                          {
                              path     : '/auth/client-role-example',
                              element:ClientRoleExample
                          }
                      ]
                  };
                  `}
              </FuseHighlight>
    
              <Typography className="my-24">
                You can also hide the navigation item/collapse/group with user roles by giving auth
                property.
              </Typography>
    
              <FuseHighlight component="pre" className="language-json">
                {`
                  export const fuseNavigationConfig = [
                     {
                          'id'   : 'only-client-navigation-item',
                          'title': 'Nav item only for Client',
                          'type' : 'item',
                          'auth' : authRoles.client,//['client']
                          'url'  : '/auth/client-role-example',
                          'icon' : 'verified_user'
                      }
                  ];
              `}
              </FuseHighlight>
            </div>
          }
        />
            
    )
}


export default ClientRoleExample;