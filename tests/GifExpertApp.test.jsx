import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Puebas en <GifExpertApp/>', () => { 

    
    test('Debe agregar una nueva categoria', () => { 
        
        const inputValue = "Saitama";
        
        render( <GifExpertApp />);   
      
        // Obtenemos el input y el form
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // disparamos los eventos

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form )

        expect( screen.getByText( "Saitama" )).toBeTruthy()

       
    })

    test('No debe añadir una categoria existente', () => {  
        
        render( <GifExpertApp />);   
      
        // Obtenemos el input y el form
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // disparamos los eventos

        fireEvent.input( input, { target: { value: "One Punch"} } );
        fireEvent.submit( form )

        fireEvent.input( input, { target: { value: "One Punch"} } );
        fireEvent.submit( form )

        expect(screen.getAllByText("One Punch").length).toBe(1);
    })
})