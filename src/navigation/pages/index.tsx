import { ReactNode } from 'react'

export default interface INavPageProps {
    children: ReactNode;
    route? : any;
    navigation : any;
}