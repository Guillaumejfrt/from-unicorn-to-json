# ToJSON

## The Goal

Some developer at Ponicode gets bored on weekends. So they decided to create a new homemade storage format: the Unicorn. You goal is to create a convertor between our custom format and the famous format: JSON.

Here an example of the Unicorn standard:

```
'users'=
(
    (
        'id'=42;
        'name'='Alain Turing';
        birth='1912-06-23';
        known_work=
        (
            'Cryptanalysis of the Enigma';
            'Turing's proof';
            'Turing machine';
            'Turing test';
            'Unorganised machine';
            'Turing pattern';
            'Turing reduction';
            'The Chemical Basis of Morphogenesis'
        )
    );
    (
        'id'=51;
        'name'='Ada Lovelace'
    );
    true
)
```

And the JSON equivalent:

```
{
    "users": [
        {
            "id": 42,
            "name": "Alain Turing",
            "birth": "1912-06-23",
            "known_work": [
                "Cryptanalysis of the Enigma",
                "Turing's proof",
                "Turing machine",
                "Turing test",
                "Unorganised machine",
                "Turing pattern",
                "Turing reduction",
                "The Chemical Basis of Morphogenesis"
            ]
        },
        {
            "id": 51,
            "name": "Ada Lovelace"
        },
        true
    ]
}

```

## Concepts

Unicorn content is composed by ELEMENTS.

### ELEMENTS

An ELEMENT can be of type BLOC, PRIMITIVE or KEY_VALUE

### BLOC

A BLOCK is a series of ELEMENT separated by semi-column (`;`). It always starts with an opening parenthesis (`(`) and finish with a closing one (`)`)

### PRIMITIVE

A number, a boolean, null or a string (isolated with simple quotes `'`)

### KEY_VALUE

A string (isolated with simple quotes `'`) separated from a BLOCK or a PRIMITIVE with an equal (`=`).
If there is no equal sign, the default value is `null`.

## Game Input

### Input

**Line 1**: The number `N` of lines to be convert.
The following `N` lines : The content as Unicorn format. All characters are ASCII.
All inputs are valid.

### Output

The input formatted as JSON.

### Call

Your program will be called as follow:

```
./my_program < samples/1_bool.txt
```

### Samples and result

You can find some samples in the folder `./samples` and the result and the `./result` folder
