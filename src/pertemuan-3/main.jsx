import { createRoot } from "react-dom/client";
import UserForm from "./UserForm";
import TailwindCSS from "./TailwindCSS";
import './tailwind.css';
import HitungGajiForm from "./HitungGajiForm";

createRoot(document.getElementById("root"))
    .render(
    <div>
        <TailwindCSS/>
        <UserForm/>
        <HitungGajiForm/>
    </div>
)
    

