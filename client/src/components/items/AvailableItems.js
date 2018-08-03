module.exports = {
    // TODO: store in DB instead
    "household" : [
        {
            "type" : "bedding",
            "attributes" : null
        },
        {
            "type" : "pillow",
            "attributes" : null
        },
        {   "type" : "plates",
            "attributes" : null
        }
    ],
    "hygiene" : [
        {
            "type" : "shampoo",
            "attributes" : null
        },
        {
            "type" : "conditioner",
            "attributes" : null
        }
    ],
    "clothing" : [
        {
            "type" : "shirt",
            "attributes" : {
                "gender" : ["male" , "female"],
                "size" : ["small", "medium", "large"],
                "style" : ["casual", "dress"]
            }
        },
        {
            "type" : "pants",
            "attributes" : {
                "gender" : ["male" , "female"],
                "size" : ["0", "2", "4"]
            }
        }

    ],
    "engagement" : [
        {
            "type" : "artwork",
            "attributes" : null
        },
        {
            "type" : "games",
            "attributes" : null
        }
    ]

}