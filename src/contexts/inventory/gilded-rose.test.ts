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
    test('updateQuality() should decrease sellIn by 1', () => {
      const item = createItem('Test Item', {
        sellIn: 10,
        quality: 20
      });
      gildedRose.items = [item];

      gildedRose.updateQuality();

      expect(gildedRose.items[0].sellIn).toBe(9);
    });

    test('updateQuality() should update multiple items', () => {
      const item1 = createItem('Test Item 1', {
        sellIn: 10,
        quality: 20
      });
      const item2 = createItem('Test Item 2', {
        sellIn: 10,
        quality: 20
      });
      gildedRose.items = [item1, item2];

      gildedRose.updateQuality();

      // Both items should have their sellIn decreased by 1 and quality by 1
      expect(gildedRose.items[0].sellIn).toBe(9);
      expect(gildedRose.items[1].sellIn).toBe(9);
      expect(gildedRose.items[0].quality).toBe(19);
      expect(gildedRose.items[1].quality).toBe(19);
    })
  });


  describe('Regular Items', () => {
    test('Quality decreases by 1 before the sellIn date', () => {
      const item = createItem('Regular Item', {
        sellIn: 10,
        quality: 20
      });
      gildedRose.items = [item];

      gildedRose.updateQuality();

      expect(item.sellIn).toBe(9);
      expect(item.quality).toBe(19);
    });

    test('Quality decreases by 2 after the sellIn date', () => {
      const item = createItem('Regular Item', {
        sellIn: 0,
        quality: 20
      });
      gildedRose.items = [item];
      gildedRose.updateQuality();

      expect(item.sellIn).toBe(-1);
      expect(item.quality).toBe(18);
    });

    test('Quality should never be negative', () => {
      const item = createItem('Regular Item', {
        sellIn: 10,
        quality: 1
      });
      gildedRose.items = [item];

      // Quality should decrease by 1 => 0
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(0);

      // Quality should not decrease below 0 => still 0
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(0);
    });
  });

  describe('Aged Brie', () => {
    test('Aged Brie should increase in Quality as it gets older', () => {
      const agedBrie = createItem('Aged Brie', {
        sellIn: 10,
        quality: 20
      });
      gildedRose.items = [agedBrie];

      gildedRose.updateQuality();

      expect(agedBrie.sellIn).toBe(9);
      expect(agedBrie.quality).toBe(21);
    });

    test('Aged Brie Quality should not increase above 50', () => {
      const agedBrie = createItem('Aged Brie', {
        sellIn: 10,
        quality: 50
      });
      gildedRose.items = [agedBrie];

      gildedRose.updateQuality();

      expect(agedBrie.sellIn).toBe(9);
      expect(agedBrie.quality).toBe(50);
    });
  });

  describe('Sulfuras', () => {
    it('should not change sellIn and quality', () => {
      const sulfuras = createItem('Sulfuras, Hand of Ragnaros', {
        sellIn: 5,
        quality: 80
      });
      gildedRose.items = [sulfuras];

      gildedRose.updateQuality();

      expect(sulfuras.sellIn).toBe(5);
      expect(sulfuras.quality).toBe(80);
    });

    it('should not change sellIn and quality after multiple days', () => {
      const sulfuras = createItem('Sulfuras, Hand of Ragnaros', {
        sellIn: 7,
        quality: 80
      });
      gildedRose.items = [sulfuras];

      for (let i = 0; i < 3; i++) {
        gildedRose.updateQuality();
      }

      expect(sulfuras.sellIn).toBe(7);
      expect(sulfuras.quality).toBe(80);
    });
  });

  describe('Backstage Passes', () => {
    test('Quality increases by 1 when there are more than 10 days left', () => {
      const passes = createItem('Backstage passes to a TAFKAL80ETC concert', {
        sellIn: 11,
        quality: 20
      });
      gildedRose.items = [passes];

      gildedRose.updateQuality();

      expect(passes.quality).toBe(21);
    });

    test('Quality increases by 2 when there are 10 days or less', () => {
      const passes = createItem('Backstage passes to a TAFKAL80ETC concert', {
        sellIn: 10,
        quality: 20
      });
      gildedRose.items = [passes];

      gildedRose.updateQuality();

      expect(passes.quality).toBe(22);
    });

    test('Quality increases by 3 when there are 5 days or less', () => {
      const passes = createItem('Backstage passes to a TAFKAL80ETC concert', {
        sellIn: 5,
        quality: 20
      });
      gildedRose.items = [passes];

      gildedRose.updateQuality();

      expect(passes.quality).toBe(23);
    });

    test('Quality drops to 0 after the concert', () => {
      const passes = createItem('Backstage passes to a TAFKAL80ETC concert', {
        sellIn: 0,
        quality: 20
      });
      gildedRose.items = [passes];

      gildedRose.updateQuality();

      expect(passes.quality).toBe(0);
    });

    test('Quality never goes above 50', () => {
      const passes = createItem('Backstage passes to a TAFKAL80ETC concert', {
        sellIn: 5,
        quality: 49
      });
      gildedRose.items = [passes];

      gildedRose.updateQuality();

      // Quality should be increased by 3 (52), but it never goes above 50
      expect(passes.quality).toBe(50);
    });
  });

  describe.skip('Conjured Items', () => {
    it('should decrease quality by 2 before the sellIn date', () => {
      const conjured = createItem('Conjured', {
        sellIn: 5,
        quality: 10
      });
      gildedRose.items = [conjured];

      gildedRose.updateQuality();

      expect(conjured.quality).toBe(8);
    });

    it('should decrease quality by 4 after the sellIn date', () => {
      const conjured = createItem('Conjured', {
        sellIn: 0,
        quality: 10
      });
      gildedRose.items = [conjured];

      gildedRose.updateQuality();

      expect(conjured.quality).toBe(6);
    });

    it('should not decrease quality below 0', () => {
      const conjured = createItem('Conjured', {
        sellIn: 5,
        quality: 1
      });
      gildedRose.items = [conjured];

      gildedRose.updateQuality();

      expect(conjured.quality).toBe(0);
    });
  });
});