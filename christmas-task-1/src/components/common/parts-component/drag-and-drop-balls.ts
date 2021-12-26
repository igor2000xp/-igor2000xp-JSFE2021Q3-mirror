export default class DragAndDropBall {
  private nameBall: string;

  constructor(nameBall: string) {
    this.nameBall = nameBall;
    this.creatDraggedBall(this.nameBall);
  }

  protected creatDraggedBall(nameBall: string) {
    const ball = document.getElementById(nameBall)!;
    let currentDroppable: HTMLElement | null = null;

    ball.ondragstart = function () {
      return false;
    };

    ball.onmousedown = function (event) {
      const shiftX = event.clientX - ball.getBoundingClientRect().left;
      const shiftY = event.clientY - ball.getBoundingClientRect().top;

        function moveAt(pageX: number, pageY: number) {
          ball.style.left = pageX - shiftX + 'px';
          ball.style.top = pageY - shiftY + 'px';
        }

        function enterDroppable(elem: HTMLElement) {
          elem.style.background = 'pink';
        }

        function leaveDroppable(elem: HTMLElement) {
          elem.style.background = '';
        }

        function onMouseMove(event: MouseEvent) {
          moveAt(event.pageX, event.pageY);

          ball.hidden = true;
          const elemBelow = document.elementFromPoint(
            event.clientX,
            event.clientY,
          );
          ball.hidden = false;

          if (!elemBelow) return;

          const droppableBelow: HTMLElement = elemBelow.closest('.droppable')!;
          if (currentDroppable != droppableBelow) {
            if (currentDroppable) {
              // null если мы были не над droppable до этого события
              // (например, над пустым пространством)
              leaveDroppable(currentDroppable);
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) {
              // null если мы не над droppable сейчас, во время этого события
              // (например, только что покинули droppable)
              enterDroppable(currentDroppable);
            }
          }
        }

        ball.onmouseup = function () {
          document.removeEventListener('mousemove', onMouseMove);
          ball.onmouseup = null;
        };

        ball.style.position = 'absolute';
        ball.style.zIndex = '1000';
        document.body.append(ball);
        moveAt(event.pageX, event.pageY);

        document.addEventListener('mousemove', onMouseMove);
      };
    }
  }
