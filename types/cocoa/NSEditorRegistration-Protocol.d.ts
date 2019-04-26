/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEditorRegistrationProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    objectDidEndEditing<R = void, P0 = NSEditor>(_objectDidEndEditing: P0): R;
    objectDidBeginEditing<R = void, P0 = NSEditor>(_objectDidBeginEditing: P0): R;
  }
  namespace NSEditorRegistrationProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
