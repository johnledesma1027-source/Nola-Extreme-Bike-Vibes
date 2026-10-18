// ============================================================
//  NOLA EXTREME BIKE VIBES: EDIT YOUR CONTENT HERE
//  Everything on the site (prices, videos, contact info) comes
//  from this one file. Change a value, save, refresh the page.
//  Anything marked TODO is a placeholder waiting for real info.
// ============================================================

window.SITE = {
  business: {
    name: "Nola Extreme Bike Vibes",
    tagline: "It's always a vibe when you book these bike rides",
    owner: "Michael Butler",
    phone: "(504) 237-6997", // call or text to book
    email: "", // TODO: e.g. "ride@nolaextremebikevibes.com"
    address: "New Orleans, LA", // no fixed meeting spot
    mapQuery: "New Orleans, LA", // what Google Maps searches for
    facebook: "https://www.facebook.com/share/19n7hZc3R4/",
    instagram: "", // TODO
    tiktok: "", // TODO
    // Where the "Rent now" buttons go. A booking link, a phone link
    // ("tel:5045550123"), a text link ("sms:5045550123") or "#contact".
    bookingUrl: "tel:+15042376997",
  },

  // Background video for the top of the page. Drop an .mp4 into
  // assets/videos/ and put its path here. Short (10-20s), no sound,
  // under ~8 MB works best. Poster image shows while it loads.
  hero: {
    video: "assets/videos/hero.mp4", // TODO: add the file
    poster: "assets/images/hero.jpg", // cropped from the flyer; swap for a real photo
  },

  // Videos from the Facebook feed. Paste the link of each Facebook
  // video (open the video, Share > Copy link) into `facebook`.
  // Or use a local file with `file: "assets/videos/ride1.mp4"`.
  videos: [
    { title: "Ride with Nola Extreme", facebook: "https://www.facebook.com/share/r/1PHxQZ4NYv/", file: "" },
    { title: "Feel the vibes", facebook: "https://www.facebook.com/share/r/18KhmKgEXi/", file: "" },
    { title: "Party on wheels", facebook: "https://www.facebook.com/share/r/1GjZH7xq71/", file: "" },
    { title: "Light up the night", facebook: "https://www.facebook.com/share/r/1CEjxpBgVv/", file: "" },
  ],

  // What's offered. Events and groups only, $25 per rider for any size.
  // Groups of more than 25 get food and drinks included. Rows are [label, value].
  bikes: [
    {
      name: "The Event Ride",
      tag: "Events & groups",
      desc: "Your whole crew on glowing purple light-up cruisers, rolling through New Orleans together. Bring more than 25 riders and the food and drinks are on us.",
      prices: [
        ["Price", "$25 per rider"],
        ["Light-up cruiser", "Included"],
        ["Food & drinks", "Included for groups of more than 25"],
      ],
    },
  ],

  // "Book services for" from the flyer.
  services: [
    { icon: "🎈", name: "Parties" },
    { icon: "💛", name: "Anniversaries" },
    { icon: "💍", name: "Weddings" },
    { icon: "🎓", name: "Alumni parties" },
    { icon: "👨‍👩‍👧‍👦", name: "Reunions" },
    { icon: "✨", name: "And much more" },
  ],

  // Opening hours. Each row is [day, hours].
  hours: [
    ["Any day", "By appointment"],
    ["Price", "$25 per rider"],
  ],
};
