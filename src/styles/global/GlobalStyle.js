import { Themecolors } from "@/theme/constants";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: catamaran;
        src: url(/fonts/Catamaran/static/Catamaran-Thin.ttf);
    }

    @font-face {
        font-family: catamaran-regular;
        src: url(/fonts/Catamaran/static/Catamaran-Regular.ttf);
    }

    @font-face {
        font-family: axiforma-semibold;
        src: url(/fonts/Axiforma/Kastelov-Axiforma-SemiBold.otf);
    }

    @font-face {
        font-family: axiforma-bold;
        src: url(/fonts/Axiforma/Kastelov-Axiforma-Bold.otf);
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 1.05rem;
        font-family: catamaran;
        color: ${({ theme }) => theme.colors.baseColor2};
        transition: all 0.4s ease-out;
    }

    .p-1 {
        padding: 1rem 0;
    }

    .p-0-1 {
        padding: 0 1rem;
    }

    .p-2-0-0-0 {
        padding: 2rem 0 0 0;
    }

    .p_5 {
        padding: 0.5rem 0;
    }

    .p-2 {
        padding: 2rem 0;
    }

    .m-1 {
        margin: 1rem 0;
    }

    .m-2 {
        margin: 2rem 0;
    }

    .m-3 {
        margin: 3rem 0;
    }

    ${"" /* //box shadow */}
    .bx-sdw {
        box-shadow: 0 10px 6px -6px #141414;
        ${"" /* filter: drop-shadow(0 0 20px rgb(0, 0, 0)); */}
    }

    .bx-sdw-1 {
        box-shadow: rgba(99, 99, 99, 0.4) 0px 2px 8px 0px;
    }

    .bold-txt {
        font-family: axiforma-bold;
    }

    .bold-txt-2 {
        font-family: axiforma-semibold;
    }

    .light-txt {
        font-family: catamaran;
    }

    .primary-color {
        color: ${({ theme }) => theme.colors.primaryColor};
    }

    .secondary-color {
        color: ${({ theme }) => theme.colors.secondaryColor};
    }

    .dark-color {
        color: ${Themecolors.baseColor}
    }

    i {
        color: ${({ theme }) => theme.colors.primaryColor};
        font-size: 1.3rem;
    }

    .t-up {
        text-transform: uppercase;
    }

    body {
        background-color: ${({ theme }) => theme.colors.baseColor};
    }

    img {
        max-width: 100%;
    }

    #modal-form {
        position: absolute;
    }

    input,
    select,
    textarea {
        padding: 0.35rem 0.8rem;
        border-radius: 0.3rem;
        border: none;
        outline: none;
        width: 100%;
        background: none;
        border: 1.5px solid ${({ theme }) => theme.colors.baseColor2};
    }

    .center-align {
        text-align: center;
    }

    .flx {
        display: flex;

        &.jc-btn {
            justify-content: space-between;
        }

        &.js-evn {
            justify-content: space-evenly;
        }

        &.js-arnd {
            justify-content: space-around;
        }

        &.jc-center {
            justify-content: center;
        }
        &.jc-end {
            justify-content: end;
        }
    }

    .grd {
        display: grid;
        grid-gap: 1rem;
        &.grd-cl-1 {
            grid-template-columns: repeat(1, 1fr);
        }

        &.grd-cl-2 {
            grid-template-columns: repeat(2, 1fr);
        }

        &.grd-cl-3 {
            grid-template-columns: repeat(3, 1fr);
        }

        &.grd-cl-4 {
            grid-template-columns: repeat(4, 1fr);
        }

        &.grd-cl-5 {
            grid-template-columns: repeat(5, 1fr);
        }

        &.grd-cl-6 {
            grid-template-columns: repeat(6, 1fr);
        }

        &.grd-cl-7 {
            grid-template-columns: repeat(7, 1fr);
        }
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    ${"" /* // headers */}
        h1,
        h2,
        h3,
        h4,
        h5,
        a,
        span,
        p,
        li, i {
        font-family: axiforma-bold;
        &.f-size-reg {
            font-size: 1.2rem;
        }

        &.f-size-med {
            font-size: 1.3rem;
        }

        &.f-size-lrg {
            font-size: 1.5rem;
        }

        &.f-size-xlrg {
            font-size: 2rem;
        }

        &.f-size-xxlrg {
            font-size: 2.5rem;
        }
    }

    ${"" /* // buttons */}
    button {
        border: none;
        outline: none;
    }

    .btn {
        padding: 0.5rem 1.2rem;
        background: none;
        border: 1.8px solid ${({ theme }) => theme.colors.primaryColor};
        color: ${({ theme }) => theme.colors.baseColor2};
        border-radius: 0.3rem;
        cursor: pointer;
        &.btn-m {
            padding: 0.7rem 1.5rem;
        }

        &.btn-rounded {
            padding: 1rem;
            border-radius: 50%;
        }

        &:hover {
            padding: 0.6rem 1.3rem;
        }
    }

`;

export default GlobalStyles;
