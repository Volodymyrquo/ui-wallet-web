import React, { FC } from 'react';
import '../../../assets/scss/referrals/promote.scss';
import popleImg from '../../../assets/images/referrals/people.png';
import yourLink from '../../../assets/images/referrals/yourLink.png';
import addFriends from '../../../assets/images/referrals/addFriends.png';
import getRewards from '../../../assets/images/referrals/getRevards.png';

export const Promote: FC = () => {

  return (
		<section className="promote">
			<h2 className="promote__title">How it works</h2>
			<article className="promote__box">
				<section className="promote__inner">
					<div className="promote__wrap">
						<h3 className="promote__text">Step 1</h3>
						<div className="promote__block-img">
						  <h3 className="promote__subtitle">Get your link</h3>
							<img className="promote__img" src={yourLink} alt="" />
						</div>
						<p className="promote__desc">Register and generate referral links or QR codes.</p>
					</div>
				</section>
				<section className="promote__inner">
				  <div className="promote__wrap">
						<h3 className="promote__text">Step 2</h3>
						<div className="promote__block-img">
						  <h3 className="promote__subtitle">Invite friends</h3>
							<img className="promote__img" src={addFriends} alt="" />
						</div>
						<p className="promote__desc">Invite your friends to register through the link or code.</p>
			  	</div>
				</section>
				<section className="promote__inner">
					<div className="promote__wrap">
						<h3 className="promote__text">Step 3</h3>
						<div className="promote__block-img">
						  <h3 className="promote__subtitle">Get rewards</h3>
							<img className="promote__img" src={getRewards} alt="" />
						</div>
						<p className="promote__desc">Get $8, Give $5 in real-time. Earn unlimited.</p>
					</div>
				</section>
        <section className="promote__inner">
					<img
					  className="promote__inner"
						src={popleImg}
						alt="People and coins"
					/>
				</section>
			</article>
		</section>
	)
}
