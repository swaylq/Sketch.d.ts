/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _UIViewLFLDVariableChangeRecord<T0 = void, T1 = void, T2 = void> extends _UIViewLFLDChangeRecord {
    variableDelegate<R = NSView>(): R;
  }
  namespace _UIViewLFLDVariableChangeRecord {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _UIViewLFLDChangeRecord {
      alloc<R = _UIViewLFLDVariableChangeRecord>(): R;
      new: <R = _UIViewLFLDVariableChangeRecord>() => R;
    }
  }
}
