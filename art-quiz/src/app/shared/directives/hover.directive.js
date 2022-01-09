import { WFMDirective } from '../../../framework/index';

class AppHoverDirective extends WFMDirective {
  // constructor(config) {
  //   super(config);
  // }
}

const appHoverDirective = new AppHoverDirective({
  selector: '[appHover]',
  onInit(element, color = 'blue') {
    // console.log(element, color);

    const defaultColor = element.css().color;

    element.on('mouseenter', () => {
      element.css({ color });
    });

    element.on('mouseleave', () => {
      element.css({ color: defaultColor });
    });
  },
});

export default appHoverDirective;
