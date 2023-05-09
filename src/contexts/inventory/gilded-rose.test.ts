import { GildedRose, Item } from './gilded-rose';

// Helper function to create an item
// This is just to make the tests more readable
const createItem = (name: string, properties: { sellIn: number, quality: number }) => {
  return new Item(name, properties.sellIn, properties.quality);
};

describe('GildedRose class functionality', () => {
  let gildedRose: GildedRose;

  beforeEach(() => {
    gildedRose = new GildedRose();
  });

  describe('General', () => {
    test('Quality should never be negative', () => {
      const item = createItem('Test Item', {
        sellIn: 10,
        quality: 1
      });
      gildedRose.items = [item];

      // Quality should decrease by 1
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(0);

      // Quality should not decrease below 0
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(0);
    });
  });


  describe('Regular Items', () => {
    // Regular items and their calculations goes here
  });

  describe('Aged Brie', () => {
    // Aged Brie and its calculations goes here
  });

  describe('Sulfuras', () => {
    // Sulfuras and its calculations goes here
  });

  describe('Backstage Passes', () => {
    // Backstage passes and its calculations goes here
  });

  describe('Conjured Items', () => {
    // Conjured items and its calculations goes here
  });
});