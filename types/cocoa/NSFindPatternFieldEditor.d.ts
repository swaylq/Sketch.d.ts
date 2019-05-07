/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFindPatternFieldEditor<T0 = void, T1 = void, T2 = void> extends NSTextView {
    readablePasteboardTypes<R = unknown>(): R;
    writablePasteboardTypes<R = unknown>(): R;
    acceptableDragTypes<R = unknown>(): R;
    usesFontPanel<R = boolean>(): R;
    setUsesFontPanel<R = void, P0 = boolean>(_setUsesFontPanel: P0): R;
  }
  namespace NSFindPatternFieldEditor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextView {
      alloc<R = NSFindPatternFieldEditor>(): R;
      new: <R = NSFindPatternFieldEditor>() => R;
      findPatternFieldEditorForWindow<R = unknown, P0 = unknown>(_findPatternFieldEditorForWindow: P0): R;
    }
  }
}

declare const NSFindPatternFieldEditor: cocoa.NSFindPatternFieldEditor.CLASS;
