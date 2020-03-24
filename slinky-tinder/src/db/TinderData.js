
let names = [
    "Billy",
    "Samantha",
    "James",
    "Sarah",
    "Peter",
    "Bobby",
    "Lilly",
    "Jenefer"
]

let shapes = [
    "Cylender",
    "Cube",
    "Pyramid",
    "Star",
    "Heart"
]

let materials = [
    "carbon Fiber",
    "aluminum",
    "gold",
    "silver",
    "platinum",
    "wood",
    "plastic"
]

let descriptions = [
    "First... \
    Job: U12 soccer referee \
    Word: momma (ya ya, I'm a mama's boy) \
    Album I Bought: Michael Jackson's BAD (and it was on tape) \
    Kiss: Amanda Butler. Front seat of my '95 Grand Am after the Sophomore's only dance. Dave Matthews was playing. (But not Crash... I would never.)   ",

    "Last...\
    Place I visited: Zion (it was amazing)\
    Book I read: Decoded by Jay Z (also amazing)\
    Time I yelled at someone: In the bleachers at Fenway\
    Time I cried: Watching that YouTube of the lion who gets reunited with its trainer (oh man, gets me every time)",

    "About Me: Likes fishing, gives great speeches at weddings, and plays a mean harmonica.\
    About You: Eats adventurously, likes road trips, can talk about books for hours."
]

export default [
    ...Array(50).fill(0).map((v,index)=>{
        return {    id: index, 
                    name: names[ 
                        Math.floor(Math.random() * Math.floor(names.length))
                    ],
                    shape: shapes[ 
                        Math.floor(Math.random() * Math.floor(shapes.length))
                    ],
                    material: materials[
                        Math.floor(Math.random() * Math.floor(materials.length))
                    ],
                    description: descriptions[
                        Math.floor(Math.random() * Math.floor(descriptions.length))
                    ]
                }

    })
]