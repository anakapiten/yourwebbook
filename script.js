var beranda = document.getElementById('berandAsvg');
var album = document.getElementById('albuMsvg');
var ekstra = document.getElementById('ekstrAsvg');
var info = document.getElementById('infOsvg');

function beRanda() {
  container.style.height = '50%';
  beranda.style.color = 'black';
  album.style.color = '#808080';
  ekstra.style.color = '#808080';
  info.style.color = '#808080';
  document.getElementById('Hberanda').style.opacity = '1';
  document.getElementById('Halbum').style.opacity = '0';
  document.getElementById('Hekstra').style.opacity = '0';
  document.getElementById('Hinfo').style.opacity = '0';
}

function alBum() {
  // document.getElementById('naVbar').style.bottom = '-20%';
  // document.getElementById('naVbar').style.borderRadius = '0';
  album.style.color = 'black';
  beranda.style.color = '#808080';
  ekstra.style.color = '#808080';
  info.style.color = '#808080';
  document.getElementById('Hberanda').style.opacity = '0';
  document.getElementById('Halbum').style.opacity = '1';
  document.getElementById('Hekstra').style.opacity = '0';
  document.getElementById('Hinfo').style.opacity = '0';
}

function eksTra() {
  container.style.height = '93%';
  ekstra.style.color = 'black';
  beranda.style.color = '#808080';
  album.style.color = '#808080';
  info.style.color = '#808080';
  document.getElementById('Hberanda').style.opacity = '0';
  document.getElementById('Halbum').style.opacity = '0';
  document.getElementById('Hekstra').style.opacity = '1';
  document.getElementById('Hinfo').style.opacity = '0';
}

function inFo() {
  container.style.height = '93%';
  info.style.color = 'black';
  beranda.style.color = '#808080';
  album.style.color = '#808080';
  ekstra.style.color = '#808080';
  document.getElementById('Hberanda').style.opacity = '0';
  document.getElementById('Halbum').style.opacity = '0';
  document.getElementById('Hekstra').style.opacity = '0';
  document.getElementById('Hinfo').style.opacity = '1';
}
