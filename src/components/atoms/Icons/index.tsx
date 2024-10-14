import { type ForwardRefExoticComponent, type RefAttributes, type SVGProps } from 'react';
import addSquareIcon from '@/assets/svgs/add-square.svg';
import arrowLeftIcon from '@/assets/svgs/arrow-left.svg';
import arrowRight2Icon from '@/assets/svgs/arrow-right-2.svg';
import arrowRightIcon from '@/assets/svgs/arrow-right.svg';
import bookMoneyIcon from '@/assets/svgs/book-money.svg';
import calenderIcon from '@/assets/svgs/calender.svg';
import cardIcon from '@/assets/svgs/card.svg';
import cashIcon from '@/assets/svgs/cash.svg';
import chartIcon from '@/assets/svgs/chart.svg';
import checkRightIcon from '@/assets/svgs/check-right.svg';
import checkboxIcon from '@/assets/svgs/checkbox.svg';
import chevronDownIcon from '@/assets/svgs/chevron-down.svg';
import closeIcon from '@/assets/svgs/close.svg';
import copyIcon from '@/assets/svgs/copy.svg';
import counterIcon from '@/assets/svgs/counter.svg';
import cursorIcon from '@/assets/svgs/cursor.svg';
import deliveryBoxIcon from '@/assets/svgs/delivery-box.svg';
import deliveryTimeIcon from '@/assets/svgs/delivery-time.svg';
import deliveryIcon from '@/assets/svgs/delivery.svg';
import documentMoneyIcon from '@/assets/svgs/document-money.svg';
import documentIcon from '@/assets/svgs/document.svg';
import dotHaftIcon from '@/assets/svgs/dot-haft.svg';
import dotVerticalIcon from '@/assets/svgs/dot-vertical.svg';
import dotIcon from '@/assets/svgs/dot.svg';
import emptyBoxIcon from '@/assets/svgs/empty-box.svg';
import exportIcon from '@/assets/svgs/export.svg';
import filterIcon from '@/assets/svgs/filter.svg';
import folderAddIcon from '@/assets/svgs/folder-add.svg';
import giftIcon from '@/assets/svgs/gift.svg';
import heartIcon from '@/assets/svgs/heart.svg';
import import02Icon from '@/assets/svgs/import-02.svg';
import importIcon from '@/assets/svgs/import.svg';
import infoCircleIcon from '@/assets/svgs/info-circle.svg';
import moneyIcon from '@/assets/svgs/money.svg';
import motobikeIcon from '@/assets/svgs/motobike.svg';
import packageIcon from '@/assets/svgs/package.svg';
import plusCircleIcon from '@/assets/svgs/plus-circle.svg';
import plusIcon from '@/assets/svgs/plus.svg';
import printerBorderIcon from '@/assets/svgs/printer-border.svg';
import printerIcon from '@/assets/svgs/printer.svg';
import questionIcon from '@/assets/svgs/question.svg';
import scanIcon from '@/assets/svgs/scan.svg';
import searchIcon from '@/assets/svgs/search.svg';
import settingIcon from '@/assets/svgs/setting.svg';
import shareIcon from '@/assets/svgs/share.svg';
import sortIcon from '@/assets/svgs/sort.svg';
import storeIcon from '@/assets/svgs/store.svg';
import userCardIcon from '@/assets/svgs/user-card.svg';
import userIcon from '@/assets/svgs/user.svg';

const IconList = {
  addSquareIcon,
  arrowLeftIcon,
  arrowRight2Icon,
  arrowRightIcon,
  bookMoneyIcon,
  calenderIcon,
  cardIcon,
  cashIcon,
  chartIcon,
  checkRightIcon,
  checkboxIcon,
  chevronDownIcon,
  closeIcon,
  copyIcon,
  counterIcon,
  cursorIcon,
  deliveryBoxIcon,
  deliveryTimeIcon,
  deliveryIcon,
  documentMoneyIcon,
  documentIcon,
  dotHaftIcon,
  dotVerticalIcon,
  dotIcon,
  emptyBoxIcon,
  exportIcon,
  filterIcon,
  folderAddIcon,
  giftIcon,
  heartIcon,
  import02Icon,
  importIcon,
  infoCircleIcon,
  moneyIcon,
  motobikeIcon,
  packageIcon,
  plusCircleIcon,
  plusIcon,
  printerBorderIcon,
  printerIcon,
  questionIcon,
  scanIcon,
  searchIcon,
  settingIcon,
  shareIcon,
  sortIcon,
  storeIcon,
  userCardIcon,
  userIcon,
};

type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;
interface IconProps extends ComponentAttributes {
  size?: string | number;
  absoluteStrokeWidth?: boolean;
}

export type Icon = ForwardRefExoticComponent<IconProps>;

export const Icons = IconList as Record<keyof typeof IconList, Icon>;
