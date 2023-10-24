import renderItem from './renderItem.js';

export default function supRender(arr, sizeItem) {
  arr?.forEach(row => row.forEach(el => el && renderItem(el, sizeItem)));
}
