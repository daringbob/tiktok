import { OnlyHeaderLayout } from '~/components/Layout';
import Following from '~/pages/Following';
import Homepage from '~/pages/Home';
import SearchPage from '~/pages/Search';

export const publicRouter = [
    { path: '/following', component: Following },
    { path: '/', component: Homepage },
    { path: '/search', component: SearchPage, layout: OnlyHeaderLayout },
    { path: '/test', component: Homepage, layout: null },
];

export const privateRouter = [];
