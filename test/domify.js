var assert = require('assert');
var domify = require('../');

suite('domify(HTML)');

test('should convert HTML to DOM elements', function(){
  var el = domify('<p>Hello</p>');
  assert('P' == el.nodeName);
  assert('Hello' == el.textContent);

  var els = domify('<p>one</p><p>two</p><p>three</p>');
  assert('onetwothree' == els.textContent);
});

test('should support body tags', function(){
  var el = domify('<body></body>');
  assert('BODY' == el.nodeName);
});

test('should support body tags with classes', function(){
  var el = domify('<body class="page"></body>');
  assert('BODY' == el.nodeName);
  assert('page' == el.className);
});

test('should support legend tags', function(){
  var el = domify('<legend>Hello</legend>');
  assert('LEGEND' == el.nodeName);
});

test('should support table tags', function(){
  var el = domify('<table></table>');
  assert('TABLE' == el.nodeName);
});

test('should support thead tags', function(){
  var el = domify('<thead></thead>');
  assert('THEAD' == el.nodeName);
});

test('should support tbody tags', function(){
  var el = domify('<tbody></tbody>');
  assert('TBODY' == el.nodeName);
});

test('should support tfoot tags', function(){
  var el = domify('<tfoot></tfoot>');
  assert('TFOOT' == el.nodeName);
});

test('should support caption tags', function(){
  var el = domify('<caption></caption>');
  assert('CAPTION' == el.nodeName);
});

test('should support col tags', function(){
  var el = domify('<col></col>');
  assert('COL' == el.nodeName);
});

test('should support td tags', function(){
  var el = domify('<td></td>');
  assert('TD' == el.nodeName);
});

test('should support th tags', function(){
  var el = domify('<th></th>');
  assert('TH' == el.nodeName);
});

test('should support tr tags', function(){
  var el = domify('<tr></tr>');
  assert('TR' == el.nodeName);
});

test('should support option tags', function(){
  var el = domify('<option></option>');
  assert('OPTION' == el.nodeName);
});

test('should support optgroup tags', function(){
  var el = domify('<optgroup></optgroup>');
  assert('OPTGROUP' == el.nodeName);
});

test('should not set parentElement', function() {
  var el = domify('<p>Hello</p>');
  assert(!el.parentElement);
  assert(!el.parentNode);
});
