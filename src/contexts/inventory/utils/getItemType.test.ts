import getItemType from './getItemType';
import { ItemType } from '../types';

describe('getItemType', () => {
  it('should return AgedBrie for Aged Brie items', () => {
    expect(getItemType('Aged Brie')).toBe(ItemType.AgedBrie);
    expect(getItemType('AGED BRIE')).toBe(ItemType.AgedBrie);
    expect(getItemType('Amazing Aged Brie')).toBe(ItemType.AgedBrie);
  });

  it('should return Sulfuras for Sulfuras items', () => {
    expect(getItemType('Sulfuras, Hand of Ragnaros')).toBe(ItemType.Sulfuras);
    expect(getItemType('SULFURAS')).toBe(ItemType.Sulfuras);
    expect(getItemType('Legendary Sulfuras')).toBe(ItemType.Sulfuras);
  });

  it('should return BackstagePasses for Backstage Passes items', () => {
    expect(getItemType('Backstage passes to a TAFKAL80ETC concert')).toBe(ItemType.BackstagePasses);
    expect(getItemType('BACKSTAGE PASSES')).toBe(ItemType.BackstagePasses);
    expect(getItemType('Special Backstage Passes')).toBe(ItemType.BackstagePasses);
  });

  it('should return Conjured for Conjured items', () => {
    expect(getItemType('Conjured Mana Cake')).toBe(ItemType.Conjured);
    expect(getItemType('CONJURED')).toBe(ItemType.Conjured);
    expect(getItemType('Conjured Chocolate Cake')).toBe(ItemType.Conjured);
  });

  it('should return Regular for other items', () => {
    expect(getItemType('Regular Item')).toBe(ItemType.Regular);
    expect(getItemType('Chocolate')).toBe(ItemType.Regular);
    expect(getItemType('Awesome Item')).toBe(ItemType.Regular);
  });
});
