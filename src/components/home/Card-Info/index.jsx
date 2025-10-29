import Evolution from "./Evolution";
import TypeEffect from "./Type-Effect";
import Logo from "./Logo";

const CardInfo = () => {
    return (
        <div className="p-4 border rounded-lg shadow-md space-y-4">
            <Evolution text="Evolution" />
            <TypeEffect text="Type Effect" />
            <Logo text="Logo" />
        </div>
    );
}

export default CardInfo;