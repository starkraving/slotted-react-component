import styled from 'styled-components';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4);
    display: ${props => (props.isOpen) ? 'block' : 'none'}
`;

export default Overlay;