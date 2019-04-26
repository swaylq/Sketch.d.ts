/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorModelPickerView<T0 = void, T1 = void, T2 = void> extends NSControl {
    updateUI<R = void>(): R;
    setup<R = void>(): R;
    visible<R = boolean>(): R;
    setVisible<R = void, P0 = boolean>(_v: P0): R;
    active<R = boolean>(): R;
    setActive<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSColorModelPickerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl {
      alloc<R = MSColorModelPickerView>(): R;
      new: <R = MSColorModelPickerView>() => R;
    }
  }
}

declare const MSColorModelPickerView: cocoa.MSColorModelPickerView.CLASS;
