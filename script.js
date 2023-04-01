    let input = document.getElementById('input');

    function addInput(value) {
    input.value += value;
    }

    function clearInput() {
    input.value = '';
    }

    function backspace() {
    input.value = input.value.slice(0, -1);
    }

    function calculate() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'Error';
    }
    }

    function calculatePercentage() { // %
        try {
        input.value = eval(input.value + '/100');
        } catch (error) {
        input.value = 'Error';
        }
    }

    function calculateSquare() { // x2
        try {
        input.value = eval(input.value) ** 2;
        } catch (error) {
        input.value = 'Error';
        }
    }