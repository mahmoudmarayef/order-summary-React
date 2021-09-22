import React from 'react'
import styled from 'styled-components'

function HOME() {
    return (
        <Container>
            <Order>
                <img src="./images/illustration-hero.svg" alt="" />
                <h3>Order Summary</h3>
                <p>
                    You can now listen to millions of songs, audiobooks, and podcasts on any 
                    device anywhere you like!
                </p>

                <Inner>
                    <div>
                        <img src="./images/icon-music.svg" alt="" />
                        <Annual>
                            <div>Annual Plan</div>
                            <div>$59.99/year</div>
                        </Annual>
                    </div>
                    <Change>Change</Change>
                </Inner>
                <Payment>Proceed to Payment</Payment>
                <Cancel>Cancel Order</Cancel>
            </Order>
        </Container>
    )
}

export default HOME


const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;

    h3 {
        font-weight: 900;
        margin: 0;
    }
    
    p{
        margin:0;
    }
`

const Order = styled.div`
    /* responsive width */
    width: clamp(0px, 90vw, var(--max));
    /* Responsive height without creating overflowing content */
    height: clamp(auto, 80vh, 810px);
    margin: 0 auto;
    border-radius: 20px;
    overflow: hidden;
    background-color: white;
    box-shadow: 0 20px 30px 5px var(--desaturated-blue);

    *:not(img) {
        text-align: center;
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 3vh; 
    }
`

const Inner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--very-pale-blue);
    padding-top: 25px;
    padding-left: 50px;
    padding-right: 50px;

    div {
        display: flex;
        align-items: center;
    }
`

const Annual = styled.div`
    display: inline-block;
    margin-left: 20px;
`

const Change = styled.a`
    all: revert;
    font-weight: 700;  
    color: var(--bright-blue);

    &:hover {
        color: var(--hover-light); 
    }
`

const Payment = styled.a`
    border-radius: 10px;
    background-color: var(--bright-blue);
    color: white;
    padding: 1em 10%;
    box-shadow: 0 20px 15px 5px var(--pale-blue);
    display: block;

    &:hover {
        background-color: var(--hover-light);
    }
`

const Cancel = styled.a`
    display: block;
    color: var(--desaturated-blue);

    &:hover {
        color: var(--hover-dark);
    }
`