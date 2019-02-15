/*
 *  App from Jonas Schmedtmann's course here: https://github.com/jonasschmedtmann/complete-javascript-course/tree/master/6-budgety/starter
 */


/* Budget Controller */
var budgetController = (function (){
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            expense: [],
            income:[]
        },
        totals: {
            expense: 0,
            income: 0
        }
    }


    /* Begin Public */
    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length-1].id+1;
            } else {
                ID = 0;
            }

            if (type === 'expense') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'income') {
                newItem = new Income(ID, des, val);
            }   

            data.allItems[type].push(newItem);
            return newItem;
        },

        testing: function() {
            console.log(data);
        }
    }
})();

/* UI Controller */
var UIController = (function() {

    const DOMStrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputButton: ".add__btn",
        incomeContainer: ".income__list",
        expenseContainer: ".expenses__list"
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // Our custom value provided in the HTML tag.
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },

        addListItem: function(itemObj, type) {
            var html = "";
            var newHTML = "";
            var element;

            // Create HTML string with placeholder text
            // I deviate from the lecture by using template literals, but I don't use interpolation yet or a tag function because that would deviate too much from the lessons.
            // Probably a good exercise to attempt to use interpolation to achieve the same thing.
            if (type === "income"){
                element = DOMStrings.incomeContainer;
                html =
                    `<div class="item clearfix" id="income-%id%">
                        <div class="item__description">%description%</div>
                        <div class="right clearfix">
                            <div class="item__value">%value%</div>
                            <div class="item__delete">
                                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                            </div>
                        </div>
                    </div>`
            } else if (type === "expense"){
                element = DOMStrings.expenseContainer;
                html = 
                    `<div class="item clearfix" id="expense-%id%">
                        <div class="item__description">%description%</div>
                        <div class="right clearfix">
                            <div class="item__value">%value%</div>
                            <div class="item__percentage">21%</div>
                            <div class="item__delete">
                                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                            </div>
                        </div>
                    </div>`
            }

            // Replace the placeholder text with real data from the item object
            newHTML = html.replace("%id%", itemObj.id);
            newHTML = newHTML.replace("%description%", itemObj.description);
            newHTML = newHTML.replace("%value%", itemObj.value);
            console.log("html var is: " + html);
            console.log("newHTML var is: " + newHTML);
            // Insert HTML into the DOM

            document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);
        },

        DOMStrings: DOMStrings // I deviate from the instruction here. See lecture 79, timestamp 14:30
    };
})();

/* Global App Controller */
var controller = (function(budgetCtrl,UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.DOMStrings;

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress',function(event) {
            if (event.keyCode === 13){
                ctrlAddItem();
            };
        });
    };

    var ctrlAddItem = function() {
        var input, newItem;
        // First, get the data in the input field.
        input = UICtrl.getInput();
        console.log(input);
        // Add the item to the budget controller and get an object back to use in the UI controller a bit later.
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        // Add it to the UI.
        UICtrl.addListItem(newItem, input.type)
        // Calculate the budget.
        // Display the new budget in the UI.
    };

    return {
        init: function() {
            console.log("Application starting...");
            setupEventListeners();
        }
    }
})(budgetController, UIController);

controller.init();