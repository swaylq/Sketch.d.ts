/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerSpectrumScrollerView<T0 = void, T1 = void, T2 = void> extends NSView {
    _handleMouse<R = boolean, P0 = unknown>(__handleMouse: P0): R;
    isFlipped<R = boolean>(): R;
    dataSource<R = unknown>(): R;
    setDataSource<R = void, P0 = unknown>(_setDataSource: P0): R;
    delegate<R = unknown>(): R;
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
  }
  namespace NSColorPickerSpectrumScrollerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSColorPickerSpectrumScrollerView>(): R;
      new: <R = NSColorPickerSpectrumScrollerView>() => R;
    }
  }
}

declare const NSColorPickerSpectrumScrollerView: cocoa.NSColorPickerSpectrumScrollerView.CLASS;
