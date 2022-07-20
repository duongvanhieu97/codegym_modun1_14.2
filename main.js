function result() {
    let input = document.getElementById('input').value;

    document.getElementById('result').innerHTML = (input-32) / 1.8;
}