import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { User } from './src/js/main.js';

let calculator = new User();

$("form#formOne").submit(function(event) {
  event.preventDefault();
  let name = $("#name").val();
  let age = parseInt($("#age").val());
  let planet = $("input:radio[name=planet]:checked").val();
}