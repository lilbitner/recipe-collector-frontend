import React from 'react'
import Nav from './Nav'
import '../Styling/RecipeNotes.css'
import TextBox from './NotesTextBox'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

export default class RecipeNotes extends React.Component {
    
    
    state = {
        addTextBox: false
    }
    
    
    
    handleAddition = () => {
        this.setState({addTextBox: true})
    }
    
    
    render() {
        return(
            <div className='notes'> 
            <Nav user={this.props.user}/>
            <body className='notesBody'>

                {/* <h4 id='tableTitle'>Conversion Table</h4> */}
                <div class="lines">
                    <img id='measureImage' src="https://images.unsplash.com/flagged/photo-1552938218-ac9ec40c702a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" />
                    <img id='measureImage' src='https://images.unsplash.com/photo-1562245376-3f9dae9f0e73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'/>
                    <img id='measureImage' src='https://images.unsplash.com/photo-1581625392889-44d4db508d00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' />
                </div>
                <div> 
                    <h4>Liquid Measure Equivalents</h4>
                    <table id='table'>
                        <thead className='tableRow'>
                            <tr className='tableRow'>
                                <Th>GALLON</Th>
                                <Th>QUART</Th>
                                <Th>PINT</Th>
                                <Th>CUP</Th>
                                <Th>OUNCE</Th>
                                <Th>LITER</Th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='tableRow'>
                                <Td>1 gal</Td>
                                <Td>4 qt</Td>
                                <Td>8 pt</Td>
                                <Td>16 c</Td>
                                <Td>128 fl oz</Td>
                                <Td>3.79L</Td>
                            </tr>
                            <tr className='tableRow'>
                                <Td>1/2 gal</Td>
                                <Td>2 qt</Td>
                                <Td>4 pt</Td>
                                <Td>8 c</Td>
                                <Td>64 fl oz</Td>
                                <Td>1.89L</Td>
                            </tr>
                            <tr className='tableRow'>
                                <Td>1/4 gal</Td>
                                <Td>1 qt</Td>
                                <Td>2 pt</Td>
                                <Td>4 c</Td>
                                <Td>32 fl oz</Td>
                                <Td>.95L</Td>
                            </tr>
                            <tr className='tableRow'>
                                <Td>1/8 gal</Td>
                                <Td>1/2 qt</Td>
                                <Td>1 pt</Td>
                                <Td>2 c</Td>
                                <Td>16 fl oz</Td>
                                <Td>.47L</Td>
                            </tr>
                            <tr className='tableRow'>
                                <Td>1/16 gal</Td>
                                <Td>1/4 qt</Td>
                                <Td>1/2 pt</Td>
                                <Td>1 c</Td>
                                <Td>8 fl oz</Td>
                                <Td>.24L</Td>
                            </tr>
                            <tr className='tableRow'>
                                <Td>1/32 gal</Td>
                                <Td>1/8 qt</Td>
                                <Td>1/4 pt</Td>
                                <Td>1/2 c</Td>
                                <Td>4 fl oz</Td>
                                <Td>.12L</Td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>Measure Equivalents</h4>
                    <table id='table'>
                        <thead>
                            <tr className='tableRow'>
                                <Th>CUP</Th>
                                <Th>FLUID OZ</Th>
                                <Th>TBSP</Th>
                                <Th>TSP</Th>
                                <Th>MILLILITER</Th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='tableRow'>
                                <Td>1 c</Td>
                                <Td>8 oz</Td>
                                <Td>16 Tbsp</Td>
                                <Td>48 tsp</Td>
                                <Td>237 ml</Td>
                            </tr>
                            <tr>
                                <Td>3/4 c</Td>
                                <Td>6 oz</Td>
                                <Td>12 Tbsp</Td>
                                <Td>36 tsp</Td>
                                <Td>177 ml</Td>
                            </tr>
                            <tr className='tableRow'>
                                <Td>2/3 c</Td>
                                <Td>5 oz</Td>
                                <Td>11 Tbsp</Td>
                                <Td>32 tsp</Td>
                                <Td>158 ml</Td>
                            </tr>
                            <tr className='tableRow'>
                                <Td>1/2 c</Td>
                                <Td>4 oz</Td>
                                <Td>8 Tbsp</Td>
                                <Td>24 tsp</Td>
                                <Td>118 ml</Td>
                            </tr>
                            <tr className='tableRow'>
                                <Td>1/3 c</Td>
                                <Td>3 oz</Td>
                                <Td>5 Tbsp</Td>
                                <Td>16 tsp</Td>
                                <Td>79 ml</Td>
                            </tr>
                            <tr className='tableRow'>
                                <Td>1/4 c</Td>
                                <Td>2 oz</Td>
                                <Td>4 Tbsp</Td>
                                <Td>12 tsp</Td>
                                <Td>59 ml</Td>
                            </tr>
                            <tr className='tableRow'>
                                <Td>1/8 c</Td>
                                <Td>1 oz</Td>
                                <Td>2 Tbsp</Td>
                                <Td>6 tsp</Td>
                                <Td>30 ml</Td>
                            </tr>
                            <tr className='tableRow'>
                                <Td>1/16 c</Td>
                                <Td>5 oz</Td>
                                <Td>1 Tbsp</Td>
                                <Td>3 tsp</Td>
                                <Td>15 ml</Td>
                            </tr>
                        </tbody>
                    </table>


                </div>

                {/* <ul id="List"> */} 
                  
                    {/* <TextBox handleAddition={this.handleAddition}/>
                    {/* <button onClick={this.handleAddition}>Add another Note Box</button> */}
                    {/* {this.state.addTextBox ? <TextBox /> : null} */}
                   
                {/* </ul> */}

            </body>
            </div>
        )
    }
}