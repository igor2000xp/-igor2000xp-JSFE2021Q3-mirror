import Component from '../framework/component/component';
import { ON_FILTER_CHANGE } from '../framework/state/state';
import { ON_CATEGORY_CHANGE } from '../constants';
import { IDataItem } from '../application/interfacesAndTypes/interfaces';
import { footer } from './common/footer';
import data from '../assets/data';
import PartOfTreesImages from './common/parts-component/parts-trees-images';
import DragAndDropBall from './common/parts-component/drag-and-drop-balls';

export default class ChristmasToysListComponent extends Component {
  // private toyComponentList: Component[];

  private list: IDataItem[] = [];

  private numberCards = 20;

  private numberTrees = 6;

  private numberBackground = 10;

  // private state: AppComponent;

  constructor(parentNode: HTMLElement) {
    super(parentNode);
    this.render();
  }

  init() {
    if (this.state !== null)
      this.state.subscribe(ON_FILTER_CHANGE, this.onFilterUpdate.bind(this));
  }

  async beforeDestroy(): Promise<void> {
    if (this.state !== null)
      this.state.unSubscribe(
        ON_CATEGORY_CHANGE,
        this.onFilterUpdate.bind(this),
      );
  }

  render() {
    console.log('Christmas page');
    let toysFav = '';

    const partOfTreesImages = new PartOfTreesImages(this.numberCards);
    toysFav = partOfTreesImages.render(this.numberCards);

    let numberTrees = '';
    let numberTreesDecorated = '';
    for (let i = 1; i <= this.numberTrees; i++) {
      numberTrees += `<div class="tree menu-item" id="imgTree${i}" ></div>`;
      numberTreesDecorated += `
      <div class="tree-decorate">
          <img src="https://raw.githubusercontent.com/igor2000xp/assets/main/tree/${i}.webp" class="tree-decorate-img" alt="decorate-tree">
       </div>
      `;
    }

    let backgrounds = '';
    for (let i = 1; i <= this.numberBackground; i++) {
      backgrounds += `<div class="bg menu-item" id="numBackground${i}"></div>`;
    }

    const page = document.createElement('section');
    page.classList.add('section-trees');
    page.innerHTML = `
    <div class="trees-left">

    <div class="header-container">      
      <nav class="nav-bar">
        <a class="logo" id="home"></a>
        <a class="switch-main-page" id="toys">Игрушки</a>
        <a class="switch-favorites-page active-link">Ёлка</a>
      </nav>   
    </div>

    <div class="favorites-menu">
      <div class="snow-audio-container menu-container">
        <div class="audio-control menu-item" id="play-audio"></div>
        <div class="snow-control menu-item"></div>
      </div>
      <div class="tree-container menu-container">
        ${numberTrees}
      </div>
      <div class="bg-container menu-container">
      ${backgrounds}
      </div>
      <div class="garland-container menu-container">
        <div class="garland-btns">
          <button
            class="color-btn multicolor-btn"
            data-color="multicolor"
          ></button>
          <button class="color-btn red-btn" data-color="red"></button>
          <button class="color-btn blue-btn" data-color="blue"></button>
          <button class="color-btn yellow-btn" data-color="yellow"></button>
          <button class="color-btn green-btn" data-color="green"></button>
        </div>
        <div class="onoffswitch">
          <input
            type="checkbox"
            name="onoffswitch"
            class="onoffswitch-checkbox"
            id="myonoffswitch"
            checked=""
          />
          <label class="onoffswitch-label" for="myonoffswitch">
            <div class="onoffswitch-inner"></div>
            <div class="onoffswitch-switch"></div>
          </label>
        </div>
      </div>
    </div>
  </div>
  <div class="trees-main" id="trees-main__background">
    <div class="tree-main__container">
      <div class="snowflakes hide"></div>
      <div class="garland-tree-container"></div>
      <map name="tree-map" 
      class="droppable js-map" 
      id="map-drop"
      >
        <area coords="0,700,125,0,250,700"
        shape="poly">
      </map>
      <img
        src="https://raw.githubusercontent.com/igor2000xp/assets/main/tree/1.webp"
        class="main-tree tree-main__img"
        id="img-main-tree"
        usemap="#tree-map"
        alt="tree"
      />
    </div>
  </div>

  <div class="trees-right">

    <div class="header-controls">
      <div class="select"><span>0</span></div>
    </div>

    <div class="favorites-aside">
      <div class="favorites-container favorite-right">
      ${toysFav}
      </div>
    </div>

    <div class="favorites-decorate">
      <div class="favorites-decorate-container">
        ${numberTreesDecorated}
      </div>
    </div>

  </div>

    `;

    document.body.append(page);

    const footerConst = document.createElement('footer');
    footerConst.classList.add('footer');
    footerConst.innerHTML = footer;
    document.body.append(footerConst);

    // !!! Buttons

    const aud = new Audio();
    aud.src =
      'https://raw.githubusercontent.com/igor2000xp/assets/c07f6d74fc110ff532f4479468cd4ae3801ee793/audio/audio.mp3';
    const play = document.getElementById('play-audio');
    const startPlay = function () {
      if (aud.paused) {
        aud.play();
      } else {
        aud.pause();
      }
    };

    play!.addEventListener('click', startPlay);

    // ??? Buttons trees
    const buttonTree = [];
    const imgTree = document.getElementById(
      'img-main-tree',
    ) as HTMLImageElement;

    const changeTree = [];
    for (let i = 1; i <= this.numberTrees; i++) {
      buttonTree[i] = document.getElementById(`imgTree${i}`);
      changeTree[i] = function () {
        imgTree.src = `https://raw.githubusercontent.com/igor2000xp/assets/main/tree/${i}.webp`;
      };
      buttonTree[i]?.addEventListener('click', changeTree[i]);
    }
    // !!
    // ??? Buttons trees
    const buttonBackground = [];
    const imgBackground = document.getElementById('trees-main__background')!;

    const changeBackground = [];
    for (let i = 1; i <= this.numberBackground; i++) {
      buttonBackground[i] = document.getElementById(`numBackground${i}`);
      changeBackground[i] = function () {
        imgBackground.style.backgroundImage = `url("https://raw.githubusercontent.com/igor2000xp/assets/main/bg/${i}.webp")`;
      };
      buttonBackground[i]?.addEventListener('click', changeBackground[i]);
    }

    const buttonHome = document.getElementById('home')!;
    const goTreesListener = function () {
      console.log('click-click');
      page.remove();
      footerConst.remove();
      buttonHome.removeEventListener('click', goTreesListener);
      // console.log('buttonMain.removeEventListener( "click", treesListener);');
      Component.router?.goTo('/');
    };
    buttonHome.addEventListener('click', goTreesListener);

    const buttonToys = document.getElementById('toys')!;
    const goHomeListener = function () {
      console.log('click-click');
      page.remove();
      footerConst.remove();
      buttonToys.removeEventListener('click', goHomeListener);
      // console.log('buttonMain.removeEventListener( "click", treesListener);');
      Component.router?.goTo('toys');
    };
    buttonToys.addEventListener('click', goHomeListener);

    // !!!! Drag and Drop
    // const nameDragAndDropBall: Array<string> = [];

    // for (let i = 0; i < this.numberCards; i++) {
    //   for (let k = Number(data[i].count); k > 0; k--) {
    //     const item = `${i + 1}-${k}`;
    //     nameDragAndDropBall.push(item);
    //   }
    // }

    // console.log(nameDragAndDropBall.length);

    // const ballArray = [];

    // for (let i = 0; i < nameDragAndDropBall.length; i++) {
    //   ballArray.push(new DragAndDropBall(nameDragAndDropBall[i]));
    // }
    // !!!! *****************
    // ??????
    let dragged: EventTarget | Node;
    // const outZone = document.querySelector( '#favToyContainer1' );
    // const inZone = document.querySelector( '#map-drop' );
    // const toyDrag = document.querySelector( '.sel1-2' );
    // console.log('toyDrag');
    // console.log(toyDrag);
    // outZone!.ondragover = allowDrop;

    function allowDrop(event: Event) {
      event.preventDefault();
      console.log(event);
    }

    // https://www.youtube.com/watch?v=-9qu_Z0D84g
    const dragAndDrop = () => {
      const toy: HTMLElement = document.querySelector('.sel1-2')!;
      const tree: HTMLElement = document.querySelector('.js-map')!;

      const dragStart = function (event: DragEvent) {
        console.log('dragStart');
        // (this: HTMLImageElement).classList.add('hide');
      };
      const dragEnd = function (event: DragEvent) {
        console.log('dragEnd');
        // (this: HTMLImageElement).classList.add('hide');
        // const shiftX = event.clientX;
        // - tree!.getBoundingClientRect().left;
        // const shiftY = event.clientY;
        // - tree!.getBoundingClientRect().top;

        // toy!.style.position = 'absolute';
        // toy!.style.zIndex = '1000';
        // document.body.append(tree);

        // function moveAt(pageX: number, pageY: number) {
        //   toy.style.left = event.clientX + 'px';
        //   // pageX - shiftX + 'px';
        //   toy.style.top = event.clientX + 'px';
        //   // pageY - shiftY + 'px';
        toy!.style.position = 'absolute';
        toy!.style.zIndex = '1000';

        function moveAt(scrX: number, scrY: number) {
          toy.style.left = scrX + 'px';
          // event.clientX + 'px';
          // pageX - shiftX + 'px';
          toy.style.top = scrY + 'px';
          // event.clientX + 'px';
          // pageY - shiftY + 'px';
      
        console.log(scrX);
        console.log(scrY);
        }

        moveAt(event.screenX, event.screenY);
        document.body.append(toy);
      

      };

      const dragEnter = function (event: DragEvent) {
        console.log('dragEnter');
        allowDrop(event);
        // event.dataTransfer?.setData("text/plain", event.target?.id);
      };
      // const dragOver = function () {
      //   console.log('dragOver');
      // };
      const dragLeave = function (event: DragEvent) {
        console.log('dragLeave');
      };
      const dragDrop = function (event: DragEvent) {
        console.log('dragDrop');
        if (toy !== null) tree?.append(toy);
      };
      const treeOver = function (event: DragEvent) {
        allowDrop(event);
        console.log('dragOver');
      };
      // tree!.addEventListener('dragover', dragOver);

      // if (tree != null) {
        // treeOver(tree);
        // tree.addEventListener('dragover' , function(this: HTMLElement, event: DragEvent ) {};
        // https://stackoverflow.com/questions/46925133/how-to-add-passive-option-to-addeventlistener-in-typescript
        (tree.addEventListener as (
          type: string,
          listener: (event: DragEvent) => void,
          options?: { useCapture?: boolean, passive?:boolean }
        ) => void)('dragover', (ev: DragEvent) => {treeOver(ev);});

        (tree.addEventListener as (
          type: string,
          listener: (event: DragEvent) => void,
          options?: { useCapture?: boolean, passive?:boolean }
        ) => void)('dragenter', (ev: DragEvent) => {dragEnter(ev);});
        // tree.addEventListener('dragenter', dragEnter);

        (tree.addEventListener as (
          type: string,
          listener: (event: DragEvent) => void,
          options?: { useCapture?: boolean, passive?:boolean }
        ) => void)('dragleave', (ev: DragEvent) => {dragLeave(ev);});
        // tree.addEventListener('dragleave', dragLeave);

        (tree.addEventListener as (
          type: string,
          listener: (event: DragEvent) => void,
          options?: { useCapture?: boolean, passive?:boolean }
        ) => void)('drop', (ev: DragEvent) => {dragDrop(ev);});
        // tree.addEventListener('drop', dragDrop);
        // dragEnter();
      // }
      //
      
      (toy.addEventListener as (
        type: string,
        listener: (event: DragEvent) => void,
        options?: { useCapture?: boolean, passive?:boolean }
      ) => void)('dragstart', (ev: DragEvent) => {dragStart(ev);});
      // toy?.addEventListener('dragstart', dragStart);


      (toy.addEventListener as (
        type: string,
        listener: (event: DragEvent) => void,
        options?: { useCapture?: boolean, passive?:boolean }
      ) => void)('dragend', (ev: DragEvent) => {dragEnd(ev);});
      // toy?.addEventListener('dragend', dragEnd);
    };
    dragAndDrop();

    // ??????

    // const internalDNDType = 'text/x-example'; // set this to something specific to your site
    // function dragEnterHandler(event: DragEvent) {
    //     if (event.target instanceof HTMLLIElement) {
    //       // use the element's data-value="" attribute as the value to be moving:
    //       event.dataTransfer!.setData(internalDNDType, event.target.dataset.value as string);
    //       event.dataTransfer!.effectAllowed = 'move'; // only allow moves
    //     } else {
    //       event.preventDefault(); // don't allow selection to be dragged
    //     }
    //   }
    // }

    /* events fired on the draggable target */
    // document.addEventListener('drag', function ( event ) {

    // }, false);

    // document.addEventListener('dragstart', function ( event ) {
    // Window.dragstart = function (event: DragEvent) {
    //     // store the original state on the dragged element
    //     dragged = event.target!;
    //     // make it half transparent
    //     (<HTMLElement>event.target).style.opacity = '0.5';
    // }
    // , false);

    // // document.addEventListener('dragend', function ( event ) {
    // //     // reset the transparency
    // //     (<HTMLElement>event.target).style.opacity = '';
    // // }, false);

    // /* events fired on the drop targets */
    // document.addEventListener('dragover', function ( event ) {
    //     // prevent default to allow drop
    //     console.log('prevent default to allow drop');
    //     event.preventDefault();
    // }, false);

    // document.addEventListener('dragenter', function ( event ) {
    //     // highlight potential drop target when the draggable element enters it
    //     if (  (<HTMLElement>event.target).className == 'droppable' ) {
    //       (<HTMLElement>event.target).style.background = 'purple';
    //     }

    // }, false);

    // document.addEventListener('dragleave', function ( event ) {
    //     // reset background of potential drop target when the draggable element leaves it
    //     if ( (<HTMLElement>event.target).className == 'droppable' ) {
    //       (<HTMLElement>event.target).style.background = '';
    //     }

    // }, false);

    // document.addEventListener('drop', function ( event ) {
    //     // prevent default action (open as link for some elements)
    //     event.preventDefault();
    //     // move dragged elem to the selected drop target
    //     if ( (<HTMLElement>event.target).className == 'droppable' ) {
    //       (<HTMLElement>event.target).style.background = '';
    //       ((dragged as Node).parentNode)!.removeChild( dragged as Element );
    //         (<HTMLElement>event.target).appendChild( dragged as Element);
    //     }

    // }, false);
  }

  onFilterUpdate() {
    if (this.state !== null)
      this.list = this.state.filteredToysList(
        this.state._toysList,
        this.state._filterState,
      );
    this.render();
  }
}
