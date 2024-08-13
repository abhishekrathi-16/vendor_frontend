# Getting started with the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To run this project, in the project directory, run these commands:

### `npm install`

Installs all the dependencies required to run the project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Deployment

This app has been deployed to [https://vendor-frontend-nine.vercel.app/](https://vendor-frontend-nine.vercel.app/) using Vercel. Visit the live hosted site to view the app in production.

Vercel provides serverless hosting and helps implementing automatic CI/CD to the application.

## Screenshots and Workflow

#### Home Page

When a user enters the application, he is directed to the landing page which is a list of items to choose from.
![Home Page](/public/screenshots/home_page.png)

The user can select multiple items and the quantity of items that he wants to buy
![Quantity](/public/screenshots/select_quantity.png)

After selecting the quantity, the user clicks on "Add to Cart" button which adds the item with the selected quantity to the cart
![Add to cart](/public/screenshots/add_to_cart.png)

The user can view the cart by clicking the "Open Cart" button at the bottom of the page
![View Cart](/public/screenshots/view_cart_button.png)

On clicking the button, the cart is displayed. The user can then proceed to the payment page by clicking "Proceed to Buy" button.
![Display Cart](/public/screenshots/display_cart.png)

#### Payment Page

The user is directed to the payment page where he can pay for the items he has selected by clicking "Confirm Payment" Button
![Payment Page](/public/screenshots/payment_process.png)

#### Success Page
After the payment is successful, the user is directed to the success page. The success page is redirected to the home page in 2 seconds.
![Success Page](/public/screenshots/payment_success.png)