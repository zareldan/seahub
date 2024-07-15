import { DragSource, DropTarget } from 'react-dnd';
import PageItem from './page-item';
import wikiAPI from '../../../../utils/wiki-api';
import { wikiId, gettext } from '../../../../utils/constants';
import { Utils } from '../../../../utils/utils';
import toaster from '../../../../components/toast';

const dragSource = {
  beginDrag: props => {
    return {
      idx: props.pageIndex,
      data: { ...props.page, index: props.pageIndex },
      mode: 'wiki-page',
    };
  },
  endDrag(props, monitor) {
    const viewSource = monitor.getItem();
    const didDrop = monitor.didDrop();
    let viewTarget = {};
    if (!didDrop) {
      return { viewSource, viewTarget };
    }
  },
  isDragging(props) {
    const { draggedPage, pageIndex: targetIndex } = props;
    const { idx } = draggedPage;
    return idx > targetIndex;
  }
};

const dropTarget = {
  drop(props, monitor) {
    const dragSource = monitor.getItem();
    if (dragSource.mode === 'wiki-page') {
      const { pageIndex: targetIndex, page: targetPage } = props;
      const draggedPageId = dragSource.data.id;
      const targetPageId = targetPage.id;
      if (draggedPageId !== targetPageId) {
        const sourceIndex = dragSource.idx;
        const move_position = sourceIndex > targetIndex ? 'move_above' : 'move_below';
        wikiAPI.moveWiki2Page(wikiId, draggedPageId, targetPageId, move_position).then(res => {
          props.onMovePage({
            moved_page_id: draggedPageId,
            target_page_id: targetPageId,
            move_position,
          });
        }).catch((error) => {
          if (error.response && error.response.status === 400 && error.response.data.error_msg === 'Internal Server Error') {
            toaster.danger(gettext('Cannot move parent page to child page'));
          } else {
            let errMessage = Utils.getErrorMsg(error);
            toaster.danger(errMessage);
          }
        });
      }
      return;
    }
  }
};

const dragCollect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
});

const dropCollect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
  draggedPage: monitor.getItem()
});

export default DropTarget('WikiNav', dropTarget, dropCollect)(
  DragSource('WikiNav', dragSource, dragCollect)(PageItem)
);
