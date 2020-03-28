// utility mixins

export default {

    methods: {
    
        /** 
         * @desc capitalises the first letter of string,  28 Mar 2020
         * @author Stephen Courtier <steves0089@gmail>
         * 
         * @param {String}  - inputStr input
         * @returns {String} 
         */
        capitaliseFirstLetter(inputStr) {

            return inputStr.charAt(0).toUpperCase() + inputStr.slice(1)
        }

    }

}