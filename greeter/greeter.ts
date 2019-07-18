function f(input: boolean){
    let a = 100;

    if (input) {
        //still okay to refence 'a'
        let b = a + 1;
        return b;
    }

    // Error 'b' doesn't exist here
   
}