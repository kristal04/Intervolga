import Api from '@/api/index';

class Products extends Api {

  products = () => this.rest('/products/list.json');

  remove = ( id ) => this.rest('/products/delete-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify({ id }),
  }).then(() => id) // then - заглушка, пока метод ничего не возвращает

  add = ( product ) => this.rest('/products/add-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(product),
  }).then(() => ({...product, id: new Date().getTime()})) // then - заглушка, пока метод ничего не возвращает

  update = ( product ) => this.rest('/products/update-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(product),
  }).then(() => product) // then - заглушка, пока метод ничего не возвращает

}

export default new Products();
