import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
        {
        title: 'Accueil',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
        
        },
        {
        title: 'Evénements',
        path: '/pages/ImagesBTN',
        
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',
        cNameList: 'nav-textList',
        
        
        },
        {
        title: 'Produits',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
        },
        
    
       
        
    ];
