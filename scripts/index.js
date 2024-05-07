"use strict";

const nameTextBox = document.getElementById("Name");
const emailTextBox = document.getElementById("Email");
const checkInDateBox = document.getElementById("inputPickupDate");
const numberOfDaysNumberBox = document.getElementById("inputNumOfNights");
const numberOfAdultsNumberBox = document.getElementById("numAdults");
const numberOfChildrenNumberBox = document.getElementById("numChildren");
const queenRadioButton = document.getElementById("Queen");
const kingRadioButton = document.getElementById("King");
const TwoBedroomRadioButton = document.getElementById("TwoBedroomSuite");
const seniorDiscountRadioButton = document.getElementById("AAA/Senior");
const militaryDiscountRadioButton = document.getElementById("Military");
const submitButton = document.getElementById("overnightCostForm");
const originalRoomCostOutput = document.getElementById("outputOriginalRoomCost");
const discountOutput = document.getElementById("outputDiscount");
const discountedRoomCostOutput = document.getElementById("outputDiscountedRoomCost");
const taxOutput = document.getElementById("outputTax");
const totalStayCostOutput = document.getElementById("outputTotalDue");

submitButton.addEventListener("submit", function (event) {
    event.preventDefault();

    let numberOfDays = parseInt(numberOfDaysNumberBox.value);
    let discount = 0;
    let checkInDate = new Date(checkInDateBox.value.replace(/-/g, "/"));
    let checkInMonth = checkInDate.getMonth() + 1;

    let roomRate;
    let roomCost;
    let discountedRoomCost;
    let totalStayCost;
    let tax;

    const TAX_RATE = 0.12;

    if (queenRadioButton.checked) {
        roomRate = getRoomRate(checkInMonth, "Queen");
    } else if (kingRadioButton.checked) {
        roomRate = getRoomRate(checkInMonth, "King");
    } else if (TwoBedroomRadioButton.checked) {
        roomRate = getRoomRate(checkInMonth, "TwoBedroom");
    }

    if (seniorDiscountRadioButton.checked) {
        discount = 0.1;
    } else if (militaryDiscountRadioButton.checked) {
        discount = 0.2;
    }

    roomCost = roomRate * numberOfDays;
    discountedRoomCost = roomCost - (roomCost * discount);
    tax = discountedRoomCost * TAX_RATE;
    totalStayCost = discountedRoomCost + tax;

    originalRoomCostOutput.textContent = roomCost.toFixed(2);
    discountOutput.textContent = (discount * 100).toFixed(0);
    discountedRoomCostOutput.textContent = discountedRoomCost.toFixed(2);
    taxOutput.textContent = tax.toFixed(2);
    totalStayCostOutput.textContent = totalStayCost.toFixed(2);
});

function getRoomRate(checkInMonth, roomType) {
    if (roomType === "Queen" || roomType === "King") {
        if (checkInMonth >= 6 && checkInMonth <= 8) {
            return 250;
        } else {
            return 150;
        }
    } else if (roomType === "TwoBedroomSuite") {
        if (checkInMonth >= 6 && checkInMonth <= 8) {
            return 350;
        } else {
            return 210;
        }
    }
}
