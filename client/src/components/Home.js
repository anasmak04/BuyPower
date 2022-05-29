import React, { Component } from 'react';
import Header from "./Header.js"
import "./Home.css"
function Home (){
  
        return (
            <div>
              <Header />
              <div className='show-me'>
                <h1>Why choose BuyPower?</h1>   
                <div className='parent'>
                    <div className='child'>
                    <div className="div-center">

                    </div>
                    <h2>Buy Now, Pay in 14 Days.</h2>
                           <p>You can Buy Electricity with a loan on Buypower.ng and payback in 14 days.</p>
                    </div>
                    <div className='child'>
                       <div className="div-center">
                           
                           </div> 
                           <h2>Buy Now, Pay in 14 Days.</h2>
                           <p>You can Buy Electricity with a loan on Buypower.ng and payback in 14 days.</p>
                    </div>
                    <div className='child'>
                        <div className="div-center">
                            

                        </div>
                        <h2>Pay with USSD.</h2>
                            <p>No internet? Buy Electricity by dialing *402*00009548*amount# on any kind of mobile device.</p>
                    </div>
                    <div className='child'>
                        <div className="div-center">
                            

                        </div>
                        <h2>Unit Calculator.</h2>
                            <p>You can calculate how many Electricity units you will get for the amount you plan to buy.</p>
                    </div>
                    <div className='child'>
                        <div className="div-center">
                           

                        </div>
                        <h2>Set Reminders.</h2>
                            <p>Let us remind you to Buy Electricity. Set a reminder date and we wont forget.</p>
                    </div>
                    <div className='child'>
                        <div className="div-center">
                          

                        </div>
                        <h2>Pay with Bank Transfers.</h2>
                            <p>Make payments via our Bank Transfer option and get value immedialtely.</p>
                       
                    </div>

                    
                 </div>   
            </div>  

            <div className='para'>
                <div className='para-parent'>
                    <div></div>
                    <div></div>
                    
                </div>
            </div>
            </div>
        );
    
}

export default Home;