import { Footer } from "./footer.js";
import { Header } from "./header.js";
import { MainLayout } from "./mainLayout.js";

export const App = () => {
    const container = document.createElement('div');
    const header = Header();
    const footer = Footer();
    const mainLayout = MainLayout();

    container.appendChild(header);
    container.appendChild(footer);  
    container.appendChild(mainLayout)
    // container.innerHTML = `
    // ${header}
    // ${footer}
    // `
    document.body.appendChild(container)
    console.log(Footer, Header)
}