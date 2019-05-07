/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorModelPicker<T0 = void, T1 = void, T2 = void> extends NSViewController {
    cxx_destruct<R = void>(): R;
    colorModeAction<R = void, P0 = unknown>(_colorModeAction: P0): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    showMenu<R = void>(): R;
    disclosureAction<R = void, P0 = unknown>(_disclosureAction: P0): R;
    modelPickerView<R = MSColorModelPickerView>(): R;
    setModelPickerView<R = void, P0 = MSColorModelPickerView>(_v: P0): R;
    delegate<R = MSColorModelPickerDelegate>(): R;
    setDelegate<R = void, P0 = MSColorModelPickerDelegate>(_v: P0): R;
    colorModel<R = number>(): R;
    setColorModel<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSColorModelPicker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = MSColorModelPicker>(): R;
      new: <R = MSColorModelPicker>() => R;
    }
  }
}

declare const MSColorModelPicker: cocoa.MSColorModelPicker.CLASS;
