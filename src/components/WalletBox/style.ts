import styled from "styled-components";

interface IContainerProps {
    color: string;
}
export const Container = styled.div<IContainerProps>`
    width: 32%;
    height: 200px;

    margin: 10px 0;
    background-color: ${props => props.color};
    color : ${props => props.theme.color.white};

    border-radius: 7px;
    padding: 10px;
    position: relative;
    overflow: hidden;
    >img{
        height: 110%;
        position: absolute;

        opacity: 30%;
        top: -10px;
        right: -30px;
    }

   > span{
        font-size: 20px;
        font-weight: 500;
    }
    >small{
        font: 12px;
        position: absolute;
        bottom: 10px;
    }
`; 