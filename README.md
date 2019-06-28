#Documentation
<!-- https://www.npmjs.com/package/react-stripe-checkout -->

#Install
    npm install react-stripe-checkout
    npm install stripe

#Set Up
    *******Make sure that you .gitignore your .env file******
    import from react-stripe-checkout on the component that you want to use it in
    import stripe into your controller and invoke your environment variable (stripe_key)


#Notes
    payments need to be in number format and they cannot be less than 50 and no larger than $999,999.99. These will be in cents. 

