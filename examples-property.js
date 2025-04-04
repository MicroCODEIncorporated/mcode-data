// MicroCODE: define this module's name for logging
const MODULE_NAME = 'examples-property.js';
const data = require('./index.js');

console.log("\n\nREAD_WRITE TEST\n");

let myProperty = data.property({
    initial: 7,
    readonly: false,
    immutable: false,
    validator: function (value)
    {
        return typeof value === 'number';
    },
    onChange: function (oldValue, newValue)
    {
        console.log(`RW Property changed from ${oldValue} to ${newValue}`);
    }
});

{
    // test: get
    console.log(`RW Property - should be 7: ${myProperty.get()}`);

    // test: set
    myProperty.set(10);
    console.log(`RW Property - should be 10: ${myProperty.get()}`);

    // test: illegal value
    try
    {
        myProperty.set('test');
    }
    catch (error)
    {
        console.error(`Error: ${error.message}`);
    }
    console.log(`RW Property - should be 10: ${myProperty.get()}`);

}

console.log("\n\nREAD_ONLY TEST\n");

let myReadOnly = data.property({
    initial: 17,
    readonly: true,
    immutable: false,
    validator: function (value)
    {
        return typeof value === 'number';
    },
    onChange: function (oldValue, newValue)
    {
        console.log(`RO Property changed from ${oldValue} to ${newValue}`);
    }
});

{
    // test: get
    console.log(`RO Property - should be 17: ${myReadOnly.get()}`);

    // test: set
    try
    {
        myReadOnly.set(10);
    }
    catch (error)
    {
        console.error(`Error: ${error.message}`);
    }
    console.log(`RO Property - should be 17: ${myReadOnly.get()}`);

    // test: illegal value
    try
    {
        myReadOnly.set('test');
    }
    catch (error)
    {
        console.error(`Error: ${error.message}`);
    }
    console.log(`RO Property - should be 17: ${myReadOnly.get()}`);

}


console.log("\n\nIMMUTABLE TEST\n");

let myImutable = data.property({
    initial: 17,
    readonly: true,
    immutable: true,
    validator: function (value)
    {
        return typeof value === 'number';
    },
    onChange: function (oldValue, newValue)
    {
        console.log(`IM Property changed from ${oldValue} to ${newValue}`);
    }
});

{
    // test: get
    console.log(`IM Property - should be 17: ${myImutable.get()}`);

    // test: set
    try
    {
        myImutable.set(10);
    }
    catch (error)
    {
        console.error(`Error: ${error.message}`);
    }
    console.log(`IM Property - should be 17: ${myImutable.get()}`);

    // test: illegal value
    try
    {
        myImutable.set('test');
    }
    catch (error)
    {
        console.error(`Error: ${error.message}`);
    }
    console.log(`IM Property - should be 17: ${myImutable.get()}`);

}

console.log("\n\nFINISHED\n");
