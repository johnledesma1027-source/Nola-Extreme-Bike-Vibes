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
    video: "assets/videos/hero.mp4", // Canal Street group ride, no sound
    poster: "assets/images/hero.jpg", // cropped from the flyer; shows until the video starts
  },

  // Videos from the Facebook feed. A local `file` plays right on the page
  // when tapped (`poster` is the still shown before it plays). Without a
  // file, a `facebook` link (open the video, Share > Copy link) opens the
  // video on Facebook instead.
  videos: [
    { title: "Lighting up the French Quarter", file: "assets/videos/ride-quarter.mp4", poster: "assets/images/ride-quarter.jpg", facebook: "" },
    { title: "Rolling deep down Canal Street", file: "assets/videos/ride-canal.mp4", poster: "assets/images/ride-canal.jpg", facebook: "" },
    { title: "Wheels that glow all night", file: "assets/videos/ride-glow.mp4", poster: "assets/images/ride-glow.jpg", facebook: "" },
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
