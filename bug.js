```javascript
// Assuming you have a MongoDB collection named 'myCollection'

db.myCollection.aggregate([
  {
    $match: {
      // some query condition
    }
  },
  {
    $group: {
      _id: "$someField", // grouping field
      count: { $sum: 1 }
    }
  },
  {
    $sort: {
      count: -1
    }
  },
  {
    $limit: 10
  }
]);
```