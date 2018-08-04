import React, { Component } from "react";
import { Link } from "react-router-dom";
import RequestService from "./RequestService";
import ItemOptionGenerator from "./items/ItemOptionGenerator";

/**
 * Define the form for creating a Request for items for a client
 */
class CreateItemRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // TODO: separate item attributes and component attributes
            clientId: "",
            gender: "unspecified",
            items: "",
            urgency: "standard",
            notes: "",
            category: null,
            typeOfItem: "",
            itemsInCategory: [],
            attributeDropdowns: null
        };

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleItemTypeChange = this.handleItemTypeChange.bind(this);
        this.setItemAttributeDropdowns = this.setItemAttributeDropdowns.bind(this);

        this.itemOptionGenerator = new ItemOptionGenerator();
        
    }

    // Handle submitting of form
    handleSubmit(event) {
        //   event.preventDefault();
        //   this.addRequestService.sendData(this.state);
        //   this.props.history.push("/");
    }

    // Set values in component state every time fields of form change
    handleFormChange(event) {
        // this.setState({ [event.target.name]: event.target.value });
    }

    /** 
     * When category selection changes, update "items in category" component
     * state value, which dynamically populates the item type dropdown.
     */
    handleCategoryChange(event) {
        var itemTypes = this.itemOptionGenerator.getItemsInCategory(event.target.value);
        this.setState({ category: event.target.value });
        this.setState({ itemsInCategory:  itemTypes });
    }

    /**
     * Get UI element for a dropdown containing possible categories
     */
    getCategoryDropdown() {
        let categories = this.itemOptionGenerator.getCategories();
        let dropdownOptions = categories.map((category) =>
            <option key={category}>{category}</option>
        );
        return (
            <div>
                <label>Item category:</label><br/>
                <select onChange={this.handleCategoryChange}>
                    {dropdownOptions}
                </select>
            </div>
        )
    }

    /**
     * Get UI element for a dropdown containing items within given category
     */
    getItemTypeDropdownForCategory(category) {
        if (category) {
            let itemsInCategory = this.state.itemsInCategory;
            let itemOptions = itemsInCategory.map((item) =>
                <option key={item}>{item}</option>
            );
            return (
                <div>
                    <label>Item Type</label><br/>
                    <select onChange={this.handleItemTypeChange}>
                        {itemOptions}
                    </select>
                </div>)
        }
    }

    /**
     * Handle change in item type
     */
    handleItemTypeChange(event) {
        this.setState({ typeOfItem: event.target.value}, function () {
            // pending state transaction booo
            this.setItemAttributeDropdowns();
        });
    }

    /**
     * If item has attributes for size, style, or gender, set dropdowns for them
     */
    setItemAttributeDropdowns() {
        var category = this.state.category;
        var itemType = this.state.typeOfItem;
        var attributes = this.itemOptionGenerator.getItemAttributes(category, itemType);
        if (attributes) {
            let sizeDropdown;
            let genderDropdown;
            let styleDropdown;
            if (attributes.size) {
                let sizeOptions = attributes.size.map((item) =>
                    <option key={item}>{item}</option>
                );
                 
                sizeDropdown = (
                    <div>
                        <label>Size</label><br/>
                        <select>
                            {sizeOptions}
                        </select>
                    </div>)
            }
            if (attributes.gender) {
                let genderOptions = attributes.gender.map((item) =>
                    <option key={item}>{item}</option>
                );

                genderDropdown = (
                    <div>
                        <label>Gender</label><br/>
                        <select>
                            {genderOptions}
                        </select>
                    </div>)
            }
            if (attributes.style) {
                let styleOptions = attributes.style.map((item) =>
                    <option key={item}>{item}</option>
                );
                styleDropdown = (
                    <div>
                        <label>Style</label><br/>
                        <select>
                            {styleOptions}
                        </select>
                    </div>)
            }

            let attributeOptions = (
                <div>
                    { sizeDropdown }
                    { styleDropdown }
                    { genderDropdown }
                </div>
            );

            this.setState({ attributeDropdowns: attributeOptions });
            // todo: remove attributes when changing to something without attributes
        }
    }

    // define UI for request form
    render() {
        // Get dropdown menus
        var categoryDropdown = this.getCategoryDropdown();
        var itemsInCategoryDropdown = this.getItemTypeDropdownForCategory(this.state.category);

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <b>New Request:</b>
                    <br /> <br />
                    <label>
                        Client Number (required):
                    <input required type="text" name="clientId" value={this.state.value} onChange={this.handleFormChange} className="form-control" />
                    </label>
                    <br /><br />
                    { categoryDropdown }
                    <br/><br/>
                    { itemsInCategoryDropdown }
                    <br/><br/>

                    { this.state.attributeDropdowns }
                    <br/><br/> 

                    <input type="submit" value="Submit" className="btn btn-primary" />
                    <Link to={"/"} className="btn btn-primary">Cancel</Link>
                </form>
            </div>
        );
    }
}

export default CreateItemRequest;

/**
 * TODO
 * 
 * Can set labal in dropdown like this, but poses some issues
 * <option disabled selected>Select category:</option>
 */