const db = require("../config/connection");
const { User, Social, Review } = require("../models");

/*
  To seed data:

  1. Import your model
  2. Create an array of data with the variable name seedData
  3. Uncomment the code above and replace MODEL with your imported model

*/

const userSeedData = [
  {
    email: "mhalder@email.com",
    display_name: "mhalder",
    password: "password",
    age: "24",
    location_state: "MN",
    gender_identity: "Male",
    profile_pic: "https://res.cloudinary.com/table-talk/image/upload/v1702422734/table-talk/profile.png",
    followers: [],
    following: [],
    social_posts: [],
    reviews: [],
  },
  {
    email: "bnestingen@email.com",
    display_name: "bnestingen",
    password: "password",
    age: "24",
    location_state: "N/A",
    gender_identity: "N/A",
    profile_pic: "https://res.cloudinary.com/table-talk/image/upload/v1702422734/table-talk/profile.png",
    followers: [],
    following: [],
    social_posts: [],
    reviews: [],
  },
  {
    email: "vperez@email.com",
    display_name: "vperez",
    password: "password",
    age: "24",
    location_state: "N/A",
    gender_identity: "N/A",
    profile_pic: "https://res.cloudinary.com/table-talk/image/upload/v1702422734/table-talk/profile.png",
    followers: [],
    following: [],
    social_posts: [],
    reviews: [],
  },
  {
    email: "slee@email.com",
    display_name: "slee",
    password: "password",
    age: "24",
    location_state: "N/A",
    gender_identity: "N/A",
    profile_pic: "https://res.cloudinary.com/table-talk/image/upload/v1702422734/table-talk/profile.png",
    followers: [],
    following: [],
    social_posts: [],
    reviews: [],
  },

];

const commentSeedData = [
  {
    comment_body: "Cool!",
    creator_id: ""
  },
  {
    comment_body: "Not Cool!",
    creator_id: ""
  },
  {
    comment_body: "Kinda Cool!",
    creator_id: ""
  },
  {
    comment_body: "Hot!",
    creator_id: ""
  },
];

const socialSeedData = [
  {
    photo_id: "https://res.cloudinary.com/table-talk/image/upload/v1702159868/table-talk/default.png",
    description: "Eating pancakes!",
    creator_id: "",
    liked_users: [],
    comments: [],
  },
  {
    photo_id: "https://res.cloudinary.com/table-talk/image/upload/v1702159868/table-talk/default.png",
    description: "Eating pizza!",
    creator_id: "",
    liked_users: [],
    comments: [],
  },
  {
    photo_id: "https://res.cloudinary.com/table-talk/image/upload/v1702159868/table-talk/default.png",
    description: "Eating salmon!",
    creator_id: "",
    liked_users: [],
    comments: [],
  },
  {
    photo_id: "https://res.cloudinary.com/table-talk/image/upload/v1702159868/table-talk/default.png",
    description: "Eating french toast!",
    creator_id: "",
    liked_users: [],
    comments: [],
  },

];

const reviewSeedData = [
  {
    photo_id: "https://res.cloudinary.com/table-talk/image/upload/v1702159868/table-talk/default.png",
    description: "The soup was good!",
    restaurant_name: "Local Soup",
    restaurant_city: "Mankato",
    is_recommended: true,
    creator_id: "",
    liked_users: [],
    comments: [],
  },
  {
    photo_id: "https://res.cloudinary.com/table-talk/image/upload/v1702159868/table-talk/default.png",
    description: "The burger was good!",
    restaurant_name: "Local Burger",
    restaurant_city: "Minneapolis",
    is_recommended: true,
    creator_id: "",
    liked_users: [],
    comments: [],
  },
  {
    photo_id: "https://res.cloudinary.com/table-talk/image/upload/v1702159868/table-talk/default.png",
    description: "The pasta was good!",
    restaurant_name: "Local Pasta",
    restaurant_city: "Des Moines",
    is_recommended: true,
    creator_id: "",
    liked_users: [],
    comments: [],
  },
  {
    photo_id: "https://res.cloudinary.com/table-talk/image/upload/v1702159868/table-talk/default.png",
    description: "The ice cream was good!",
    restaurant_name: "Local Ice Cream",
    restaurant_city: "San Diego",
    is_recommended: true,
    creator_id: "",
    liked_users: [],
    comments: [],
  },
];





db.on('error', (err) => err);

db.once('open', async () => {
  console.log('connected');

  // Delete the collections if they exist
  let userCheck = await db.db.listCollections({ name: 'users' }).toArray();

  if (userCheck.length) {
    await db.dropCollection('users');
  }

  let socialCheck = await db.db.listCollections({ name: 'socials' }).toArray();

  if (socialCheck.length) {
    await db.dropCollection('socials');
  }

  let reviewCheck = await db.db.listCollections({ name: 'reviews' }).toArray();

  if (reviewCheck.length) {
    await db.dropCollection('reviews');
  }


  // Add the seed users to the db
  const newUsers = await User.create(userSeedData);


  // Add a creator_id to each social and adds socials to the db
  for (var i = 0; i < commentSeedData.length; i++) {
    commentSeedData[i].creator_id = newUsers[i]._id;
  }


  // Add a creator_id to each social and adds socials to the db
  for (var i = 0; i < socialSeedData.length; i++) {
    socialSeedData[i].creator_id = newUsers[i]._id;
    socialSeedData[i].comments = commentSeedData;
  }


  socialSeedData.forEach(post => {
    newUsers.forEach(user => {
      if (post.creator_id !== user._id) {
        post.liked_users.push(user._id);
      }
    })
  })

  const newSocials = await Social.create(socialSeedData);




  // Add a creator_id to each review and adds reviews to the db
  for (var i = 0; i < reviewSeedData.length; i++) {
    reviewSeedData[i].creator_id = newUsers[i]._id;
    reviewSeedData[i].comments = commentSeedData;
  }

  reviewSeedData.forEach(post => {
    newUsers.forEach(user => {
      if (post.creator_id !== user._id) {
        post.liked_users.push(user._id);
      }
    })
  })

  const newReviews = await Review.create(reviewSeedData);



  // Adds user posts, followers, and following to each user

  const userObjIds = newUsers.map(user => {
    return user._id;
  })


  newUsers.forEach(user => {
    userObjIds.forEach(id => {
      if (id !== user._id) {
        user.followers.push(id);
        user.following.push(id);
      }
    })

    newSocials.forEach(post => {
      if (post.creator_id === user._id) {
        user.social_posts.push(post._id)
      }
    })

    newReviews.forEach(post => {
      if (post.creator_id === user._id) {
        user.reviews.push(post._id)
      }
    })
  })

  for (var i = 0; i < newUsers.length; i++) {
    const userUpdate = await User.findOneAndUpdate({ _id: newUsers[i]._id },
      {
        $push: {
          followers: newUsers[i].followers,
          following: newUsers[i].following,
          social_posts: newUsers[i].social_posts,
          reviews: newUsers[i].reviews
        }
      },
      {
        new: true
      }
    )
  }



  console.info('Seeding complete!');
  process.exit(0);
});


