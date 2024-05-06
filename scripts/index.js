const inputName = document.getElementById("Name");
const inputEmail = document.getElementById("Email");
const inputPickupDate = document.getElementById("inputPickupDate");
const inputNumOfNights = document.getElementById("inputNumOfNights");
const inputRoomType = document.getElementsByName("roomType");
const inputNumAdults = document.getElementById("numAdults");
const inputNumChildren = document.getElementById("numChildren");
const inputDiscount = document.getElementsByName("Discount");

const outputOriginalRoomCost = document.getElementById("outputOriginalRoomCost");
const outputDiscount = document.getElementById("outputDiscount");
const outputDiscountedRoomCost = document.getElementById("outputDiscountedRoomCost");
const outputTax = document.getElementById("outputTax");
const outputTotalDue = document.getElementById("outputTotalDue");

const overnightCostForm = document.getElementById("overnightCostForm");

overnightCostForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = inputName.value;
    const email = inputEmail.value;
    const pickupDate = inputPickupDate.value;
    const numOfNights = parseInt(inputNumOfNights.value);
    let roomRate = getRoomRate(pickupDate, getSelectedRoomType());
    const numAdults = parseInt(inputNumAdults.value);
    const numChildren = parseInt(inputNumChildren.value);
    const discount = getSelectedDiscount();

    const originalRoomCost = roomRate * numOfNights;

    let discountAmount = 0;
    if (discount === "AAA/Senior") {
        discountAmount = originalRoomCost * 0.10;
    } else if (discount === "Military") {
        discountAmount = originalRoomCost * 0.20;
    }

    const discountedRoomCost = originalRoomCost - discountAmount;

    const tax = discountedRoomCost * 0.12;

    const totalDue = discountedRoomCost + tax;

    outputOriginalRoomCost.textContent = originalRoomCost.toFixed(2);
    outputDiscount.textContent = discountAmount.toFixed(2);
    outputDiscountedRoomCost.textContent = discountedRoomCost.toFixed(2);
    outputTax.textContent = tax.toFixed(2);
    outputTotalDue.textContent = totalDue.toFixed(2);
});

function getSelectedRoomType() {
        const inputRoomType = document.getElementsByName("roomType");
        if (inputRoomType[0].checked) {
            return inputRoomType[0].id;
        } else if (inputRoomType[1].checked) {
            return inputRoomType[1].id;
        } else if (inputRoomType[2].checked) {
            return inputRoomType[2].id;
        }
    }


function getSelectedDiscount() {
    const inputDiscount = document.getElementsByName("Discount");
    if (inputDiscount[0].checked) {
        return inputDiscount[0].id;
    } else if (inputDiscount[1].checked) {
        return inputDiscount[1].id;
    }
}

function getRoomRate(checkInDate, roomType) {
    return 150.00;
}
