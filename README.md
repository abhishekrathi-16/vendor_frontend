# Getting started with the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Required - Note

Please start the backend server on `localhost:8000` before running the frontend of the application or using the deployed link.

To run the backend, please visit the backend repository here:
[https://github.com/mytestaccount-1/wendor_backend](https://github.com/mytestaccount-1/wendor_backend) and follow the instructions.

## Available Scripts

To run this project, in the project directory, run these commands:

Migrate to the folder/directory where you want to clone the project. Then run the following command in the terminal:

#### `git clone https://github.com/mytestaccount-1/vendor_frontend.git`

Clones the repository on your system

#### `npm install`

Installs all the dependencies required to run the project.

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Deployment

This app has been deployed to [https://vendor-frontend-nine.vercel.app/](https://vendor-frontend-nine.vercel.app/) using Vercel. Visit the live hosted site to view the app in production. Note: The deployed link doesn't work because of backend related CORS issues.

Vercel provides serverless hosting and helps implementing automatic CI/CD to the application.

## Screenshots and Workflow

### Shopper UI

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


### Admin UI

#### You can use the Admin UI by visiting the /admin route on browser. No buttons have been provided to access the admin routes.

#### Login Page

The admin can login to the application by entering the correct credentials.
![Admin Login](/public/screenshots/admin_login.png)

#### Admin Dashboard

When the admin logs in, he is directed to the admin dashboard. The dashboard consists of the inventory which admin can view for his reference and also the bulk create and update items forms for admin operations.
![Admin Dashboard](/public/screenshots/admin_dashboard.png)

#### Admin Inventory

The admin can view all the items that are currenlty present in the inventory on the admin dashboard along with all the details. Helpful for the admin, isn't it?
![Admin Inventory](/public/screenshots/admin_inventory.png)

#### Admin Operations

The admin can add items in bulk using the Bulk Create Items form and update an existing item in the inventory by using Update Item form.

- Update Items 

Select the item to be updated from the dropdown

![Update Items](/public/screenshots/update_items.png)

Edit the details as required and click on the `Update Item` button

![Update Items 2](/public/screenshots/update_items_2.png)

The changes reflect immediately on the admin inventory and shopper ui as well.

- Bulk Create Items

Add the items you want to create with the fields as required.
Click on `Add Another Item` button to add more items as needed. When done, click on `Create Items` button to create the items in bulk.

![Create Bulk Items](/public/screenshots/bulk_create.png)

The changes reflect immediately on the admin inventory and shopper ui as well.