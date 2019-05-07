/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConstantBaselineLayoutManager<T0 = void, T1 = void, T2 = void> extends NSLayoutManager {
    cxx_destruct<R = void>(): R;
    processEditingForTextStorage_edited_range_changeInLength_invalidatedRange<R = void, P0 = unknown, P1 = number, P2 = _NSRange, P3 = number, P4 = _NSRange>(_processEditingForTextStorage: P0, _edited: P1, _range: P2, _changeInLength: P3, _invalidatedRange: P4): R;
    setTypesetter<R = void, P0 = unknown>(_setTypesetter: P0): R;
    constantBaselineTypesetter<R = MSConstantBaselineTypesetter>(): R;
    setConstantBaselineTypesetter<R = void, P0 = MSConstantBaselineTypesetter>(_v: P0): R;
  }
  namespace MSConstantBaselineLayoutManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSLayoutManager {}
  }
}

declare const MSConstantBaselineLayoutManager: cocoa.MSConstantBaselineLayoutManager.CLASS;
