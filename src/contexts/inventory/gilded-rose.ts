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

  private updateBackstagePasses(_: Item) {
    // update backstage passes
  }

  private updateConjured(_: Item) {
    // update conjured
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

  /*
  private _updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
          }
        }
      }
    }

    return this.items;
  }
  */
}
