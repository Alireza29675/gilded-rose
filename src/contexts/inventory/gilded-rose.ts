import { ItemType } from "./types";
import getItemType from "./utils/getItemType";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      this.updateItem(item)
    }
  }

  private updateItem(item: Item) {
    const type = getItemType(item.name);

    // Sulfuras is a legendary item, therefore we don't need to update anything 🔥
    if (type === ItemType.Sulfuras) return;

    switch (type) {
      case ItemType.AgedBrie:
        this.updateAgedBrie(item);
        break;
      case ItemType.BackstagePasses:
        this.updateBackstagePasses(item);
        break;
      case ItemType.Conjured:
        this.updateConjured(item);
        break;
      default:
        this.updateRegularItem(item);
    }

    // All items except Sulfuras have a sellIn value, which we need to update
    item.sellIn--;

    // Quality can never be negative
    item.quality = Math.max(0, item.quality);

    // Quality can never be more than 50
    item.quality = Math.min(50, item.quality);
  }

  private updateAgedBrie(item: Item) {
    item.quality++;
  }

  private updateBackstagePasses(item: Item) {
    // Quality drops to 0 after the concert
    if (item.sellIn <= 0) {
      item.quality = 0;
    }
    // Quality increases by 3 when there are 5 days or less
    else if (item.sellIn <= 5) {
      item.quality += 3;
    }
    // Quality increases by 2 when there are 10 days or less
    else if (item.sellIn <= 10) {
      item.quality += 2;
    }
    // Quality increases by 1 when there are more than 10 days
    else {
      item.quality++;
    }
  }

  private updateConjured(item: Item) {
    // Quality decreases by 2 before the sellIn date
    if (item.sellIn > 0) {
      item.quality -= 2;
    }
    // Quality decreases by 4 after the sellIn date
    else {
      item.quality -= 4;
    }
  }

  private updateRegularItem(item: Item) {
    // Quality decreases by 1 before the sellIn date
    if (item.sellIn > 0) {
      item.quality--;
    }
    // Quality decreases by 2 after the sellIn date
    else {
      item.quality -= 2;
    }
  }
}
