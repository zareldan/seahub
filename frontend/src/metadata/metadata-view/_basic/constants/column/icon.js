import CellType from './type';

const COLUMNS_ICON_CONFIG = {
  [CellType.CREATOR]: 'creator',
  [CellType.LAST_MODIFIER]: 'creator',
  [CellType.CTIME]: 'creation-time',
  [CellType.MTIME]: 'creation-time',
  [CellType.DEFAULT]: 'text',
  [CellType.TEXT]: 'text',
};

const COLUMNS_ICON_NAME = {
  [CellType.CREATOR]: 'Creator',
  [CellType.LAST_MODIFIER]: 'Last modifier',
  [CellType.CTIME]: 'CTime',
  [CellType.MTIME]: 'Last modified time',
  [CellType.DEFAULT]: 'Text',
  [CellType.TEXT]: 'Text',
};

export {
  COLUMNS_ICON_CONFIG,
  COLUMNS_ICON_NAME,
};
