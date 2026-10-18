// ============================================================
//  NOLA EXTREME BIKE VIBES: EDIT YOUR CONTENT HERE
//  Everything on the site (prices, videos, contact info) comes
//  from this one file. Change a value, save, refresh the page.
//  Anything marked TODO is a placeholder waiting for real info.
// ============================================================

window.SITE = {
  business: {
    name: "Nola Extreme Bike Vibes",
    tagline: "Ride Bold. Create Memories.",
    owner: "Michael Butler",
    phone: "(504) 237-6997", // call or text to book
    email: "", // TODO: e.g. "ride@nolaextremebikevibes.com"
    address: "New Orleans, LA", // TODO: pickup address
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
    { title: "Wheelies on the levee", facebook: "", file: "" }, // TODO
    { title: "Second line on two wheels", facebook: "", file: "" }, // TODO
  ],

  // What's offered. Events and groups only (25+ riders), food and drinks
  // included. No hourly rentals. Each row is [label, value].
  bikes: [
    {
      name: "The Event Ride",
      tag: "Groups of 25+",
      desc: "A whole crew on glowing purple light-up cruisers, rolling through New Orleans together. Food and drinks are part of the package.",
      prices: [
        ["Group size", "25+ riders"],
        ["Light-up cruisers", "Included"],
        ["Food", "Included"],
        ["Drinks", "Included"],
        ["Price", "$25 per person"],
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

  // Opening hours. TODO: confirm.
  hours: [
    ["Mon to Thu", "TBD"],
    ["Fri to Sun", "TBD"],
  ],
};
