import styled from 'styled-components';

import {respond } from '../../../design/responsive';

export const NavContainer = styled.div`
    ${respond.mobile.large`
    ${'' /* display: none; */}
    `}
`;

export const navigation = styled.div`
      
    &__checkbox {
        display: none;

    }

    &__button {
        background-color: $color-white;
        height: 7rem;
        width: 7rem;
        text-align: center;
        position: fixed;
        border-radius: 50%;
        top: 6rem;
        right: 6rem;
        z-index: $layer-top;
        box-shadow: 0 1rem 2rem rgba($color-black, .2);
        cursor: pointer;
        overflow: hidden;

        // RESPONSIVE: Define the margins of foreground circle in the menu button. 
        @include respond(tab-port) {
            top: 4rem;
            right: 2rem;
        }
        @include respond(phone) {
            top: 3rem;
            right: 1rem;
        }

        &::after {
            content: "";
            display: inline-block;
            border: .6rem solid rosybrown;
            height: 100%;
            width: 100%;
            border-radius: 50%;
            background-color: $color-white;
            opacity: .5;
            position: absolute;
            top: 0;
            left: 0;
            z-index: $layer-B1;
            transition: all .9s ease-in-out;
        }

        &:hover {
            box-shadow: 0 1rem 2rem rgba($color-black,.2);

            &::after {
                transform: scaleX(1.4) scaleY(1.6);
                // transform: rotate(-5deg);
                opacity: 0;
                // background-color: $color-primary-dark;
                border: 5px solid red;
            }
        }

    }

    // Menu Design
    &__background {
        height: 6rem;
        width: 6rem;
        border-radius: 50%;  
        position: fixed;
        top: 6.5rem;
        right: 6.5rem;
        z-index: $layer-1;
        background-image: radial-gradient($color-primary-light, $color-primary-dark);
        transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);
        
        // RESPONSIVE: Define the margins of background circle behind the menu button. 
        @include respond(tab-port) {
            top: 4.5rem;
            right: 2.5rem;
        }
        @include respond(phone) {
            top: 3.5rem;
            right: 1.5rem;
        }
    }
    
    &__nav {
        height: 100vh;
        width: 0;
        opacity: 0;
        position: fixed;
        top: 0;
        left: 0;
        z-index: $layer-B1 ;
        transition: all .8s cubic-bezier(0.68, -.55, 0.265, 1.55);

    }

    &__list {
        @include centerAll ;
        text-align: center;
        list-style-type: none;
        width: 100%;
    }

    &__item {
        margin: .5rem;
      
    }

    &__link {
        &:link,
        &:visited {
            display: inline-block;
        font-size: 3rem;
        font-weight: 300;
        padding: 1.5rem 2rem;
        color: $color-white;
        text-transform: uppercase;
        text-decoration: none;
        background-image: linear-gradient(120deg, transparent 0%, transparent 50%, $color-white 50%);
        background-size: 250%;
        transition: all .4s ease;

        span {
            display: inline-block;
            margin-right: 1rem;
        }
        }

        &:hover,
        &:active {
            background-position: 100%;
            color: $color-primary-light;
            transform: translateX(1rem);
        }
        
    }

    //Functionality Structure

    // Scale the background --was hidden behind button, 90 times bigger
    // Create a pouring-the-water feel.  
    &__checkbox:checked ~ &__background {
        transform: scale(90);
    }

    &__checkbox:checked ~ &__nav {
        opacity: 1;
        width: 100%;
        z-index: $layer-1;
    }

    //Icon
    &__icon {
        position: relative;
        margin-top: 3.3rem;
        
        &,
        &::before,
        &::after {
            display: inline-block;
            width: 3rem;
            height: 3px;
            background-color: $color-grey-dark-3;
            transition: all .2s ;
        }

        &::before,
        &::after {
            content: "";
            position: absolute;
            left: 0rem;
        }

        &::before { top: -.8rem; } 
        &::after { top: .8rem;}
    }

    // move 1st copy of the bar icon
    &__button:hover &__icon::before {
        top: 1rem;
        
    }
    // move 2nd copy of the bar icon
    &__button:hover &__icon::after {
        top: -1rem;
        
    }
    
    &__checkbox:checked + &__button &__icon {
        background-color: transparent;
    }

       &__checkbox:checked + &__button &__icon::before {
           top: 0;
        transform: rotate(135deg);
    }

       &__checkbox:checked + &__button &__icon::after {
           top: 0;
       transform: rotate(45deg);
    }
}
`;