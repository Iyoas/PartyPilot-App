import { NextResponse } from "next/server";
import Fuse from "fuse.js";
import products from "@/app/products"; // Zorg ervoor dat dit pad correct is

export async function POST(request) {
  try {
    const { query } = await request.json();
    const lowercaseQuery = query.toLowerCase();

    // Synoniemen woordenboek
    const synonymDictionary = {
      playstation: ["console", "ps", "sony"],
      xbox: [
        "xbox",
        "xbox one",
        "xbox series x",
        "xbox series s",
        "microsoft",
        "console",
      ],
      refrigerator: ["fridge", "freezer"],
      television: [
        "led",
        "tv",
        "4k",
        "8k",
        "oled",
        "smart tv",
        "samsung",
        "lg",
        "sony",
      ],
    };

    const matchingKeywords = Object.keys(synonymDictionary).filter(key => {
      return synonymDictionary[key].some(synonym => {
        return lowercaseQuery.includes(synonym);
      });
    });

    // Configureer Fuse.js
    const fuse = new Fuse(products, {
      keys: ["title"],
      includeScore: true,
      threshold: 0.4,
    });

    // Zoek naar overeenkomsten
    const searchResults = matchingKeywords.flatMap(keyword => fuse.search(keyword));
    const filteredResults = searchResults.map(result => result.item);

    return NextResponse.json({
      success: true,
      results: filteredResults,
      message: "Here are your search results",
    });
  } catch (error) {
    console.error(error); // Log de fout voor debugging
    return NextResponse.json({
      message: "Something went wrong",
    });
  }
}
