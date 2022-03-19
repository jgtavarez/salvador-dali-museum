import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    to: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const MainModule = lazy(() => import(/* webpackChunkName: "main_module"*/ '../main/MainModule'))
const PaintingsModule = lazy(() => import(/* webpackChunkName: "paintings_module"*/ '../paintings/PaintingsModule'))

export const routes: Route[] = [
    {
        path: '/*',
        to: '/',
        component: MainModule
    },
    {
        path: '/paintings/*',
        to: '/paintings',
        component: PaintingsModule
    },
]