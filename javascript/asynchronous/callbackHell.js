// Callback Hell
// Pyramid Of doom
// Inversion of Control

// bookHotel--> proceedPayment---> showBookingStatus-->updateBookingstory

bookHotel(hotelId, function(){
    if(error){
        handleError
    }else{
        proceedToPayment(hotelId, function(){
            if(error){
                handleError
            }
            else{
                updateBookingStatus(function(){
                    if(error){
                        handleError
                    }
                    else{
                        updateBookingStory(function(){
                            if(error){
                                handleError
                            }
                            else{
                                success
                            }
                        })
                    }
                })
            }
        })
    }
})
