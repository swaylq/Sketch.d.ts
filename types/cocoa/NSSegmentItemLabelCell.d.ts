/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSegmentItemLabelCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
    _usesBezeledSelectionStyle<R = boolean>(): R;
    set_usesBezeledSelectionStyle<R = void, P0 = boolean>(_v: P0): R;
    widgetName<R = NSString>(): R;
    setWidgetName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSSegmentItemLabelCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = NSSegmentItemLabelCell>(): R;
      new: <R = NSSegmentItemLabelCell>() => R;
      _getParentSegmentedControlViewFromView<R = unknown, P0 = unknown>(__getParentSegmentedControlViewFromView: P0): R;
    }
  }
}

declare const NSSegmentItemLabelCell: cocoa.NSSegmentItemLabelCell.CLASS;
