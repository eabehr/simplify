class ItemOptionGenerator {
    // rename to ItemOptionUtility
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

    /**
     * Get attributes for item in category
     */
    getItemAttributes(category, item) {
        // TODO: sizes are different depending on gender
        var itemData = this.state.allItems[category];
        // var itemsAttributes = [];
        // getting syntax errors for for each loop?
        for (var i = 0; i < itemData.length; i++) {
            if (itemData[i].type == item) {
                return itemData[i].attributes;
            }
        }
        return null;
    }

    // Todo: write some tests for this
}

export default ItemOptionGenerator;