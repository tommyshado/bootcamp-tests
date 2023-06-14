const app = () => {

    // create an object that stores all the shoes in store
    const shoeCatagories = {
        'availableShoes' : {

            'menShoes' : { 
                // store all the shoes in store
                'allMenShoeStorage' : { 

                    // categorize the shoes with brand name so that in the UI I can show all the shoes for a certain brand name
                    'brandNameForMen' : { 
                        // store all url for the shoes for a certain brand name 
                        // in this case I don't care about the size of the shoes
                        'adidas' : [],
                        'converse' : [],
                        'asics' : [],
                        'nike' : [],
                    },

                    // categorize the shoes with size
                    'sizeOfShoesForMen' : {
                        // store all the shoes url for different sizes on the empty arrays
                        'sizeEightShoes' : [],
                        'sizeSixShoes' : [],
                        'sizeFiveShoes' : [],
                        'sizeFourShoes' : [],
                    },

                    // the is a case where the client just wants to show all the shoes without selecting
                    // brand name or size name in the UI
                    'allShoesForMen' : {

                        // in this case we don't care about the size or the brand name of the shoes, I will just show all the shoes in the UI
                        'shoesContainer' : [],
                    },
                },
             },

            'womenShoes' : {
                // store all the shoes in store
                'allWomenShoeStorage' : { 

                    // categorize the shoes with brand name so that in the UI I can show all the shoes for a certain brand name
                    'brandNameForWomen' : { 
                        // store all url for the shoes for a certain brand name 
                        // in this case I don't care about the size of the shoes
                        'adidas' : [],
                        'converse' : [],
                        'asics' : [],
                        'nike' : [],
                    },

                    // categorize the shoes with size
                    'sizeOfShoesForWomen' : {
                        // store all the shoes url for different sizes on the empty arrays
                        'sizeEightShoes' : [],
                        'sizeSixShoes' : [],
                        'sizeFiveShoes' : [],
                        'sizeFourShoes' : [],
                    },

                    // the is a case where the client just wants to show all the shoes without selecting
                    // brand name or size name in the UI
                    'allShoesForWomen' : {

                        // in this case we don't care about the size or the brand name of the shoes, I will just show all the shoes in the UI
                        'shoesContainer' : [],
                    },
                },
            },

            'kidsShoes' : {
                // store all the shoes in store
                'allKidsShoeStorage' : { 

                    // categorize the shoes with brand name so that in the UI I can show all the shoes for a certain brand name
                    'brandNameForKids' : { 
                        // store all url for the shoes for a certain brand name 
                        // in this case I don't care about the size of the shoes
                        'adidas' : [],
                        'converse' : [],
                        'asics' : [],
                        'nike' : [],
                    },

                    // categorize the shoes with size
                    'sizeOfShoesForKids' : {
                        // store all the shoes url for different sizes on the empty arrays
                        'sizeFourShoes' : [],
                        'sizeFiveShoes' : [],
                        'sizeSixShoes' : [],
                    },

                    // the is a case where the client just wants to show all the shoes without selecting
                    // brand name or size name in the UI
                    'allShoesForKids' : {

                        // in this case we don't care about the size or the brand name of the shoes, I will just show all the shoes in the UI
                        'shoesContainer' : [],
                    },
                },
            },

            // store all the shoes url 
            'allShoesForMenWomenKids' : [],
        },
    };

    return {
        shoeCatagories
    }
}