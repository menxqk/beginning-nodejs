function foo() {
    console.log('is this called from globals? :', this == global);
}

foo();