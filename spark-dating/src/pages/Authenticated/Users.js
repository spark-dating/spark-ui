const users = [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy"
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States"
      },
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117"
      },
      "picture": {
        "large": "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Linda",
        "last": "Hall"
      },
      "location": {
        "street": {
          "number": 1234,
          "name": "Main Street"
        },
        "city": "New York",
        "state": "New York",
        "country": "United States"
      },
      "login": {
        "uuid": "a8e9db9a-8b62-4c1e-a23f-2b8c16a58e78",
        "username": "blueswan567"
      },
      "picture": {
        "large": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3271&q=80"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Sophia",
        "last": "Clark"
      },
      "location": {
        "street": {
          "number": 4567,
          "name": "Park Avenue"
        },
        "city": "Los Angeles",
        "state": "California",
        "country": "United States"
      },
      "login": {
        "uuid": "d5d4e5d6-f9f8-4f7f-aaee-1b1a2b3c4d5e",
        "username": "redrose789"
      },
      "picture": {
        "large": "https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Emily",
        "last": "Taylor"
      },
      "location": {
        "street": {
          "number": 7890,
          "name": "Elm Street"
        },
        "city": "Chicago",
        "state": "Illinois",
        "country": "United States"
      },
      "login": {
        "uuid": "f0e1d2c3-b4a5-6c7d-8e9f-0a1b2c3d4e5f",
        "username": "purpleflower234"
      },
      "picture": {
        "large": "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1344&q=80"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Olivia",
        "last": "Anderson"
      },
      "location": {
        "street": {
          "number": 9876,
          "name": "Cedar Lane"
        },
        "city": "Houston",
        "state": "Texas",
        "country": "United States"
      },
      "login": {
        "uuid": "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
        "username": "yellowbutterfly345"
      },
      "picture": {
        "large": "https://images.unsplash.com/photo-1560087637-bf797bc7796a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Ava",
        "last": "Gonzalez"
      },
      "location": {
        "street": {
          "number": 3456,
          "name": "Sunset Boulevard"
        },
        "city": "Miami",
        "state": "Florida",
        "country": "United States"
      },
      "login": {
        "uuid": "8b7a6c5d-4e3f-2g1h-0i9j-8k7l6m5n4o3p",
        "username": "greensky123"
      },
      "picture": {
        "large": "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Chloe",
        "last": "White"
      },
      "location": {
        "street": {
          "number": 5678,
          "name": "Maple Avenue"
        },
        "city": "Seattle",
        "state": "Washington",
        "country": "United States"
      },
      "login": {
        "uuid": "4c3d2e1f-0a9b-8c7d-6e5f-4a3b2c1d0e",
        "username": "bluebird456"
      },
      "picture": {
        "large": "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Grace",
        "last": "Martin"
      },
      "location": {
        "street": {
          "number": 8765,
          "name": "Oak Street"
        },
        "city": "San Francisco",
        "state": "California",
        "country": "United States"
      },
      "login": {
        "uuid": "3e4f5d6c-7b8a-9i0j-1k2l-3m4n5o6p7q",
        "username": "pinkrose567"
      },
      "picture": {
        "large": "https://images.unsplash.com/photo-1530047198515-516ff90fc4d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Avery",
        "last": "Harris"
      },
      "location": {
        "street": {
          "number": 6543,
          "name": "Pine Street"
        },
        "city": "Boston",
        "state": "Massachusetts",
        "country": "United States"
      },
      "login": {
        "uuid": "0p9o8i7u-6y5t-4r3e-2w1q-0z9x8c7v",
        "username": "orangerose789"
      },
      "picture": {
        "large": "https://images.unsplash.com/photo-1584361853901-dd1904bb7987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Abigail",
        "last": "Lee"
      },
      "location": {
        "street": {
          "number": 4321,
          "name": "Cherry Lane"
        },
        "city": "Denver",
        "state": "Colorado",
        "country": "United States"
      },
      "login": {
        "uuid": "7u8i9o0p-6t5r-4e3w-2q1z-9x8c7v6b",
        "username": "purplebutterfly234"
      },
      "picture": {
        "large": "https://images.unsplash.com/photo-1624309845812-a7c7e12259f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
      }
    }
  ];
  
  export default users;
  