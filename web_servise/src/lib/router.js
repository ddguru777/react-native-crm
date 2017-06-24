import React from 'react'
import {
  BrowserRouter,
  Switch,
  Redirect,
} from 'react-router-dom'

// import authProvider from 'lib/auth'

// Other pages
import NotFound from 'components/shared/not_found'
import Layout from 'components/layout'
// import Login from 'views/common/auth/login'
// import VkCallback from 'views/common/auth/vk_callback'

import Instagram from 'components/instagram'

import Vk from 'components/vk'
// import Users from 'views/vk/users'
// import NewUser from 'views/vk/users/new'
// import Tags from 'views/vk/tags'
// import NewTag from 'views/vk/tags/new'
// import Group from 'views/vk/groups'
// import NewGroup from 'views/vk/groups/new'

import Crm from 'components/crm'
// import Client from 'views/crm/clients'
// import NewClient from 'views/crm/clients/new'
// import UpdateClient from 'views/crm/clients/update'

export default (onUpdate) => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Layout exact path="/" component={Crm}/>

          <Layout path="/crm" component={Crm}/>
          <Layout path="/vk" component={Vk}/>
          <Layout path="/instagram" component={ Instagram } />

          <Layout component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

// <Route path="/login" component={ Login } />
// <Route path="/auth/vk/callback" component={ VkCallback } />

// <Route path="/crm/clients" component={ Client } />
// <Route path="/crm/clients/new" component={ NewClient } />
// <Route path="/crm/clients/:id/update" component={ UpdateClient } />

// <Route path="/vk/users" component={ Users } />
// <Route path="/vk/users/new" component={ NewUser } />
// <Route path="/vk/groups" component={ Group } />
// <Route path="/vk/groups/new" component={ NewGroup } />
// <Route path="/vk/tags" component={ Tags } />
// <Route path="/vk/tags/new" component={ NewTag } />