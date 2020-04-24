import Styled from "styled-components"

// Creating the Grid It Self
export const Container = Styled.div`
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  
    @media (min-width: 576px) { 
        max-width: 540px; 
    }
    
    @media (min-width: 768px) { 
        max-width: 720px; 
    }
    
    @media (min-width: 992px) { 
        max-width: 960px; 
    }
    
    @media (min-width: 1200px) { 
        max-width: 1140px; 
    }
`;

// creating Row
export const Row = Styled.div`
    display:flex
`;

// Creating one cell
export const Col = Styled.div`
    padding: 1rem;
    flex:${(props) => props.size}
`;
