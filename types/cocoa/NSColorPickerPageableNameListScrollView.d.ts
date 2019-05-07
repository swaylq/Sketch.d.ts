/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerPageableNameListScrollView<T0 = void, T1 = void, T2 = void> extends NSScrollView, NSColorPickerSpectrumScrollerViewDelegateProtocol, NSColorPickerSpectrumScrollerViewDataSourceProtocol {
    _arrowPlacement<R = number>(): R;
    _partMouseDown<R = number>(): R;
    partHit<R = number, P0 = unknown>(_partHit: P0): R;
    updateWithFocusRingForWindowKeyChange<R = void>(): R;
    isFirstAndKey<R = boolean>(): R;
    refreshScrollers<R = void>(): R;
    colorList<R = unknown>(): R;
    pageCount<R = number>(): R;
    isPaged<R = boolean>(): R;
    awakeFromNib<R = void>(): R;
    currentPage<R = number>(): R;
    _init<R = void>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSColorPickerPageableNameListScrollView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrollView, NSColorPickerSpectrumScrollerViewDelegateProtocol, NSColorPickerSpectrumScrollerViewDataSourceProtocol {
      alloc<R = NSColorPickerPageableNameListScrollView>(): R;
      new: <R = NSColorPickerPageableNameListScrollView>() => R;
    }
  }
}

declare const NSColorPickerPageableNameListScrollView: cocoa.NSColorPickerPageableNameListScrollView.CLASS;
