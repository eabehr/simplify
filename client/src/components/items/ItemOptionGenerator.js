class ItemOptionGenerator {
    constructor() {
        this.state = {
            allItems : require("./AvailableItems")
        }
    }

    /**
     * Get all categories of items
     */
    getCategories() {
        return Object.keys(this.state.allItems);
    }

    /**
     * Get types of items within given category
     */
    getItemsInCategory(category) {
        var itemData = this.state.allItems[category];
        var itemsInCategory = [];
        // getting syntax errors for for each loop?
        for (var i = 0; i < itemData.length; i++) {
            itemsInCategory.push(itemData[i].type);
        }
        return itemsInCategory;
    }

    isItemGendered(category, item) {

    }

    isItemSized(category, item) {

    }

    isItemStyled(category, item) {

    }

    // TODO: get for gender, size, style
    // Todo: write some tests for this
}

export default ItemOptionGenerator;