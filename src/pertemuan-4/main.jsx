import { createRoot } from "react-dom/client";
import './tailwind.css';
import FrameworkList from "./FrameworkList";
import FrameworkSearchFilter from "./FrameworkSearchFilter";
import ResponsiveDesign from "./ResposiveDesign";
import Products from "./Products";
import ProductSearch from "./ProductSearch";

createRoot(document.getElementById("root"))
    .render(
        <div> 
           {/* <FrameworkList/> */}
           {/* <FrameworkSearchFilter/> */}
           {/* <ResponsiveDesign/> */}
           {/* <Products/> */}
           <ProductSearch/>
        </div>
    )