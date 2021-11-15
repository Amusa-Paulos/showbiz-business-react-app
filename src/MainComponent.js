import React from 'react'
import WrapperComponent from './components/WrapperComponent'
import Font from 'react-font'

export default function MainComponent(props) {
    return (
        <>
            <Font family='Viga'>
                <WrapperComponent />
            </Font>
        </>
    )
}