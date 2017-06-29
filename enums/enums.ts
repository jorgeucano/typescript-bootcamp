enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
let directions = [Direction.Up, Direction.Down, Direction.Left, Direction.Right];

enum FileAccess {
    // constant members
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    // computed member
    G = "123".length
}

enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[Enum.A]; // "A"

/*
enum otraCosa {
    sayHola = 'hola',
    sayChau = 'Adios'
}
*/