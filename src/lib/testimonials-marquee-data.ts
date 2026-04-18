/** Sample testimonials for layout — replace with permissioned quotes. */
export type ColumnTestimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const marqueeTestimonials: ColumnTestimonial[] = [
  {
    text: "Ceramic tint on my truck cut cabin heat way down—edges look OEM and they didn’t rush the job.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&h=96&q=80",
    name: "Marcus T.",
    role: "F-150 · Scottsdale",
  },
  {
    text: "Chris walked me through film options without upselling—exactly the straight answers I wanted.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&h=96&q=80",
    name: "Elena V.",
    role: "Model Y · Tempe",
  },
  {
    text: "Shop is clean, crew is professional, and the finish still looks perfect months later.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80",
    name: "James K.",
    role: "BMW · Phoenix",
  },
  {
    text: "PPF consult was honest about what I needed vs. what was overkill—rare in this industry.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=96&h=96&q=80",
    name: "David R.",
    role: "Porsche · Paradise Valley",
  },
  {
    text: "They took time on the dot-matrix and sensors—no bubbles, no cut corners.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&h=96&q=80",
    name: "Priya S.",
    role: "Audi · Mesa",
  },
  {
    text: "Fleet vans match now; drivers actually use the AC less. Worth every penny.",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=96&h=96&q=80",
    name: "Ryan M.",
    role: "Fleet mgr · Chandler",
  },
  {
    text: "Scheduling was easy and they finished when they said they would.",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=96&h=96&q=80",
    name: "Alex P.",
    role: "Wrangler · Glendale",
  },
  {
    text: "Wrap + tint combo looks cohesive—got compliments at Cars & Coffee the same week.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=96&h=96&q=80",
    name: "Nina L.",
    role: "Mustang · Gilbert",
  },
  {
    text: "They explained cure time and care so I didn’t ruin the film the first week.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&h=96&q=80",
    name: "Omar H.",
    role: "Tacoma · Peoria",
  },
];

export const marqueeColumnFirst = marqueeTestimonials.slice(0, 3);
export const marqueeColumnSecond = marqueeTestimonials.slice(3, 6);
export const marqueeColumnThird = marqueeTestimonials.slice(6, 9);
