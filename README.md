# React Guest List
<img width="1401" alt="Screenshot 2024-06-02 at 16 39 29" src="https://github.com/xkrsx/react-guest-list/assets/98549349/7a14f190-2d75-474d-b96b-a61bb07f57b1">

A simple app, using external [API](https://zy99yv-4000.csb.app/guests/) ([GitHub Repo](https://github.com/xkrsx/express-guest-list-api-memory-data-store)), letting user to create their guest list.

Funcionality:

- adding guest (first and last name, by default: not attending);
- editing guest (guest card contains: checkbox input for attending, edit button changing first and last name to inputs and remove guest button)
- removing single guest (button in the guest card)
- removing all guests

First and last name input are required to add a new guest. User may clear the form by clicking on the button next to the form.
User may edit every single guest by checking the 'attending' box or by clicking 'edit guest' button. It changes the guest card to two text inputs (first and last name). By leaving them empty and clicking 'save guest', previous data is not modified. Filling both or only one of the input results in changing specified data (eg. leaving first name input blank, but typing new last name will modify only the latter one).

Remove guest button results in removing selected guest from the list and showing very briefly an information 'x x has been deleted' before the list refreshes again.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
