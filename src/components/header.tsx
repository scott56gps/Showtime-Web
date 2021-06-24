/*
   Header
   The main header that displays in all states of the application.

   params:
   - content: Any - The HTML content to be displayed.
*/
function Header(props: any) {
    return (
        <header className="App-header">
            {props.content}
        </header>
    );
}

export default Header;
