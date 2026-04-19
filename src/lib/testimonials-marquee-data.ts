/** Yelp-style quotes — names and locations as cited on the listing. */

export type ColumnTestimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

function reviewerAvatar(name: string): string {
  const params = new URLSearchParams({
    name,
    size: "96",
    background: "292524",
    color: "f4f1eb",
    bold: "true",
  });
  return `https://ui-avatars.com/api/?${params.toString()}`;
}

export const marqueeTestimonials: ColumnTestimonial[] = [
  {
    text: "Chris is great to work with, very fair pricing, great work. Extremely happy with the tint",
    image: reviewerAvatar("Esther K."),
    name: "Esther K.",
    role: "Phoenix, AZ",
  },
  {
    text: "Thanks for the quick window visor tint! Nice and fast! Family owned business, Vanessa handles the front desk and I was well taken care of. Competitive pricing and quality tint.",
    image: reviewerAvatar("Tom S."),
    name: "Tom S.",
    role: "Arizona",
  },
  {
    text: "Excellent quality! Will definitely use in the future for any other vehicles we purchase.",
    image: reviewerAvatar("Nick D."),
    name: "Nick D.",
    role: "Scottsdale, AZ",
  },
  {
    text: "Reasonable and effective tinted job! Thanks for helping a friend with her car. She was very happy.",
    image: reviewerAvatar("Scott R."),
    name: "Scott R.",
    role: "Scottsdale, AZ",
  },
  {
    text: "Chris was great. Well informed and easy install at a great price. Would recommend to anyone",
    image: reviewerAvatar("Kim F."),
    name: "Kim F.",
    role: "Phoenix, AZ",
  },
  {
    text: "The quality of work was excellent. My questions were responded to promptly, and all communication was smooth. They even drove me to a nearby coffee shop to wait while the work was done, and picked me up after. I feel confident recommending this business.",
    image: reviewerAvatar("Angie T."),
    name: "Angie T.",
    role: "Lincoln, NE",
  },
  {
    text: "Had a visor put on my F-150, very impressive team and facility. Professional, clean, good pricing, high expertise, and friendly staff.",
    image: reviewerAvatar("Jared L."),
    name: "Jared L.",
    role: "Las Vegas, NV",
  },
  {
    text: "Chris is amazing! He really knows his stuff. I had window tint all around and PPF on the front of my new car. Perfection! I highly recommend him for all things tinting and protective film. Plus he does not rip you off! Thanks, Chris!",
    image: reviewerAvatar("Candace C."),
    name: "Candace C.",
    role: "Philadelphia, PA",
  },
  {
    text: "Had 2 great experiences with this company, will be going back again if and when we need. Would highly recommend. Fast reliable and competitive pricing. This was also fast and easy to work with the owner.",
    image: reviewerAvatar("Emily E."),
    name: "Emily E.",
    role: "Phoenix, AZ",
  },
  {
    text: "Edgar, the owner, tried very hard to help with our tint issue. He kept in touch and responded in a timely manner. I highly recommend this company.",
    image: reviewerAvatar("Robert R."),
    name: "Robert R.",
    role: "San Francisco, CA",
  },
];

/** Three columns: 4 + 3 + 3 cards for balanced marquee height. */
export const marqueeColumnFirst = marqueeTestimonials.slice(0, 4);
export const marqueeColumnSecond = marqueeTestimonials.slice(4, 7);
export const marqueeColumnThird = marqueeTestimonials.slice(7, 10);
