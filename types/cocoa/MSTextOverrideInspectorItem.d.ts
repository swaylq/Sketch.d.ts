/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextOverrideInspectorItem<T0 = void, T1 = void, T2 = void> extends MSOverrideInspectorItem {
    dataOverrides<R = unknown>(): R;
    overrideTextField<R = NSTextField>(): R;
    setOverrideTextField<R = void, P0 = NSTextField>(_v: P0): R;
  }
  namespace MSTextOverrideInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSOverrideInspectorItem {
      alloc<R = MSTextOverrideInspectorItem>(): R;
      new: <R = MSTextOverrideInspectorItem>() => R;
      textFieldHeightForNumberOfLines<R = number, P0 = number>(_textFieldHeightForNumberOfLines: P0): R;
      textFieldHeightForOverrideRepresentation_layers<R = number, P0 = unknown, P1 = unknown>(_textFieldHeightForOverrideRepresentation: P0, _layers: P1): R;
      numberOfLinesForOverride_layers<R = number, P0 = unknown, P1 = unknown>(_numberOfLinesForOverride: P0, _layers: P1): R;
      numberOfLinesForSingleOverride<R = number, P0 = unknown>(_numberOfLinesForSingleOverride: P0): R;
    }
  }
}

declare const MSTextOverrideInspectorItem: cocoa.MSTextOverrideInspectorItem.CLASS;
