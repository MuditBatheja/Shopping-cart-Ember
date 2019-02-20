import Controller from '@ember/controller';
import products from '../data/products'

export default Controller.extend({
  
  init() {
    this._super();
    this.set('availableProducts', products);
    this.set('addedProducts', []);
  },
  actions: {
    addOrRemove: function (product,type) {
      let filteredList = [];
      if (type === 'add') {
        filteredList = this.get('availableProducts').filter(val => val.productName !== product.productName);
        this.get('addedProducts').pushObject(product);
        this.set('availableProducts', filteredList);
      } else {
        filteredList = this.get('addedProducts').filter(val => val.productName !== product.productName);
        this.get('availableProducts').pushObject(product);
        this.set('addedProducts', filteredList);
      }
    },
    toggleModal(val){
      this.set('showModal', val);
    }
  }
});
