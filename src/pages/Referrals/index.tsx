import React from 'react'
import { ReferralsBtn } from './ReferralsBtn'
import { Promote } from './Promote'
import { InviteFriends } from './InviteFriends'
import { EarningsByTypes } from './EarningsByTypes'
import { PioneerMemberships } from './PioneerMemberships'
import '../../assets/scss/referrals/referrals.scss'
import { Route, Switch, useRouteMatch } from 'react-router-dom'


const Referrals = () => {
  const { path } = useRouteMatch()

  return (
    <div className="page-content">
      <section className="referrals">
        <ReferralsBtn />
        <Switch>
          <Route path={`${path}/promote`} component={Promote} />
          <Route path={`${path}/invite_friends`} component={InviteFriends} />
          <Route path={`${path}/earnings_by_types`} component={EarningsByTypes} />
          <Route path={`${path}/pioneer_memberships`} component={PioneerMemberships} />
        </Switch>
      </section>
    </div>
  )
}

export default Referrals
