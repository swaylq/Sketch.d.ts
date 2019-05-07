/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSRuleEditorViewSliceHolder<T0 = void, T1 = void, T2 = void> extends NSView {
    _preferredAppearance<R = unknown>(): R;
    _vibrantBlendingStyleForSubtree<R = number>(): R;
    isFlipped<R = boolean>(): R;
  }
  namespace _NSRuleEditorViewSliceHolder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSRuleEditorViewSliceHolder>(): R;
      new: <R = _NSRuleEditorViewSliceHolder>() => R;
    }
  }
}
