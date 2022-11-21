# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application
The goal of the application is to create a shopping interface where users can search for vehicles they would like to purchase and filter thesew vehicles based on  certain characteristics.

### Usability Principles Considered
I've designed the site so that users are always able to see their cart and items avaialable for selection. I tried to use colors that stood out for buttons and also tried to color these buttons in an intutive way. I.e in the car if you want to remove an item from the cart the button is red and if you add an item the button is green.

### Organization of Components
My whole application stems from the app function which deploys most of my architecture and stores all my states. The components I use to create the website are a main component (the component that displays all available items in the shop based on filtering selections), a header component (this component stores all of the buttons used for filtering and is passed down all the methods used for changing the state of the filtering variables), a basket component (this component is the agregator which displays all the items in my cart and allows the user to add or remove items from the cart) and finally a product component which is a child of the main compnoent (this component is essentially each red box which contains my products - this component inherits buttons and handle clicks when a button is clicked in order to add an item to the aggregator)

### How Data is Passed Down Through Components
the methods to change the state's of the variables tracking which filters are in use are passed from app all the way into the basket component. The basket component has buttons which when selected can change the state of the filtertype state. the filtering is then done in the app class. the same logic is used for sorting. 

### How the User Triggers State Changes
the user triggers a state change with a combination of buttons and drop down menus. The buttons use onClick and the dropdown menu's use onchange to activate the funtion which changes the state of the filter or sortType from functions passed down from app.

