import { ItemType } from "@/types";
import oneOf from "@/utils/oneOf";

const getRandomNameBasedOnType = (type: ItemType) => {
  switch (type) {
    case ItemType.AgedBrie:
      return "Aged Brie";
    case ItemType.BackstagePasses: {
      // Ticket number is a random string of 8 characters
      const ticketNumber = Math.random().toString(36).substring(2, 10);
      return `Backstage passes to a ${ticketNumber} concert`;
    }
    case ItemType.Conjured:
      return `Conjured ${oneOf(["Ring", "Necklace", "Amulet", "Pendant"])}`;
    case ItemType.Sulfuras:
      return "Sulfuras, Hand of Ragnaros";
    default:
      return oneOf(["Apple", "Helmet", "Sword", "Shield", "Potion", "Ring", "Necklace", "Amulet", "Pendant"]);
  }
};

const getRandomQualityBasedOnType = (type: ItemType) => {
  switch (type) {
    case ItemType.AgedBrie:
      return Math.floor(Math.random() * 30) + 1;
    case ItemType.BackstagePasses:
      return Math.floor(Math.random() * 20) + 1;
    case ItemType.Conjured:
      return Math.floor(Math.random() * 30) + 1;
    case ItemType.Sulfuras:
      return 80;
    default:
      return Math.floor(Math.random() * 50) + 1;
  }
};

const getRandomSellInBasedOnType = (type: ItemType) => {
  switch (type) {
    case ItemType.Sulfuras:
      return 0;
    default:
      return Math.floor(Math.random() * 20) + 5;
  }
};

const getRandomItem = () => {
  const randomType = oneOf(Object.values(ItemType));
  const name = getRandomNameBasedOnType(randomType);
  const quality = getRandomQualityBasedOnType(randomType);
  const sellIn = getRandomSellInBasedOnType(randomType);

  return {
    name,
    quality,
    sellIn,
  };
}

export default getRandomItem;