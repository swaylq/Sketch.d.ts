/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverrideTextField<T0 = void, T1 = void, T2 = void> extends NSTextField {
    tryGivingUpFirstResponderToSketchDocument<R = boolean>(): R;
    giveUpFirstResponder<R = void>(): R;
    insertTabIgnoringFieldEditor<R = void, P0 = unknown>(_insertTabIgnoringFieldEditor: P0): R;
    insertNewline<R = void, P0 = unknown>(_insertNewline: P0): R;
    cancelOperation<R = void, P0 = unknown>(_cancelOperation: P0): R;
    didChangeTextDuringEditing<R = boolean>(): R;
    setDidChangeTextDuringEditing<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSOverrideTextField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextField {
      alloc<R = MSOverrideTextField>(): R;
      new: <R = MSOverrideTextField>() => R;
    }
  }
}

declare const MSOverrideTextField: cocoa.MSOverrideTextField.CLASS;
