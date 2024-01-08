import './style.css';

function app() {
  const textareaTitolo = document.querySelector('#inputTitolo');
  const textareaPar = document.querySelector('#inputPar');
  const salvaNota = document.querySelector('#salvaNota');
  const dataCreaNota = document.querySelector('.dataCreaNota');
  const paginaNota = document.querySelector('#paginaNota');
  const paginaHome = document.querySelector('#paginaHome');
  const btnCreaNota = document.querySelector('#btnCreaNota');
  const btnBackHome = document.querySelector('#btnBackHome');
  const footer = document.querySelector('.footer');
  const footer2 = document.querySelector('.footer2');
  const modNota = document.querySelector('#modNota');
  const btnCanc = document.querySelector('#btnCanc');
  const totNote = document.querySelector('#totNote');
  const containerNote = document.querySelector('.containerNote');
  const inputSearch = document.querySelector('#inputSearch');
  const btnAnnulla = document.querySelector('#btnAnnulla');
  const numFilter = document.querySelector('#numFilter');
  const elNumFilter = document.querySelector('#elNumFilter');

  btnCanc.style.display = 'none';
  btnAnnulla.style.display = 'none';
  elNumFilter.style.display = 'none';

  paginaNota.hidden = true;

  let titoloNota = '';
  let contenutoNota = '';

  let counterNote = 0;
  let filtro = [];
  let dati = [];

  btnCreaNota.addEventListener('click', function () {
    const footer = document.querySelector('.footer');
    footer.style.display = '';
    paginaNota.hidden = false;
    paginaHome.hidden = true;
    dataCreaNota.textContent = formatDataNote();
    textareaTitolo.focus();
    inputSearch.value = '';
    containerNote.innerHTML = '';
    dati.forEach((obj) => {
      addHtmlList(obj.contenutoNota, obj.data, obj.id, obj.titoloNota);
    });
  });
  btnBackHome.addEventListener('click', function () {
    paginaNota.hidden = true;
    paginaHome.hidden = false;
    footer2.style.display = 'none';
    btnCanc.style.display = 'none';
    footer.style.display = '';
    textareaTitolo.value = '';
    textareaPar.value = '';
    inputSearch.value = '';
    containerNote.innerHTML = '';
    dati.forEach((obj) => {
      addHtmlList(obj.contenutoNota, obj.data, obj.id, obj.titoloNota);
    });
    containerNote.style.display = '';
    btnAnnulla.style.display = 'none';
    elNumFilter.style.display = 'none';
    filtro = [];
    numFilter.textContent = filtro.length;
  });

  //logic search-----------------------------------------------------

  inputSearch.addEventListener('focus', () => {
    if (inputSearch.value === '') {
      containerNote.innerHTML = '';
      containerNote.style.display = 'none';
    }
    btnAnnulla.style.display = '';
    if (btnAnnulla.style.display === '') {
      elNumFilter.style.display = '';
    }
  });

  inputSearch.addEventListener('keyup', (e) => {
    let target = inputSearch.value;
    console.log(target);
    containerNote.style.display = '';
    filtro = dati.filter((obj) => {
      return obj.titoloNota.includes(target);
    });
    if (inputSearch.value === '' || filtro.length === 0) {
      console.log('vvuoto');
      containerNote.style.display = 'none';
      if (btnAnnulla.style.display === '') {
        numFilter.textContent = 0;
      }
    } else {
      console.log(filtro);
      containerNote.innerHTML = '';
      if (btnAnnulla.style.display === '') {
        numFilter.textContent = filtro.length;
      }
      filtro.forEach((obj) => {
        addHtmlList(obj.contenutoNota, obj.data, obj.id, obj.titoloNota);
      });
    }
  });

  btnAnnulla.addEventListener('click', () => {
    filtro = [];
    numFilter.textContent = filtro.length;
    containerNote.style.display = '';
    containerNote.innerHTML = '';
    dati.forEach((obj) => {
      addHtmlList(obj.contenutoNota, obj.data, obj.id, obj.titoloNota);
    });
    inputSearch.value = '';
    btnAnnulla.style.display = 'none';

    elNumFilter.style.display = 'none';
  });

  //logic search-----------------------------------------------------

  if (dati.length === 0) {
    containerNote.style.display = 'none';
  } else {
    containerNote.style.display = '';
  }

  function formatDataNote() {
    let data = new Date();
    let giorno = data.getDate();
    let meseNun = data.getMonth();
    switch (meseNun) {
      case 0:
        meseNun = 'Gennaio';
        break;
      case 1:
        meseNun = 'Febbraio';
        break;
      case 2:
        meseNun = 'Marzo';
        break;
      case 3:
        meseNun = 'Aprile';
        break;
      case 4:
        meseNun = 'Maggio';
        break;
      case 5:
        meseNun = 'Giugno';
        break;
      case 6:
        meseNun = 'Luglio';
        break;
      case 7:
        meseNun = 'Agosto';
        break;
      case 8:
        meseNun = 'Settembre';
        break;
      case 9:
        meseNun = 'Ottobre';
        break;
      case 10:
        meseNun = 'Novembre';
        break;
      case 11:
        meseNun = 'Dicembre';
        break;

      default:
        break;
    }
    let anno = data.getFullYear();
    let ora = data.getHours();
    let minuti = data.getMinutes();
    if (minuti < 10) {
      minuti = `0${minuti}`;
    }

    const result = `${giorno} ${meseNun} ${anno}, ${ora}:${minuti}`;
    return result;
  }
  function formatDataNoteAnteprima() {
    let data = new Date();
    let giorno = data.getDate();
    let meseNun = data.getMonth();
    switch (meseNun) {
      case 0:
        meseNun = '01';
        break;
      case 1:
        meseNun = '02';
        break;
      case 2:
        meseNun = '03';
        break;
      case 3:
        meseNun = '04';
        break;
      case 4:
        meseNun = '05';
        break;
      case 5:
        meseNun = '06';
        break;
      case 6:
        meseNun = '07';
        break;
      case 7:
        meseNun = '08';
        break;
      case 8:
        meseNun = '09';
        break;
      case 9:
        meseNun = '10';
        break;
      case 10:
        meseNun = '11';
        break;
      case 11:
        meseNun = '12';
        break;

      default:
        break;
    }
    if (giorno < 10) {
      giorno = `0${giorno}`;
    }
    let anno = String(data.getFullYear()).slice(2);

    const result = `${giorno}/${meseNun}/${anno}`;
    return result;
  }

  //---------------------------------------------------
  function eventiInput() {
    function autoSizeTextarea(el) {
      const initialHeight = el.style.height;
      el.style.height = 'auto';
      el.style.height = el.scrollHeight + 'px'; // Imposta l'altezza al valore di scrollHeight
      if (parseInt(el.style.height) < parseInt(initialHeight)) {
        el.style.height = initialHeight + 'px';
      }
    }
    textareaTitolo.addEventListener('blur', function () {
      textareaTitolo.value = textareaTitolo.value.replace(/\n\s*\n/g, '');
      autoSizeTextarea(textareaTitolo);
    });
    textareaTitolo.addEventListener('keyup', function () {
      titoloNota =
        textareaTitolo.value.slice(
          0,
          textareaTitolo.value.indexOf('\n\n') + 1
        ) || textareaTitolo.value;
      if (textareaTitolo.value.includes('\n\n')) {
        textareaPar.focus();
      }
    });
    textareaTitolo.addEventListener('input', function () {
      autoSizeTextarea(this);
    });
    textareaPar.addEventListener('input', function () {
      autoSizeTextarea(this);
    });
    textareaPar.addEventListener('keyup', function (e) {
      contenutoNota = textareaPar.value;
      if (e.key === 'Backspace' && textareaPar.value === '') {
        textareaTitolo.focus();
      }
    });
  }
  eventiInput();

  //---------------------------------------------------

  //logica --- modNota

  function visualizzaNota(id) {
    const corpo = document.querySelector('.corpo');

    corpo.id = id;
    footer2.style.display = '';
    footer.style.display = 'none';
    let datoScelto = dati.find((obj) => {
      return obj.id == id;
    });
    btnCanc.style.display = '';
    paginaNota.hidden = false;
    paginaHome.hidden = true;
    textareaTitolo.value = datoScelto.titoloNota;
    textareaPar.value = datoScelto.contenutoNota;
    dataCreaNota.textContent = datoScelto.dataInterno;
  }

  function addNota() {
    if (textareaTitolo.value.startsWith('\n')) {
      console.log('inizia con un a capo');
      textareaTitolo.value = textareaTitolo.value.slice(1);
    }
    if (textareaTitolo.value.endsWith('\n')) {
      console.log('finisce con un a capo');
      textareaTitolo.value = textareaTitolo.value.slice(
        0,
        textareaTitolo.value.length - 1
      );
    }
    if (textareaPar.value.startsWith('\n')) {
      console.log('inizia con un a capo');
      textareaPar.value = textareaPar.value.slice(1);
    }

    dati = [
      ...dati,
      {
        id: counterNote,
        titoloNota: textareaTitolo.value,
        contenutoNota: textareaPar.value,
        data: formatDataNoteAnteprima(),
        dataInterno: formatDataNote(),
      },
    ];
    counterNote++;
    console.log(dati);
  }

  function modificaNota(id) {
    if (textareaTitolo.value.startsWith('\n')) {
      console.log('inizia con un a capo');
      textareaTitolo.value = textareaTitolo.value.slice(1);
    }
    if (textareaTitolo.value.endsWith('\n')) {
      console.log('finisce con un a capo');
      textareaTitolo.value = textareaTitolo.value.slice(
        0,
        textareaTitolo.value.length - 1
      );
    }
    if (textareaPar.value.startsWith('\n')) {
      console.log('inizia con un a capo');
      textareaPar.value = textareaPar.value.slice(1);
    }
    dati = dati.map((obj) => {
      if (obj.id == id) {
        return {
          ...obj,
          titoloNota: textareaTitolo.value,
          contenutoNota: textareaPar.value,
          data: formatDataNoteAnteprima(),
          dataInterno: formatDataNote(),
        };
      } else {
        return obj;
      }
    });
    console.log(dati);
  }

  function cancNota(id) {
    dati = dati.filter((obj) => {
      return obj.id != id;
    });
  }

  function addHtmlList(testo, data, id, titolo) {
    const containerNote = document.querySelector('.containerNote');
    const divNota = document.createElement('div');
    divNota.id = id;
    divNota.classList.add('nota');
    containerNote.prepend(divNota);
    const titoloH3 = document.createElement('h3');
    titoloH3.textContent = titolo;
    titoloH3.classList.add('titoloNota');
    const spanData = document.createElement('span');
    spanData.classList.add('data');
    spanData.textContent = data;
    const spanContent = document.createElement('span');
    spanContent.classList.add('previewContenuto');
    spanContent.textContent = testo;
    divNota.append(titoloH3);
    divNota.append(spanData);
    divNota.append(spanContent);
    divNota.addEventListener('click', () => {
      visualizzaNota(divNota.id);
    });
  }

  salvaNota.addEventListener('click', () => {
    paginaNota.hidden = true;
    paginaHome.hidden = false;

    addNota();
    textareaTitolo.value = '';
    textareaPar.value = '';
    const containerNote = document.querySelector('.containerNote');
    containerNote.innerHTML = '';

    dati.forEach((obj) => {
      addHtmlList(obj.contenutoNota, obj.data, obj.id, obj.titoloNota);
    });
    titoloNota = '';
    contenutoNota = '';
    totNote.textContent = dati.length;
    if (dati.length === 0) {
      containerNote.style.display = 'none';
    } else {
      containerNote.style.display = '';
    }
    btnAnnulla.style.display = 'none';
    elNumFilter.style.display = 'none';
    filtro = [];
    numFilter.textContent = filtro.length;
  });

  modNota.addEventListener('click', function () {
    const corpo = document.querySelector('.corpo');

    paginaNota.hidden = true;
    paginaHome.hidden = false;
    footer2.style.display = 'none';
    footer.style.display = '';
    btnCanc.style.display = 'none';

    modificaNota(corpo.id);
    textareaTitolo.value = '';
    textareaPar.value = '';
    const containerNote = document.querySelector('.containerNote');
    containerNote.innerHTML = '';

    dati.forEach((obj) => {
      addHtmlList(obj.contenutoNota, obj.data, obj.id, obj.titoloNota);
    });
    titoloNota = '';
    contenutoNota = '';

    totNote.textContent = dati.length;
    if (dati.length === 0) {
      containerNote.style.display = 'none';
    } else {
      containerNote.style.display = '';
    }

    btnAnnulla.style.display = 'none';
    elNumFilter.style.display = 'none';
    filtro = [];
    numFilter.textContent = filtro.length;
    inputSearch.value = '';
  });
  btnCanc.addEventListener('click', function () {
    console.log('cancello');
    const corpo = document.querySelector('.corpo');

    paginaNota.hidden = true;
    paginaHome.hidden = false;
    footer2.style.display = 'none';
    footer.style.display = '';
    btnCanc.style.display = 'none';

    cancNota(corpo.id);
    textareaTitolo.value = '';
    textareaPar.value = '';
    const containerNote = document.querySelector('.containerNote');
    containerNote.innerHTML = '';
    dati.forEach((obj) => {
      addHtmlList(obj.contenutoNota, obj.data, obj.id, obj.titoloNota);
    });
    titoloNota = '';
    contenutoNota = '';

    totNote.textContent = dati.length;
    console.log(dati);
    if (dati.length === 0) {
      containerNote.style.display = 'none';
    } else {
      containerNote.style.display = '';
    }
    btnAnnulla.style.display = 'none';
    elNumFilter.style.display = 'none';
    filtro = [];
    numFilter.textContent = filtro.length;
    inputSearch.value = '';
  });
}
app();
