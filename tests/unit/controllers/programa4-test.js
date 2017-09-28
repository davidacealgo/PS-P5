import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:programa4', 'Unit | Controller | programa4', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.

test('Divide', function(assert) {
  let controller = this.subject();
  controller.set('text',"1,2,2¬2,3,3");
  controller.send('metodo_dividirLOCMetodos');
  assert.equal(controller.get('division')[0],"1");
  assert.equal(controller.get('division')[1],"1");
});

test('Log', function(assert) {
  let controller = this.subject();
  controller.set('text',"1,18,3¬2,18,3¬3,25,3¬4,31,3¬5,37,3¬6,82,5¬7,82,4¬8,87,4¬9,89,4¬10,230,10¬11,85,3¬12,87,3¬12,558,10");
  controller.send('metodo_dividirLOCMetodos');
  controller.send('metodo_calcularLog');
  assert.equal(controller.get('logaritmos')[10],"3.3440");
});

test('Prom', function(assert) {
  let controller = this.subject();
  controller.set('text',"1,18,3¬2,18,3¬3,25,3¬4,31,3¬5,37,3¬6,82,5¬7,82,4¬8,87,4¬9,89,4¬10,230,10¬11,85,3¬12,87,3¬12,558,10");
  controller.send('metodo_dividirLOCMetodos');
  controller.send('metodo_calcularLog');
  controller.send('metodo_calcularProm');
  assert.equal(controller.get('promedio'),"2.8015");
});

test('Varianza', function(assert) {
  let controller = this.subject();
  controller.set('text',"1,18,3¬2,18,3¬3,25,3¬4,31,3¬5,37,3¬6,82,5¬7,82,4¬8,87,4¬9,89,4¬10,230,10¬11,85,3¬12,87,3¬12,558,10");
  controller.send('metodo_dividirLOCMetodos');
  controller.send('metodo_calcularLog');
  controller.send('metodo_calcularProm');
  controller.send('metodo_calcularVarianza');
  assert.equal(controller.get('varianza'),"0.4362");
});

test('Desviacion', function(assert) {
  let controller = this.subject();
  controller.set('text',"1,18,3¬2,18,3¬3,25,3¬4,31,3¬5,37,3¬6,82,5¬7,82,4¬8,87,4¬9,89,4¬10,230,10¬11,85,3¬12,87,3¬12,558,10");
  controller.send('metodo_dividirLOCMetodos');
  controller.send('metodo_calcularLog');
  controller.send('metodo_calcularProm');
  controller.send('metodo_calcularVarianza');
  controller.send('metodo_calcularDesviacion');
  assert.equal(controller.get('desviacion'),"0.6605");
});

test('RangosLogaritmicos', function(assert) {
  let controller = this.subject();
  controller.set('text',"1,18,3¬2,18,3¬3,25,3¬4,31,3¬5,37,3¬6,82,5¬7,82,4¬8,87,4¬9,89,4¬10,230,10¬11,85,3¬12,87,3¬12,558,10");
  controller.send('metodo_dividirLOCMetodos');
  controller.send('metodo_calcularLog');
  controller.send('metodo_calcularProm');
  controller.send('metodo_calcularVarianza');
  controller.send('metodo_calcularDesviacion');
  controller.send('metodo_cacularRangos');
  assert.equal(controller.get('logVeryShort'),"1.4805");
  assert.equal(controller.get('logShort'),"2.1410");
  assert.equal(controller.get('logMedium'),"2.8015");
  assert.equal(controller.get('logLong'),"3.4620");
  assert.equal(controller.get('logVeryLong'),"4.1225");
});

test('RangosExp', function(assert) {
  let controller = this.subject();
  controller.set('text',"1,18,3¬2,18,3¬3,25,3¬4,31,3¬5,37,3¬6,82,5¬7,82,4¬8,87,4¬9,89,4¬10,230,10¬11,85,3¬12,87,3¬12,558,10");
  controller.send('metodo_dividirLOCMetodos');
  controller.send('metodo_calcularLog');
  controller.send('metodo_calcularProm');
  controller.send('metodo_calcularVarianza');
  controller.send('metodo_calcularDesviacion');
  controller.send('metodo_cacularRangos');
  controller.send('metodo_calcularExpRangos');
  assert.equal(controller.get('veryShort'),"4.3951");
  assert.equal(controller.get('short'),"8.5079");
  assert.equal(controller.get('medium'),"16.4693");
  assert.equal(controller.get('long'),"31.8807");
  assert.equal(controller.get('veryLong'),"61.7133");
});
