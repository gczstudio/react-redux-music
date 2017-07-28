//按需加载...

import App from './app'
import Home from './containers/home'
import Music from './containers/music'
import Friend from './containers/friend'
import Account from './containers/account'
import Recommend from './containers/recommend'
import MusicList from './containers/musicList'
import AnchorStation from './containers/anchorStation'
import RankingList from './containers/rankingList'
import Search from './containers/search'
import Ablum from './containers/ablum'
import Play from './containers/play'

	

const Routes = {
	path: '/',
	indexRoute: {onEnter: (nextState, replace) => replace('/home')},
	getComponent(nextState, cb){
		require.ensure([], (require) => {
			cb(null, require('./app').default)
		})
	},
	childRoutes: [
		{
			path: 'home',
			indexRoute: {onEnter: (nextState, replace) => replace('/home/recommend')},
			getComponent(nextState, cb){
				require.ensure([], (require) => {
					cb(null, require('./containers/home').default)
				})
			},
			childRoutes: [
				{
					path: 'recommend',
					getComponent(nextState, cb){
						require.ensure([], (require) => {
							cb(null, require('./containers/recommend').default)
						})
					}
				},
				{
					path: 'musicList',
					getComponent(nextState, cb){
						require.ensure([], (require) => {
							cb(null, require('./containers/musicList').default)
						})
					}
				},
				{
					path: 'anchorStation',
					getComponent(nextState, cb){
						require.ensure([], (require) => {
							cb(null, require('./containers/anchorStation').default)
						})
					}
				},
				{
					path: 'rankingList',
					getComponent(nextState, cb){
						require.ensure([], (require) => {
							cb(null, require('./containers/rankingList').default)
						})
					}
				}


			]			
		},
		
		{
			path: 'music',
			getComponent(nextState, cb){
				require.ensure([], (require) => {
					cb(null, require('./containers/music').default)
				})
			}
		},
		{
			path: 'friend',
			getComponent(nextState, cb){
				require.ensure([], (require) => {
					cb(null, require('./containers/friend').default)
				})
			}
		},
		{
			path: 'account',
			getComponent(nextState, cb){
				require.ensure([], (require) => {
					cb(null, require('./containers/account').default)
				})
			}
		},
		{
			path: 'search',
			getComponent(nextState, cb){
				require.ensure([], (require) => {
					cb(null, require('./containers/search').default)
				})
			}
		},
		{
			path: 'ablum/:id',
			getComponent(nextState, cb){
				require.ensure([], (require) => {
					cb(null, require('./containers/ablum').default)
				})
			}
		},
		{
			path: 'play',
			getComponent(nextState, cb){
				require.ensure([], (require) => {
					cb(null, require('./containers/play').default)
				})
			}
		}


	]
};

export default Routes;

