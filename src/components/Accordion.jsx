import Item from "./Item";

const Accordion = () => {
    return (
        <div className="w-full max-w-md mx-auto mt-4">
            <Item title="Item 1">
                Content for item 1
            </Item>
            <Item title="Item 2">
                Content for item 2
            </Item>
            <Item title="Item 3">
                Content for item 3
            </Item>
        </div>
    );
};

export default Accordion;