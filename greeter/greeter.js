function f(input) {
    var a = 100;
    if (input) {
        //still okay to refence 'a'
        var b = a + 1;
        return b;
    }
    // Error 'b' doesn't exist here
}
