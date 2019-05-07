/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRemoveSelectedOverridesAction<T0 = void, T1 = void, T2 = void> extends MSOverrideAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    roughOverrideCount<R = number>(): R;
    removeSelectedOverrides<R = void, P0 = unknown>(_removeSelectedOverrides: P0): R;
  }
  namespace MSRemoveSelectedOverridesAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSOverrideAction {
      alloc<R = MSRemoveSelectedOverridesAction>(): R;
      new: <R = MSRemoveSelectedOverridesAction>() => R;
    }
  }
}

declare const MSRemoveSelectedOverridesAction: cocoa.MSRemoveSelectedOverridesAction.CLASS;
