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
            console.log(type);
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
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // Our custom value provided in the HTML tag. Will be inc or exp for income or expense,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
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
        // Add the item to the budget controller.
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        // Add it to the UI.
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