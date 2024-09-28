import Api from '@/api/index';

class Receptionists extends Api {


  receptionists = () => this.rest('/receptionists/list.json');


  remove = ( id ) => this.rest('/receptionists/delete-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify({ id }),
  }).then(() => id) // then - заглушка, пока метод ничего не возвращает


  add = ( receptionist ) => this.rest('receptionists/add-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(receptionist),
  }).then(() => ({...receptionist, id: new Date().getTime()})) // then - заглушка, пока метод ничего не возвращает


  update = ( receptionist ) => this.rest('receptionists/update-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(receptionist),
  }).then(() => receptionist) // then - заглушка, пока метод ничего не возвращает

}

export default new Receptionists();
