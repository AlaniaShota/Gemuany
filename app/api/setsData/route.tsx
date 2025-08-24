export async function GET() {
  const data = [
    {
      id: 18,
      about:
        "We pride ourselves on using only the freshest, locally sourced ingredients. From our grass-fed beef to our handcrafted buns, every component is selected with quality in mind.",
      title: "Locally Sourced Ingredients :",
      img: "/sets/image (11).png",
      btn: "Read more",
    },
    {
      id: 28,
      about:
        "At Gemuany, we fuse the bold, savory flavors of Megrelian spices with international burger-making techniques. Our menu includes classic options as well as innovative, flavorful twists that you won’t find anywhere else.",
      title: "Megrelian Flavors, International Inspiration :",
      img: "/sets/image (12).png",
      btn: "Read more",
    },
    {
      id: 38,
      about:
        "Our burgers are a reflection of our dedication to culinary craftsmanship. We don’t believe in shortcuts—each patty is hand-pressed, and each sauce is made from scratch to ensure you get the best possible flavor.",
      title: "Craftsmanship in Every Bite :",
      img: "/sets/image (13).png",
      btn: "Read more",
    },
    {
      id: 48,
      about:
        "We pride ourselves on using only the freshest, locally sourced ingredients. From our grass-fed beef to our handcrafted buns, every component is selected with quality in mind.",
      title: "Locally Sourced Ingredients :",
      img: "/sets/image (11).png",
      btn: "Read more",
    },
    {
      id: 58,
      about:
        "At Gemuany, we fuse the bold, savory flavors of Megrelian spices with international burger-making techniques. Our menu includes classic options as well as innovative, flavorful twists that you won’t find anywhere else.",
      title: "Megrelian Flavors, International Inspiration :",
      img: "/sets/image (12).png",
      btn: "Read more",
    },
    {
      id: 68,
      about:
        "Our burgers are a reflection of our dedication to culinary craftsmanship. We don’t believe in shortcuts—each patty is hand-pressed, and each sauce is made from scratch to ensure you get the best possible flavor.",
      title: "Craftsmanship in Every Bite :",
      img: "/sets/image (13).png",
      btn: "Read more",
    },
  ];
  return new Response(JSON.stringify(data));
}
